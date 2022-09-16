import React, {useEffect} from 'react';
import './App.css';
import Counter from "./component/Counter";
import Setting from "./component/Setting/Setting";
import {SaveThunkCreator, SetThunkCreator, setValueAC} from "./redux/countReducer";
import {useAppDispatch, useAppSelector} from './redux/hooks';

function App() {
    const error = useAppSelector(state => state.count.error)

    const minValue = useAppSelector(state => state.count.minValue)
    const value = useAppSelector(state => state.count.value)
    const endValue = useAppSelector(state => state.count.endValue)

    const dispatch = useAppDispatch()

    useEffect(() => {

        dispatch(SetThunkCreator())
    }, [])
    const AddCount = () => { //increment
        dispatch(setValueAC(value + 1))
    }
    const onReset = () => {
        dispatch(setValueAC(minValue))
    }
    const setButton = (valueStart: number, valueMax: number) => {

        dispatch(SaveThunkCreator(valueStart, valueMax))
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

