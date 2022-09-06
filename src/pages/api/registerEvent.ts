import User, { IUser } from './../../models/User'
import { NextApiRequest, NextApiResponse } from 'next'
import * as jose from 'jose'

export default async function (req: NextApiRequest, res: NextApiResponse) {
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

        }
    }
    else{
        return res.status(401).json({
            message: 'token not valid'
        })
    }
}
