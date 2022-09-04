import { NextApiRequest, NextApiResponse} from 'next';


export default function async(req: NextApiRequest, res: NextApiResponse){

    
    const {EVENTDATA} = req.body

    return res..stjson({
        message: 'stored'
    })

}