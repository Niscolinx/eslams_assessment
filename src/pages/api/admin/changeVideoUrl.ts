import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/dbConnect'
import VideoUrl from '../../../models/videoUrl'

export default async function changeVideoUrl(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await dbConnect()

    console.log(req.method)

    if(req.method === 'POST') {

        const { url } = req.body
        
        const updatedUrl = await VideoUrl.findOneAndUpdate({}, { url }, {returnDocument: 'after'})
        
        
        return res.status(200).json({
            changedVideoUrl: updatedUrl.url
        })
    }
    else {

        const videoUrl = await VideoUrl.findOne({})

        return res.status(200).json({
            videoUrl: videoUrl.url
        })
    }
}
