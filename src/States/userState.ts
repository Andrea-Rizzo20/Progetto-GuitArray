import {createSlice} from '@reduxjs/toolkit'


export  const userState = createSlice({
    name: 'isLoggedIn',
    initialState: {
        logged: false
    },
    reducers:{
        login: (state) => {state.logged = true},
        logout: (state) => {state.logged = false},
    }
})

export const {login, logout} =  userState.actions

export default userState.reducer