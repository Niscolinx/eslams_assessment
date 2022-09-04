import { NextApiRequest, NextApiResponse} from 'next';
import dbConnect from '../../lib/dbConnect';
import Event from '../../models/event';


export default async function events(req: NextApiRequest, res: NextApiResponse){

    console.log('the event')
    
    const {EVENTDATA} = req.body


    try {
        await dbConnect()

        const event = await Event.create(EVENTDATA)
            
        console.log({event})

    }
    catch (error) {
        res.status(500).json({message: 'Something went wrong'})
    }

  

}