import {Dispatch} from "redux";
import {restoreState, saveState} from "../toolkit/localStorage";

const initState = {
    minValue: 0,
    value: 0,
    endValue: 0,
    error: false
}
export type initStateType = typeof initState
const SET_ERROR = "SET_ERROR"
const SET_VALUE = "SET_VALUE"
const SET_INITIAL_VALUE = "SET_INITIAL_VALUE"

type actionType = loadingACType | setInitialValueACType | setValueACType

export const countReducer = (state: initStateType = initState, action: actionType): initStateType => {
    switch (action.type) {
        case 'SET_ERROR': {
            return {
                ...state,
                ...action.payload
            }
        }
        case "SET_INITIAL_VALUE": {
            return {
                ...state,
                ...action.payload
            }
        }
        case "SET_VALUE": {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

export const setErrorAC = (error: boolean) => {
    return {type: SET_ERROR, payload: {error}} as const
}
export type loadingACType = ReturnType<typeof setErrorAC>

export const setValueAC = (value: number) => {
    return {type: SET_VALUE, payload: {value}} as const
}
export type setValueACType = ReturnType<typeof setValueAC>

export const setInitialValueAC = (minValue: number, value: number, endValue: number) => {
    return {type: SET_INITIAL_VALUE, payload: {minValue, value, endValue}} as const
}
export type setInitialValueACType = ReturnType<typeof setInitialValueAC>

export const SaveThunkCreator = (valueStart: number, valueMax: number) => (dispatch: Dispatch) => {
    saveState('counter value', [valueStart, valueMax])
        .then(() => {
            // @ts-ignore
            dispatch(SetThunkCreator())
            /*restoreState('counter value', [0, 0])
                .then(value => {
                    dispatch(setInitialValueAC(value[0], value[0], value[1]))
                })*/
        })
}
export const SetThunkCreator = () => (dispatch: Dispatch) => {
    restoreState('counter value', [0, 0])
        .then(value => {
            dispatch(setInitialValueAC(value[0], value[0], value[1]))
        })
}

