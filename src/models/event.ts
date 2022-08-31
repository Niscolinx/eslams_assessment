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
                age: {
                    type: String,
                    required: true,
                },
                competitionType: {
                    type: String,
                    required: true,
                },
                location: {
                    type: String,
                    required: true,
                },
                registrationRequirements: {
                    type: [String],
                    required: true,
                },
            },
        ],
    },
    { timestamps: true }
)

export default models.event || model('event', eventSchema)
