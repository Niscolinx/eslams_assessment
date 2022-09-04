import { NextApiRequest, NextApiResponse} from 'next';
import Event from '../../models/event';


export default async function events(req: NextApiRequest, res: NextApiResponse){

    console.log('the event')
    
    const {EVENTDATA} = req.body


    try {

        const events = await Event.find()
            
        console.log({events})

    }
    catch (error) {
        res.status(500).json({message: 'Something went wrong'})
    }

  

}