import dayjs from 'dayjs'
import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../lib/dbConnect'
import User, { IUser } from '../../models/User'

interface returnTypeJson {
    mineTokenEndingTime: string
    isMining: boolean
    tokensMined: number
}

type JsonType<returnTypeJson> = (body: returnTypeJson) => object

export interface TypedReqBody<T> extends NextApiResponse {
    json: JsonType<T>
}

export default async function StartMining(
    req: NextApiRequest,
    res: TypedReqBody<returnTypeJson>
) {
    await dbConnect()
    const mineTokenEndingTime = dayjs().add(24, 'hour')

    const { email }: IUser = req.body.user

    const user = await User.findOne({ email })

    if (user.isMining) {
        return res.json({
            mineTokenEndingTime: user.mineTokenEndingTime,
            isMining: user.isMining,
            tokensMined: user.tokensMined,
        })
    } else {
        user.mineTokenEndingTime = mineTokenEndingTime
        user.isMining = true
        await user.save()

        return res.json({
            isMining: user.isMining,
            mineTokenEndingTime: user.mineTokenEndingTime,
            tokensMined: user.tokensMined,
        })
    }
}
