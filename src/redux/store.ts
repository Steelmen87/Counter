import {combineReducers, createStore} from 'redux';
import {countReducer} from "./countReducer";

const reducers = combineReducers({
    count: countReducer
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
