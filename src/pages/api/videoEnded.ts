import dayjs from 'dayjs'
import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../lib/dbConnect'
import User, { IUser } from '../../models/User'

interface returnTypeJson {
    videoMined: number
    watchedVideo: boolean
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
    const { email } = req.body.user

    const user: IUser | null = await User.findOne({ email })

    if (!user) {
        return res.status(401).json({
            message: 'user not found',
        })
    }

    const watchVideoAgainIn = JSON.stringify(dayjs().add(24, 'hour'))
    if (!user.watchedVideo) {
        user.watchedVideo = true
        user.videoMined = user.videoMined + 0.5
        user.watchVideoAgainIn = watchVideoAgainIn
        await user.save()
    } else {
        const nowTimeStamp = dayjs()

        const diff = nowTimeStamp.isAfter(
            dayjs(JSON.parse(user.watchVideoAgainIn))
        )

      

        if (!diff) {
            
            return res.json({
                videoMined: user.videoMined,
                watchedVideo: user.watchedVideo,
            })
        } else {
            user.videoMined = user.videoMined + 0.5
            user.watchVideoAgainIn = watchVideoAgainIn
            await user.save()
        }
    }



    return res.json({
        videoMined: user.videoMined,
        watchedVideo: user.watchedVideo,
    })
}
