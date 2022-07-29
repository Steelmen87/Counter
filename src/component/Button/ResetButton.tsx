import React from 'react';

type ResetPropsType = {
    title: string
    callBack: () => void
    value: number
}

const ButtonReset = (props: ResetPropsType) => {
    const {title, value, callBack} = props
    return <div>
        <button
            disabled={value <= 0}
            onClick={callBack}>{title}</button>
    </div>
};

export default ButtonReset;