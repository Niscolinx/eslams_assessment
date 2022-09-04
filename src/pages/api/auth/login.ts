import bcrypt from 'bcryptjs'
import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import User, { IUser } from '../../../models/User'
import dbConnect from '../../../lib/dbConnect'
import { setCookie } from 'cookies-next'
import * as jose from 'jose'

export default async function login(req: NextApiRequest, res: NextApiResponse) {
    console.log('login')
    const { email, password } = req.body

    console.log(req.body)

    try {
        await dbConnect()
        
        const user = await User.findOne({
            email,
        })
        
        

        console.log({ user })
        if (!user) {
            return res.status(401).json('User not found')
        }
       if (!bcrypt.compareSync(password, user.password)) {
           return res.status(401).json('Incorrect password')
        }
         const token = await new jose.SignJWT({
             email: user.email,
             userId: user!._id.toString(),
         })
             .setProtectedHeader({ alg: 'HS256' })
             .setIssuedAt()
             .setExpirationTime('30d')
             .sign(new TextEncoder().encode(process.env.JWT_SECRET!))

        //set cookie in nodejs
        res.setHeader(
            'Set-Cookie',
            `tokenCookie=${token}; Path=/; HttpOnly; Secure; Max-Age=${
                60 * 60 * 24 * 7
            }`
        )

       // req.Auth = ''
        return res.status(200).json({ user })
    } catch (err) {
        console.log({ err })
        res.status(400).json('error')
    }
}
