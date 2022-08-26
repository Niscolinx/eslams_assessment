import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../lib/dbConnect'


export default async function user(req: NextApiRequest, res: NextApiResponse) {
    const connect = await dbConnect()
  
    if(!connect){
        console.log('not connected')
        return res.status(501).json('Server Error')
    }

    else{
        return res.json("Connected")
    }
}
