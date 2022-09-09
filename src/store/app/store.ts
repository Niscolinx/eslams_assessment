import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'

import UserReducer from '../user/UserSlice'



export const store = configureStore({
    reducer: UserReducer,
    devTools: process.env.NODE_ENV !== 'production',
    
})


export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>
