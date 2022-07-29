import React from 'react';

type ButtonPropsType = {
    title: string
    callBack: () => void
    endValue: number
    value: number
}

const ButtonInc = (props: ButtonPropsType) => {
    const {title, endValue, value, callBack} = props
    return <div>
        <button
            disabled={value === endValue}
            onClick={callBack}>{title}</button>
    </div>
};

export default ButtonInc;