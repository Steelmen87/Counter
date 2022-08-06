import React, {useState} from 'react';
import './App.css';
import Counter from "./component/Counter";
import Setting from "./component/Setting/Setting";

function App() {
    let [minValue, setMinValue] = useState(0)
    let maxValue = 5
    let [value, setValue] = useState(minValue)
    let [endValue, setEndValue] = useState(maxValue)
    return (
        <div className="App">
            <Setting
                setMinValue={setMinValue}
                setValue={setValue}
                setEndValue={setEndValue}
            />
            <Counter
                minValue={minValue}
                value={value}
                endValue={endValue}
                setValue={setValue}
            />
        </div>
    );
}

export default App;
