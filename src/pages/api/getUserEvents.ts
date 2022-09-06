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

        res.status(200).json(event)
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}
