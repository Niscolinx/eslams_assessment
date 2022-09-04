import { model, models, Schema } from 'mongoose'

export interface IEvent {
    [x: string]: any
    _id?: Object
    heading: string
    price: number
    details: {
        [key: string]: any
    }
    date: {
        from: Date
        to: Date
    }
}

const eventSchema = new Schema<IEvent>(
    {
        heading: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },
        details: { 
            type: Object
         },
    },
    { timestamps: true }
)

export default models.event || model('event', eventSchema)
