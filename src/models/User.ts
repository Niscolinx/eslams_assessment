import { model, models, Schema } from 'mongoose'

export interface IUser {
    [x: string]: any
    _id: Object
    firstName: string
    last: string
    email: string
    phoneNumber: string
    
   
}

const userSchema = new Schema<IUser>(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        watchedVideo: {
            type: Boolean,
            default: false,
        },
        upliner: {
            type: String,
        },
        referralBonus: {
            type: Number,
            default: 0,
        },
        tokensMined: {
            type: Number,
            default: 0,
        },
        videoMined: {
            type: Number,
            default: 0,
        },

        portfolio: {
            type: Number,
            default: 0,
        },
        role: {
            type: String,
            default: 'Customer',
            required: true,
        },
        isMining: {
            type: Boolean,
            default: false,
        },
        mineTokenEndingTime: {
            type: String,
        },
        watchVideoAgainIn: {
            type: String,
        },
        status: {
            type: String,
            required: true,
            default: 'Active',
        },
        isVerified: {
            type: Boolean,
            required: true,
            default: false,
        },
        referralLink: {
            type: String,
        },
        usdtAddress: {
            type: String,
        },
       
        Events: [
            {
                type: Schema.Types.ObjectId,
                ref: 'event',
            },
        ]
        
    },
    { timestamps: true }
)

export default models.user || model('user', userSchema)
