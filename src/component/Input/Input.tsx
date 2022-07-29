import React from 'react';
import style from './Input.module.css'

type InputPropsType = {
    value: number
    endValue: number
}
const Input = (props: InputPropsType) => {
    const {value, endValue} = props
    return (
        <div className={value == endValue ? style.stop : ""}>
            <input value={value}/>
        </div>
    );
};

export default Input;