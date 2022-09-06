import { NextApiRequest, NextApiResponse } from 'next'
import User from '../../models/User'
import dbConnect from '../../lib/dbConnect'

export default async function index(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await dbConnect()
    const users = await User.find({ role: 'Customer' })

    console.log({users})
    return res.json(users)
}
