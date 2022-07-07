import {combineReducers, createStore} from 'redux'
import { userState } from './States/userState'

const rootReducer = combineReducers({
    login: userState.reducer
})

export const store = createStore(rootReducer)