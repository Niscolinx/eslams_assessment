import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../lib/dbConnect'
import Event from '../../models/event'

export default async function events(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {

        const event = await Event.find({})

        res.status(200).json(event)
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}
