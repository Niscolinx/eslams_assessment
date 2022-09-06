import User, { IUser } from './../../models/User'
import { NextApiRequest, NextApiResponse } from 'next'
import * as jose from 'jose'
import dbConnect from '../../lib/dbConnect'

export default async function (req: NextApiRequest, res: NextApiResponse) {
    await dbConnect()

    const { event } = req.body

    const userCookie = req.cookies

    const { tokenCookie } = userCookie

    if (tokenCookie) {
        const { payload: jwtData } = await jose.jwtVerify(
            tokenCookie,
            new TextEncoder().encode(process.env.JWT_SECRET!)
        )

        const user: IUser | null = await User.findOne({ email: jwtData.email })

        if (user) {
            console.log({user})

            user.registeredEvents.push(event)
            await user.save()
            return res.status(200).json({
                message: 'Event registered successfully',
                event,
                user
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
