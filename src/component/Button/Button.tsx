import React from 'react';
import style from './Button.module.css'

type ButtonPropsTitle = {
    title: string
    onClick: () => void
    visibility: boolean
}
const Button = (props: ButtonPropsTitle) => {
    const {title, onClick, visibility} = props

    const onClickHandler = () => {
        onClick()
    }
    return <button
        className={style.button}
        disabled={visibility}
        onClick={onClickHandler}>
        {title}
    </button>
};

export default Button;