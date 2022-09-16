import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import {actionType, countReducer} from "./countReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

const rootReducers = combineReducers({
    count: countReducer
})

const store = createStore(rootReducers, applyMiddleware(thunk))

export default store

export type AppRootStateType = ReturnType<typeof store.getState>
//export type AppDispatch = typeof store.dispatch
export type AppActionsType = actionType
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>


export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>

// @ts-ignore
window.store = store // for dev
