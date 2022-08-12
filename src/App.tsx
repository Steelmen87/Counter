import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./component/Counter";
import Setting from "./component/Setting/Setting";
import {restoreState, saveState} from "./toolkit/localStorage";

function App() {
    //
    let [minValue, setMinValue] = useState(0)
    let [value, setValue] = useState(minValue)
    let [endValue, setEndValue] = useState(0)
    let [error, setError] = useState(false)
    useEffect(() => {
        let value = restoreState('counter value', [0,0])
        setMinValue(value[0])
        setValue(value[0])
        setEndValue(value[1])

    }, [])

    const AddCount = () => {
        setValue(value + 1)
    }
    const onReset = () => {
        setValue(minValue)
    }

    const setButton = (valueStart: number, valueMax: number) => {
        saveState('counter value', [valueStart, valueMax])
        setMinValue(valueStart)
        setValue(valueStart)
        setEndValue(valueMax)
    }
    const ErrorCallBack = (errorFromSetting: boolean) => {
        setError(errorFromSetting)
    }
    return (
        <div className="App">
            <Setting
                callBackError={ErrorCallBack}
                setButton={setButton}
            />
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
