import { model, models, Schema } from 'mongoose'

const withdrawal = new Schema(
    {
        amount: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
            enum: ['pending', 'approved', 'declined'],
            default: 'pending',
        },
        currency: {
            type: String,
            required: true,
            default: 'USDT',
        },
        type: {
            type: String,
            required: true,
            default: 'Withdrawal',
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
    },
    { timestamps: true }
)

export default models.withdrawal || model('withdrawal', withdrawal)
