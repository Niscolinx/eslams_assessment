import bcrypt from 'bcryptjs'
import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import User, { IUser } from '../../../models/User'
import dbConnect from '../../../lib/dbConnect'
import { setCookie } from 'cookies-next'

export default async function login(req: NextApiRequest, res: NextApiResponse) {
    const { emailOrUsername, password, admin } = req.body

    console.log(req.body)

    try {
        await dbConnect()

        const email: IUser | null = await User.findOne({
            email: emailOrUsername,
        })
        const username: IUser | null = await User.findOne({
            username: emailOrUsername,
        })

        const user = email || username

        if (admin) {

            console.log({ user })
            if (!user) {
                return res.status(401).json( 'User not found' )
            }
            if (!bcrypt.compareSync(password, user.password)) {
                return res.status(401).json( 'Incorrect password')
            }
            const token = jwt.sign(
                { userId: user._id.toString(), email: user.email },
                process.env.JWT_SECRET!
            )
            // setCookie('adminToken', token, {
            //     secure: process.env.NODE_ENV! === 'production',
            // })

            //set cookie in nodejs
            res.setHeader('Set-Cookie', `adminToken=${token}; Path=/; HttpOnly; Secure; Max-Age=${60 * 60 * 24 * 7}`)
            return res.status(200).json({ user })
        }

        console.log("Is not admin")
    
        

        if (!user) {
            return res.status(401).json('Not found')
        }

        const checkPassword = await bcrypt.compare(password, user!.password)

        if (!checkPassword) {
            return res.status(401).json('Incorrect password')
        }

        const token = jwt.sign(
            {
                email,
                userId: user!._id.toString(),
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: '1hr',
            }
        )
        setCookie('userSession', 'value', { req, res, maxAge: 60 * 60 * 24 })

        return res.status(200).json(
            user
            //token,
        )
    } catch (err) {
        console.log({ err })
        res.status(400).json('error')
    }
}
