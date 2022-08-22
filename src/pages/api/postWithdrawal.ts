import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'
import withdrawal from '../../models/withdrawal'

export default async function postWithdrawal(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await dbConnect()
    const { amount, email } = req.body

    const user = await User.findOne({ email })

    const withdraw = await new withdrawal({
        amount,
        creator: user,
    }).save()

    if (!withdraw) {
        res.status(400).json({
            status: 'fail',
            message: 'Withdrawal failed',
        })
    }

    user.portfolio -= amount

    await user.save()

    return res.status(200).json({
        status: 'success',
        withdraw
    })
}
