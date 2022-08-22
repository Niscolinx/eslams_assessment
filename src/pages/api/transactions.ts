import { IUser } from '../../models/User'
import { NextApiRequest, NextApiResponse } from 'next'
import User from '../../models/User'
import transfer from '../../models/transfer'
import withdrawal from '../../models/withdrawal'
import dbConnect from '../../lib/dbConnect'

export default async function transactions(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await dbConnect()
    const { email }: IUser = req.body.user

    const user = await User.findOne({ email })

    if (!user) {
        return res.status(404).json('User not found')
    }
    const transfers = await transfer.find({ creator: user._id }).sort({createdAt: -1})
    const withdrawals = await withdrawal
        .find({ creator: user._id })
        .sort({ createdAt: -1 })


    return res.json({transfers, withdrawals})
}
