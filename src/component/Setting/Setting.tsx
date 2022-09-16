import React, {useEffect, useState} from 'react';
import style from "../Counter.module.css";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {restoreState} from "../../toolkit/localStorage";
import {useDispatch} from "react-redux";
import {setErrorAC} from '../../redux/countReducer';


type PropsSettingType = {
    setButton: (valueStart: number, valueMax: number) => void
    error: boolean
}

const Setting = ({setButton, error}: PropsSettingType) => {
    const [valueMax, setValueMax] = useState(0)
    const [valueStart, setValueStart] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        restoreState('counter value', [0, 0])
            .then(value => {
                setValueStart(value[0])
                setValueMax(value[1])
            })

    }, [])

    useEffect(() => {
        dispatch(setErrorAC(valueStart < 0 || valueMax <= valueStart))
    }, [valueStart, valueMax])

    const setTheCounterValue = () => {
        setButton(valueStart, valueMax)
    }

    return (
        <div className={style.counter}>
            <div>
                <Input styleError={error}
                       value={valueMax}
                       title={'max value :'}
                       onChange={setValueMax}
                />
                <Input styleError={error}
                       value={valueStart}
                       title={'start value :'}
                       onChange={setValueStart}
                />
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

