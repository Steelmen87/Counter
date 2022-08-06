import React, {useState} from 'react';
import './App.css';
import Counter from "./component/Counter";
import Setting from "./component/Setting/Setting";

function App() {
    let minValue = 0
    let maxValue = 5
    let [value, setValue] = useState(minValue)
    let [endValue, setEndValue] = useState(maxValue)

    return (
        <div className="App">
            <Setting
                setValue={setValue}
                setEndValue={setEndValue}
            />
            <Counter
                value={value}
                endValue={endValue}
                setValue={setValue}
            />
        </div>
    );
}

export default App;
