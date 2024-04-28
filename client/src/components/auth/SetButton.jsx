import React from 'react'
import { useState } from 'react'

export default function SetButton(props) {
    const [checked, setChecked] = useState(false);
    const setState = (value) => {
        props.onClick(value);
    }
    
    const labelClass = () => {
        return checked ? "bg-green-200 p-2 rounded-full m-1" : "bg-slate-200 p-2 rounded-full m-1";
    }
    return (
        <>
            <button className={labelClass()} onClick={(e)=> {setChecked(!checked); setState(props.id);}}>{props.text}</button>
        </>
    )
}
