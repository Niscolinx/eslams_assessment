import { IUser } from '../../models/User'
import { NextApiRequest, NextApiResponse } from 'next'
import User from '../../models/User'
import dbConnect from '../../lib/dbConnect'

export default async function getUsers(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect()
    const users = await User.find({role: 'Customer'})

    return res.json(users)
}
