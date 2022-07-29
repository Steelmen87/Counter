import React from 'react';
import style from './Display.module.css'

type InputPropsType = {
    value: number
    endValue: number
}
const Display = (props: InputPropsType) => {
    const {value, endValue} = props
    let stop = value === endValue ? style.stop : ''
    return <div className={`${style.display} ${stop}`}>{value}</div>;
};

export default Display;