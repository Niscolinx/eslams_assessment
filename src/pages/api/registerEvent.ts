import User, { IUser } from './../../models/User'
import { NextApiRequest, NextApiResponse } from 'next'
import * as jose from 'jose'
import dbConnect from '../../lib/dbConnect'

export default async function (req: NextApiRequest, res: NextApiResponse) {
    await dbConnect()

    let { event } = req.body

    const userCookie = req.cookies

    const { tokenCookie } = userCookie

    try {
        if (tokenCookie) {
            const { payload: jwtData } = await jose.jwtVerify(
                tokenCookie,
                new TextEncoder().encode(process.env.JWT_SECRET!)
            )

            const user: IUser | null = await User.findOne({
                email: jwtData.email,
            })

            if (user) {
                await new Promise((resolve, reject) => {
                    const checkEvent = user.registeredEvents.some((eventId) => {
                        return eventId.toString() === event
                    })

                    if (checkEvent) {
                        reject(false)
                    }
                    resolve(true)
                })

                user.registeredEvents.push(event)

                
                await user.save()
                return res.status(200).json({
                    message: 'Event registered successfully',
                    event,
                    user,
                })
            } else {
                return res.status(404).json({
                    message: 'user not found',
                })
            }
        } else {
            return res.status(401).json({
                message: 'Unauthorized',
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(403).json({ message: 'Forbidden' })
    }
}
