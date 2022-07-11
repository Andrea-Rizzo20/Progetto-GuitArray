import { configureStore } from '@reduxjs/toolkit'
import userStateReducer from './userState'

export const store = configureStore({
    reducer: {
        isLoggedIn: userStateReducer
    }
})