import User, { IUser } from './../../models/User'
import { NextApiRequest, NextApiResponse } from 'next'
import * as jose from 'jose'
import dbConnect from '../../lib/dbConnect'
import mongoose from 'mongoose'

export default async function (req: NextApiRequest, res: NextApiResponse) {
    await dbConnect()

    let { event } = req.body

    const userCookie = req.cookies

    const { tokenCookie } = userCookie

    if (tokenCookie) {
        const { payload: jwtData } = await jose.jwtVerify(
            tokenCookie,
            new TextEncoder().encode(process.env.JWT_SECRET!)
        )

        const user: IUser | null = await User.findOne({ email: jwtData.email })

        if (user) {
            console.log({ user })

            event = new mongoose.Types.ObjectId(event)

            const isRegistered = new Promise((resolve, reject) => {
                const checkEvent =  user.registeredEvents.some((eventId) => {
                    
                    return eventId === event._id
                })

                console.log({checkEvent})

                return checkEvent
            })

            console.log({ isRegistered })

            await user.save()
            return res.status(200).json({
                message: 'Event registered successfully',
                event,
                user,
            })
        } else {
            return res.status(400).json({
                message: 'user not found',
            })
        }
    } else {
        return res.status(401).json({
            message: 'token not valid',
        })
    }
}
