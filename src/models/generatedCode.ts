import { model, models, Schema } from 'mongoose'

const generatedCode = new Schema(
    {
        code: {
            type: String,
            required: true,
        },
        isUsed: {
            type: Boolean,
            required: true,
            default: false,
        },
        // createdAt: { type: Date, default: Date.now, index: { expires: 0 } },
    },
    { timestamps: true }
)

export default models.generatedCode || model('generatedCode', generatedCode)
