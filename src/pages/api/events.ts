import { NextApiRequest, NextApiResponse} from 'next';
import Event from '../../models/event';


export default async function events(req: NextApiRequest, res: NextApiResponse){

    
    const {EVENTDATA} = req.body

    const storeEvents = await new Event(EVENTDATA).save()

    return res.status(200).json({
        message: 'stored'
    })

}