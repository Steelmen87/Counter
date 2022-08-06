import React, {useState} from 'react';
import './App.css';
import Counter from "./component/Counter";
import Setting from "./component/Setting/Setting";

function App() {
    let maxValue = 5
    let [minValue, setMinValue] = useState(0)
    let [value, setValue] = useState(minValue)
    let [endValue, setEndValue] = useState(maxValue)

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
