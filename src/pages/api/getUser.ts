import User, { IUser } from './../../models/User'
import { NextApiRequest, NextApiResponse } from 'next'
import * as jose from 'jose'
import dbConnect from '../../lib/dbConnect'

export default async function (req: NextApiRequest, res: NextApiResponse) {
    await dbConnect()

    const userCookie = req.cookies

    const { tokenCookie } = userCookie

    try {
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
    } catch (error) {
        console.log(error)
        return res.status(403).json({ message: 'Forbidden' })
    }
}
