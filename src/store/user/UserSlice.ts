import { AppState } from '../app/store'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IUser } from '../../models/User'

const initialState: IUser = {
    firstName: '',
    lastName: '',
    email: '',
    profilePhotoUrl:
        'https://res.cloudinary.com/eslams/image/upload/v1662752486/my-uploads/avatar_nav1ya.jpg',
    coverPhotoUrl:
        'https://res.cloudinary.com/eslams/image/upload/v1662750659/my-uploads/ahhne5dzmripmv9nh50v.jpg',
    password: '',
    phoneNumber: '',
    birthDate: '',
    gender: '',
    guardianName: '',
    guardianPhoneNumber: '',
    guardianEmail: '',
    guardianRelationship: '',
    institutionType: '',
    institutionName: '',
    institutionYearOfStudy: '',
    registeredEvents: [],
}



export const UserSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const {payload} = action

            Object.entries(payload).forEach((field) => {
                const key = field[0] as any
                state[key] = field[1] as string
            })
        },
    },

    
})

export const { updateUser } = UserSlice.actions

export const selectUser = (state: AppState) => state

export default UserSlice.reducer
