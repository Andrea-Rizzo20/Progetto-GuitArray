import {createSlice} from '@reduxjs/toolkit'

const LogUser = {
        name: 'isLoggedIn',
        initialState: false,
        reducers:{
            login:(state: boolean)=> state = true,
            logout:(state: boolean) => state = false,
        }
}

export const userState = createSlice(LogUser)