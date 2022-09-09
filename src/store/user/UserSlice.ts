import { AppState } from '../app/store'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IUser } from '../../models/User'

const initialState: IUser = {
    firstName: '',
    lastName: '',
    email: '',
    profilePhotoUrl: '',
    coverPhotoUrl: '',
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
        update: (state, action) => {
            const {payload} = action

            Object.entries(payload).forEach((field) => {
                const key = field[0] as any
                state[key] = field[1] as string
            })
        },
    },

    
})

export const { update } = UserSlice.actions

export const selectUser = (state: AppState) => state

export default UserSlice.reducer
