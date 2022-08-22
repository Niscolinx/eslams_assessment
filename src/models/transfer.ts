import { model, models, Schema } from 'mongoose'

const transfer = new Schema(
    {
        amount: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'approved', 'declined'],
            default: 'approved',
        },
        type: {
            type: String,
            enum: ['Transfer', 'Withdrawal'],
            default: 'Transfer',
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
    },
    { timestamps: true }
)

export default models.transfer || model('transfer', transfer)
