import { IUser } from './../../models/User'
import bcrypt from 'bcryptjs'
import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'
import * as jose from 'jose'

export default async function Profile(
    req: NextApiRequest,
    res: NextApiResponse
) {
  

    const { personalEmail, password, email } = req.body.handleInput
    const uploadedCoverPhotoUrl = req.body.uploadedCoverPhotoUrl
    const uploadedProfilePhotoUrl = req.body.uploadedProfilePhotoUrl


    try {
        await dbConnect()

        const user: IUser | null = await User.findOne({
            email,
        })

        if (!user) {
            return res.status(401).json('Not found')
        }

        const update = await User.findOneAndUpdate(
            { email },
            {
                ...req.body,
                coverPhotoUrl: uploadedCoverPhotoUrl || user.coverPhotoUrl,
                profilePhotoUrl: uploadedProfilePhotoUrl || user.profilePhotoUrl,
                email: personalEmail,
                password: password
                    ? bcrypt.hashSync(password, 10)
                    : user.password,
            },
            {
                returnDocument: 'after',
            }
        )

        if (email !== personalEmail) {
            const token = await new jose.SignJWT({
                email: personalEmail,
                userId: user._id!.toString(),
            })
                .setProtectedHeader({ alg: 'HS256' })
                .setIssuedAt()
                .setExpirationTime('30d')
                .sign(new TextEncoder().encode(process.env.JWT_SECRET!))

            res.setHeader(
                'Set-Cookie',
                `tokenCookie=${token}; Path=/; HttpOnly; Secure; Max-Age=${
                    60 * 60 * 24 * 7
                }`
            )
        }

        console.log({update})


        return res.status(200).json(update)
    } catch (err) {
        console.log({ err })
        res.status(400).json('error')
    }
}
