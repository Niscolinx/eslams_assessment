import { IUser } from '../../models/User'
import { NextApiRequest, NextApiResponse } from 'next'
import User from '../../models/User'
import dbConnect from '../../lib/dbConnect'

export default async function checkAuth(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect()
    console.log('req body', req.body)
    const { email }: IUser = req.body.user

    const user = await User.findOne({ email })

    return res.json(user)
}
