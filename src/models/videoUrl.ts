import { model, models, Schema } from 'mongoose'

const videoUrl = new Schema(
    {
        url: {
            type: String,
            required: true,
        },
        
    },
    { timestamps: true }
)

export default models.videoUrl || model('videoUrl', videoUrl)
