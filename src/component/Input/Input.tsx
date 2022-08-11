import React, {ChangeEvent, LegacyRef, useRef} from "react";
import style from './inputStyle.module.css'

type InputType = {
    value: number
    title: string
    onChange: (value: number) => void

}
export const Input: React.FC<InputType> = ({value, title, onChange }) => {
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.currentTarget.value))

    }
    return <div className={style.title_Values}>
        <div>{title}</div>
        <input
            type='number'
            value={value}
            onChange={onChangeMaxValue}
        />
    </div>
}