import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../lib/dbConnect'
import GeneratedCode from '../../models/generatedCode'
import { transporter } from '../../utils/emailTransport'

export default async function storeGeneratedCode(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        await dbConnect()

        transporter.verify(function (error, _success) {
            if (error) {
                console.log(error)
            } else {
                console.log('Server is ready to take our messages!')
            }
        })

        const generatedCodes = await GeneratedCode.find().sort({createdAt: -1})

        return res.status(200).json(generatedCodes)
    } catch (err) {
        res.status(400).json('error')
    }
}
