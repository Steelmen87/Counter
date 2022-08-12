import React from 'react';
import Display from "./Display/Display";
import style from './Counter.module.css'
import {Button} from "./Button/Button";

type CounterPropsType = {
    value: number
    endValue: number
    AddCount: () => void
    onReset: () => void
    error:boolean
}

const Counter: React.FC<CounterPropsType> = (props) => {
    let {value, endValue, AddCount, onReset,error} = props

    let visInc = value < endValue
    let visRes = value > endValue && endValue !== value
    return (
        <div className={style.counter}>
            <Display
                error={error}
                value={value}
                endValue={endValue}
            />
            <div className={style.block_button}>
                <Button title={'inc'} onClick={AddCount} disabled={!visInc}/>
                <Button title={'reset'} onClick={onReset} disabled={visRes}/>
            </div>
        </div>
    );
};

export default Counter;