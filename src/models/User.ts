import { model, models, Schema } from 'mongoose'

export interface IUser {
    [x: string]: any
    _id: Object
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

        role: {
            type: String,
            default: 'Customer',
            required: true,
        },

        birthDay: {
            type: String,
            required: true,
        },

        Gender: {
            type: String,
            required: true,
        },

        GuardianName: {
            type: String,
            required: true,
        },

        GuardianPhoneNumber: {
            type: String,
            required: true,
        },

        GuardianEmail: {
            type: String,
            required: true,
        },

        GuardianRelationship: {
            type: String,
            required: true,
        },

        institutionType: {
            type: String,
            required: true,
        },

        institutionName: {
            type: String,
            required: true,
        },

        institutionYearOfStudy: {
            type: String,
            required: true,
        },

        joinedCommunity: {
            type: Boolean,
            default: false,
        },

        RegisteredEvent: [
            {
                type: Schema.Types.ObjectId,
                ref: 'event',
            },
        ],
    },
    { timestamps: true }
)

export default models.user || model('user', userSchema)
