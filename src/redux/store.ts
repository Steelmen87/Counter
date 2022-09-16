import {applyMiddleware,combineReducers, createStore} from 'redux';
import {countReducer} from "./countReducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
    count: countReducer
})

const store = createStore(rootReducers,applyMiddleware(thunk))

export default store

export type AppStoreType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = store // for dev
