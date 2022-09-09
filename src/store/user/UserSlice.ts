import { AppState } from '../app/store'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IUser } from '../../models/User'

const initialState: IUser = {
    firstName: 'sdfdsff',
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
export const updateUser = createAsyncThunk(
    'updateUser',
    async (userData: {
        data: number
        selectedOption: string
    }) => {
        // const { userSession, data, selectedOption } = userData
        // const response = await userPortfolio(userSession, data, selectedOption)
        // console.log({ response })
        // return response
    }
)
export const getUser = createAsyncThunk(
    'user',
    async () => {
        // const response = await userData(userSession)
        // console.log({ response })
        // return response
    }
)

export const UserSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getUser.fulfilled, (state, action) => {
                const payload:any = action.payload
                state.status = 'success'

             

                Object.entries(payload).forEach((field) => {
                    const key = field[0] as 'username'
                    state[key] = field[1] as string
                })
            })
            .addCase(getUser.rejected, (state) => {
                state.status = 'failed'
            })
           
    },
})

export const selectUser = (state: AppState) => state.user

export default UserSlice.reducer
