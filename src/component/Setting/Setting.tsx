import React, {useEffect, useState} from 'react';
import style from "../Counter.module.css";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {restoreState} from "../../toolkit/localStorage";


type PropsSettingType = {
    setButton: (valueStart: number, valueMax: number) => void
    callBackError: (error: boolean) => void
}
const Setting = (props: PropsSettingType) => {

    useEffect(() => {
        let value = restoreState('counter value', [])
        setValueStart(value[0])
        setValueMax(value[1])

    }, [])
    let {setButton, callBackError} = props
    let [valueMax, setValueMax] = useState(0)
    let [valueStart, setValueStart] = useState(0)

    const setTheCounterValue = () => {
        setButton(valueStart, valueMax)
    }
    const setMaxValue = (value: number) => {
        setValueMax(value)

    }
    const setStartValue = (value: number) => {
        setValueStart(value)

    }
    let error = valueStart < 0 || valueMax <= valueStart
    useEffect(() => {
        callBackError(error)
    }, [error])
    return (
        <div className={style.counter}>
            <div>
                <Input styleError={error}
                       value={valueMax} title={'max value :'}
                       onChange={setMaxValue}/>
                <Input styleError={error}
                       value={valueStart}
                       title={'start value :'}
                       onChange={setStartValue}/>
            </div>
            <div className={style.block_button}>
                <Button
                    title={'set'}
                    onClick={setTheCounterValue}
                    disabled={error}/>
            </div>
        </div>
    );
};

export default Setting;

