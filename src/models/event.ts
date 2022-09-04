import { model, models, Schema } from 'mongoose'

export interface IEvent {
    [x: string]: any
    _id?: Object
    heading: string
    price: number
    details: [
        {
            heading: string
            age: number
            price: number
            details: any
        }
    ]
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
        details: [
            {
                heading: {
                    type: String,
                },
                age: {
                    type: Number,
                },
                price: {
                    type: Number,
                },
                details: {
                    type: Schema.Types.Mixed,
                },
            },
        ],
    },
    { timestamps: true }
)

export default models.event || model('event', eventSchema)
