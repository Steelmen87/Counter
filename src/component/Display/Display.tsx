import React from 'react';
import style from './Display.module.css'

type InputPropsType = {
    value: number
    endValue: number
    error: boolean
}
const Display = (props: InputPropsType) => {
    const {value, endValue, error} = props
    let stop = value === endValue ? style.stop : ''
    return <div>
        {error
            ? <div className={`${style.display} ${style.error}`}>'Incorrect value !'</div>
            : <div className={`${style.display} ${stop}`}>{value}</div>}
    </div>;
};

export default Display;