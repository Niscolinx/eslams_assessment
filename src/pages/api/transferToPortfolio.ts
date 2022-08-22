import { NextApiRequest, NextApiResponse } from 'next'
import User, { IUser } from '../../models/User'
import Transfer from '../../models/transfer'
import dbConnect from '../../lib/dbConnect'

interface returnTypeJson {
    updatedUser: IUser
}

type JsonType<returnTypeJson> = (body: returnTypeJson) => object

export interface TypedReqBody<T> extends NextApiResponse {
    json: JsonType<T>
}

export default async function transferToPortfolio(
    req: NextApiRequest,
    res: TypedReqBody<returnTypeJson>
) {
    await dbConnect()

    const { email }: IUser = req.body.session.user
    const { portfolio, selectedOption } = req.body

    console.log({ selectedOption })

    const user = await User.findOne({ email })

    if (!user) {
        return res.status(401).json('user not found')
    }


    user.portfolio += portfolio

    if (selectedOption === 'Referral Income') {
        user.referralBonus = 0
    } else {
        user.tokensMined = 0
        user.videoMined = 0
    }


    const updatedTransfer = new Transfer({
        creator: user,
        amount: portfolio,
    })

    await updatedTransfer.save()

    await user.transfers.push(updatedTransfer)

    const updatedUser = await user.save()

    return res.json({
        updatedUser,
    })
}
