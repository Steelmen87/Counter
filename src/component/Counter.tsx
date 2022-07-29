import React, {useState} from 'react';
import Input from "./Input/Input";
import ButtonInc from "./Button/ButtonInc";
import ButtonReset from "./Button/ResetButton";
import style from './Counter.module.css'
const Counter = () => {
    let [value, setValue] = useState(0)
    let [endValue, setEndValue] = useState(5)

    const AddCount = () => {
        setValue(value + 1)
    }
    const onReset = () => {
        setValue(0)
    }
    return (
        <div className={style.counter}>
            <Input value={value} endValue={endValue}/>
            <div className={style.block_button}>
                <ButtonInc
                    value={value}
                    endValue={endValue}
                    title={'inc'}
                    callBack={AddCount}
                />
                <ButtonReset
                    value={value}
                    title={'reset'}
                    callBack={onReset}/>
            </div>
        </div>
    );
};

export default Counter;