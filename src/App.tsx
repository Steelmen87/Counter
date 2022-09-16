import React, {useEffect} from 'react';
import './App.css';
import Counter from "./component/Counter";
import Setting from "./component/Setting/Setting";
import {restoreState, saveState} from "./toolkit/localStorage";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./redux/store";
import {SaveThunkCreator, setInitialValueAC, SetThunkCreator, setValueAC} from "./redux/countReducer";

function App() {
    const error = useSelector<AppStoreType, boolean>(state => state.count.error)

    const minValue = useSelector<AppStoreType, number>(state => state.count.minValue)
    const value = useSelector<AppStoreType, number>(state => state.count.value)
    const endValue = useSelector<AppStoreType, number>(state => state.count.endValue)

    const dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(SetThunkCreator())
        /*restoreState('counter value', [0, 0])
            .then((value => {
                dispatch(setInitialValueAC(value[0], value[0], value[1]))
            }))*/
    }, [])
    const AddCount = () => { //increment
        dispatch(setValueAC(value + 1))
    }
    const onReset = () => {
        dispatch(setValueAC(minValue))
    }
    const setButton = (valueStart: number, valueMax: number) => {
        // @ts-ignore
        dispatch(SaveThunkCreator(valueStart, valueMax))
        /*
         saveState('counter value', [valueStart, valueMax])
             .then(() => {
                 // @ts-ignore
                 dispatch(SetThunkCreator())
                 /!*restoreState('counter value', [0, 0])
                     .then(value => {
                         dispatch(setInitialValueAC(value[0], value[0], value[1]))
                     })*!/
             })*/
    }

    return (
        <div className="App">
            <Setting
                error={error}
                setButton={setButton}/>
            <Counter
                error={error}
                AddCount={AddCount}
                onReset={onReset}
                value={value}
                endValue={endValue}
            />
        </div>
    );
}

export default App;

