import { NextApiRequest, NextApiResponse} from 'next';
import Event from '../../models/event';


export default async function events(req: NextApiRequest, res: NextApiResponse){

    
    const {EVENTDATA} = req.body


    try {

        EVENTDATA.forEach(async (event: any) => {
            console.log(event.details[0])
            const newEvent = new Event({
                heading: event.heading,
                price: event.price,
                details: {
                    age: event.details[0].Age,
                    competitionType: event.details[1]['Competition Type'],
                    location: event.details[2].location,
                    registrationRequirements: event.details[3]['Registration Requirements']
                },
                date: {
                    from: event.date.from,
                    to: event.date.to
                },


            })
            await newEvent.save()
        })

    }
    catch (error) {
        res.status(500).json({message: 'Something went wrong'})
    }

    return res.status(200).json({
        message: 'stored'
    })

}