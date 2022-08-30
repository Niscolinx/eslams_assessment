import { model, models, Schema } from 'mongoose'

export interface IEvent {
    [x: string]: any
    _id?: Object
    heading: string
    price: number
    details: [
        { age: string },
        { competitionType: string },
        { location: string },
        { registrationRequirements: string[] }
    ]
    date: {
        from: string
        to: string
    }
    which: number
}

const eventSchema = new Schema<IEvent>(
    {
       
    },
    { timestamps: true }
)

export default models.event || model('event', eventSchema)
