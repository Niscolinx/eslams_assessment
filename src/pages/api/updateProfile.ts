import bcrypt from 'bcryptjs'
import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'

export default async function Profile(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { email, password } = req.body

    console.log(req.body)

    try {
        await dbConnect()
        
        const user = await User.findOne({
            email,
        })

        if (!user) {
            return res.status(401).json('Not found')
        }

        if (password) {
            user.password = await bcrypt.hash(password, 12)
        }


        await user.save()

        return res.status(200).json(user)
    } catch (err) {
        console.log({ err })
        res.status(400).json('error')
    }
}
