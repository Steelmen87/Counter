import React from 'react';
import Display from "./Display/Display";
import style from './Counter.module.css'
import Button from "./Button/Button";

type CounterPropsType = {
    value: number
    endValue: number
    setValue: (value: number) => void
}

const Counter: React.FC<CounterPropsType> = (props) => {
    let {value, setValue,  endValue} = props
    const AddCount = () => {
        setValue(value + 1)
    }
    const onReset = () => {
        setValue(0)
    }
    let visInc = value < endValue
    let visRes = value > endValue && endValue !== value
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