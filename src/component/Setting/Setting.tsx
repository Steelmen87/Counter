import React, {useState} from 'react';
import style from "../Counter.module.css";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";


type PropsSettingType = {
    setButton: (valueStart: number, valueMax: number) => void
}
const Setting = (props: PropsSettingType) => {

    let {setButton} = props
    let [valueMax, setValueMax] = useState(0)
    let [valueStart, setValueStart] = useState(0)

    const onClickSetButton = () => {
        setButton(valueStart, valueMax)
    }
    return (
        <div className={style.counter}>
            <div>
                <Input value={valueMax} title={'max value :'} callback={setValueMax}/>
                <Input value={valueStart} title={'start value :'} callback={setValueStart}/>
            </div>
            <div className={style.block_button}>
                <Button title={'set'} onClick={onClickSetButton} disabled={false}/>
            </div>
        </div>
    );
};

export default Setting;

