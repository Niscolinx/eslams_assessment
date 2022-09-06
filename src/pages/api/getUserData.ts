import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../lib/dbConnect'
import Event from '../../models/event'
import * as jose from 'jose'
import User, { IUser } from '../../models/User'

export default async function getUserEvents(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        await dbConnect()

        const { tokenCookie } = req.cookies

        if (!tokenCookie) {
            return res.status(401).json({
                message: 'Unauthorized',
            })
        }
        const { payload: jwtData } = await jose.jwtVerify(
            tokenCookie,
            new TextEncoder().encode(process.env.JWT_SECRET!)
        )

        const user: IUser | null = await User.findOne({
            email: jwtData.email,
        })

        if(!user){
            return res.status(404).json({
                message: 'User not found',
            })
        }

        const userEvents = await Event.find({
            _id: {
                $in: user.registeredEvents,
            },
        })

        res.status(200).json({
            user,
            userEvents
        })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}
