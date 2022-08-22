import { transporter } from './../../utils/emailTransport';
import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'
import withdrawal from '../../models/withdrawal'

export default async function getWithdrawals(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await dbConnect()

    transporter.verify(function (error, _success) {
      
       if (error) {
           console.log(error)
       } else {
           console.log('Server is ready to take our messages')
       }
   })

    const withdrawals = await withdrawal
        .find()
        .sort({ createdAt: -1 })
        .populate('creator', { model: User })

    return res.json(withdrawals)
}
