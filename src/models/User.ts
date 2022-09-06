import { model, models, Schema } from 'mongoose'

export interface IUser {
    [x: string]: any
    _id: Object
    createdAt: string
    firstName: string
    lastName: string
    email: string
    password: string
    phoneNumber: string
    birthDay: string
    Gender: string
    GuardianName: string
    GuardianPhoneNumber: string
    GuardianEmail: string
    GuardianRelationship: string
    institutionType: string
    institutionName: string
    institutionYearOfStudy: string
    verificationOtp: string
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

        birthDay: {
            type: String,
        },

        Gender: {
            type: String,
        },

        GuardianName: {
            type: String,
        },

        GuardianPhoneNumber: {
            type: String,
        },

        GuardianEmail: {
            type: String,
        },

        GuardianRelationship: {
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
