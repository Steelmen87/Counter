import React, {ChangeEvent, LegacyRef, useRef, useState} from "react";
import style from './inputStyle.module.css'

type InputType = {
    value: number
    title: string
    onChange: (value: number) => void
    styleError: boolean
}
export const Input: React.FC<InputType> = ({value, title, onChange,styleError}) => {
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.currentTarget.value))
    }

    let error = styleError ? style.error : ''
    return <div className={style.title_Values}>
        <div>{title}</div>
        <input
            className={error}
            type='number'
            value={value}
            onChange={onChangeMaxValue}
        />
    </div>
}