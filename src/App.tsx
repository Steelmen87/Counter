import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./component/Counter";
import Setting from "./component/Setting/Setting";
import set = Reflect.set;

function App() {
    let maxValue = 0
    let [minValue, setMinValue] = useState(0)
    let [value, setValue] = useState(minValue)
    let [endValue, setEndValue] = useState(maxValue)

    let [error, setError] = useState(false)
    useEffect(() => {


    }, [value, endValue])

    const AddCount = () => {
        setValue(value + 1)
    }
    const onReset = () => {
        setValue(minValue)
    }

    const setButton = (valueStart: number, valueMax: number) => {
        setMinValue(valueStart)
        setValue(valueStart)
        setEndValue(valueMax)
    }

    return (
        <div className="App">
            <Setting

                setButton={setButton}
            />
            <Counter
                AddCount={AddCount}
                onReset={onReset}
                value={value}
                endValue={endValue}
            />
        </div>
    );
}

export default App;
