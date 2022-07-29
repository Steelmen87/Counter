import React, {useState} from 'react';
import Display from "./Display/Display";
import style from './Counter.module.css'
import Button from "./Button/Button";

const Counter = () => {
    let minValue = 0
    let maxValue = 5
    let [value, setValue] = useState(minValue)
    let [endValue, setEndValue] = useState(maxValue)

    const AddCount = () => {
        setValue(value + 1)
    }
    const onReset = () => {
        setValue(0)
    }
    let visInc = value < endValue
    let visRes = value === minValue
    return (
        <div className={style.counter}>
            <Display value={value} endValue={endValue}/>
            <div className={style.block_button}>
                <Button title={'inc'} onClick={AddCount} visibility={!visInc}/>
                <Button title={'reset'} onClick={onReset} visibility={visRes}/>
            </div>
        </div>
    );
};

export default Counter;