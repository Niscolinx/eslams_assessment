import { IUser } from '../../models/User'
import { NextApiRequest, NextApiResponse } from 'next'
import User from '../../models/User'
import dbConnect from '../../lib/dbConnect'

export default async function user(req: NextApiRequest, res: NextApiResponse) {
    const { email }: IUser = req.body.user

    const user = await User.findOne({ email })


    return res.json(user)
}
