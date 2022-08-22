import { NextApiRequest, NextApiResponse } from 'next'
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
    const { email } = req.body.user
    console.log({email})

    const user: IUser | null = await User.findOne({ email })

    if(!user){
        return res.status(401).json('user not found')
    }

    console.log('tokens mined before **********', user.tokensMined)

    user.isMining = false
    user.mineTokenEndingTime = ''
    user.tokensMined = user.tokensMined + 0.5

    console.log('tokens mined after **********', user.tokensMined)
    await user.save()

    return res.json({
        isMining: user.isMining,
        mineTokenEndingTime: user.mineTokenEndingTime,
        tokensMined: user.tokensMined,
    })
}
