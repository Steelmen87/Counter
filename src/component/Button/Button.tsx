import React from 'react';
import style from './Button.module.css'

type ButtonPropsTitle = {
    title: string
    onClick: () => void
    disabled: boolean
}
export const Button = (props: ButtonPropsTitle) => {
    const {title, onClick, disabled} = props

    const onClickHandler = () => {
        onClick()
    }
    return <button
        className={style.button}
        disabled={disabled}
        onClick={onClickHandler}>
        {title}
    </button>
};

