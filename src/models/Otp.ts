import { model, models, Schema } from 'mongoose'

export interface IOtp {
    [x: string]: any
    _id: Object
    code: string
    status: string
    creator: Object
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

        creator: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
    },
    { timestamps: true }
)

export default models.otp || model('otp', otpSchema)
