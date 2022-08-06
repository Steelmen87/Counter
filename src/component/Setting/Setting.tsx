import React, {useState} from 'react';
import style from "../Counter.module.css";
import Button from "../Button/Button";
import {Input} from "../Input/Input";

const Setting = () => {
    let [valueMax, setValueMax] = useState(0)
    let [valueStart, setValueStart] = useState(0)

    return (
        <div className={style.counter}>
            <div>
                <Input value={valueMax} title={'max value :'} callback={setValueMax}/>
                <Input value={valueStart} title={'start value :'} callback={setValueStart}/>
            </div>
            <div className={style.block_button}>
                <Button title={'set'} onClick={() => {
                }} visibility={false}/>
            </div>
        </div>
    );
};

export default Setting;

