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

const Counter: React.FC<CounterPropsType> = ({value, endValue, AddCount, onReset,error}) => {
    const visInc = value < endValue
    const visRes = value > endValue && endValue !== value

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