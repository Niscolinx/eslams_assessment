import { model, models, Schema } from 'mongoose'

export interface IOtp {
    [x: string]: any
    _id: Object
    code: string

    status: string
    creatorEmail: string
}

const otpSchema = new Schema<IOtp>(
    {
        code: {
            type: String,
            required: true,
        },

        status: {
            type: String,
            default: 'pending',
        },

        creatorEmail: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

export default models.otp || model('otp', otpSchema)
