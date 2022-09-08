import { IUser } from './../../models/User';
import bcrypt from 'bcryptjs'
import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'

export default async function Profile(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { personalEmail, password, email} = req.body

    console.log(req.body)

    try {
        await dbConnect()
        
        const user: IUser | null = await User.findOne({
            email,
        })

        if (!user) {
            return res.status(401).json('Not found')
        }

        if (password) {
            console.log('password', password)
            user.password = await bcrypt.hash(password, 12)
        }

        //update user data
       
        const update = await User.updateOne({ email }, {
            ...req.body,
            email: personalEmail,
        })

    console.log({update})


       // await user.save()

        return res.status(200).json(user)
    } catch (err) {
        console.log({ err })
        res.status(400).json('error')
    }
}
