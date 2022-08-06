import React, {ChangeEvent} from "react";
import style from './inputStyle.module.css'

type InputType = {
    value: number
    title: string
    callback: (value: number) => void
}
export const Input: React.FC<InputType> = ({value, title, callback}) => {
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        callback(Number(e.currentTarget.value))
    }
    return <div className={style.values}>
        <div>{title}</div>
        <input
            type='number'
            value={value}
            onChange={onChangeMaxValue}
        />
    </div>
}