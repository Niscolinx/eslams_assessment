import { model, models, Schema } from 'mongoose'

export interface IUser {
    [x: string]: any
    _id?: Object
    createdAt?: string
    firstName: string
    lastName: string
    email: string
    profilePhotoUrl: string
    coverPhotoUrl: string
    password: string
    phoneNumber: string
    birthDate: string
    gender: string
    guardianName: string
    guardianPhoneNumber: string
    guardianEmail: string
    guardianRelationship: string
    institutionType: string
    institutionName: string
    institutionYearOfStudy: string
    verificationOtp?: string
    registeredEvents: string[]
}

const userSchema = new Schema<IUser>(
    {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },

        email: {
            type: String,
        },
        password: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },

        role: {
            type: String,
            default: 'Customer',
        },
        verificationOtp: {
            type: String,
        },

        birthDate: {
            type: String,
        },

        gender: {
            type: String,
        },

        guardianName: {
            type: String,
        },

        guardianPhoneNumber: {
            type: String,
        },

        guardianEmail: {
            type: String,
        },

        guardianRelationship: {
            type: String,
        },

        institutionType: {
            type: String,
        },

        institutionName: {
            type: String,
        },

        institutionYearOfStudy: {
            type: String,
        },

        joinedCommunity: {
            type: Boolean,
            default: false,
        },
        coverPhotoUrl: {
            type: String,
            default:
                'https://res.cloudinary.com/eslams/image/upload/v1662750659/my-uploads/ahhne5dzmripmv9nh50v.jpg',
        },
        profilePhotoUrl: {
            type: String,
            default:
                'https://res.cloudinary.com/eslams/image/upload/v1662752486/my-uploads/avatar_nav1ya.jpg',
        },

        registeredEvents: [
            {
                type: Schema.Types.ObjectId,
                ref: 'event',
            },
        ],
    },
    { timestamps: true }
)

export default models.user || model('user', userSchema)
