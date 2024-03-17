'use client';
import React, { useRef, useState } from 'react';
//Components

import Gen_Notes_Input from './notes-input';
import Gen_URI_Input from './uri-input';
import Element_User_Prefs from './preferences';

import Input_Acc_Element from '@/src/components/vault/panel/panel-components/pi-comp/pi-inputs/accountelem.jsx';
import Input_Card_Element from '@/src/components/vault/panel/panel-components/pi-comp/pi-inputs/cardelem.jsx';
import Input_ID_Element from '@/src/components/vault/panel/panel-components/pi-comp/pi-inputs/idelem.jsx';
import Input_SNote_Element from '@/src/components/vault/panel/panel-components/pi-comp/pi-inputs/safenote.jsx';

function ActionInput() {
    const [SelectedInput, setSelectedInput] = useState("");

    const DynamicSelChange = (event) => {
        const PrevSelect = event.target.value;
        setSelectedInput(PrevSelect);
    }

    const renderInputComp = () => {
        switch (SelectedInput) {
            case 'Input_Acc_Element':
                return <Input_Acc_Element/>
            case 'Input_Card_Element':
                return <Input_Card_Element/>
            case 'Input_ID_Element':
                return <Input_ID_Element/>
            case 'Input_SNote_Element':
                return <Input_SNote_Element/>
            default:
                return <Input_Acc_Element/>;
        }
    }
    const renderWidgets = () => {
        switch (SelectedInput) {
            case 'Input_Acc_Element':
                return (
                    <>
                        <Gen_URI_Input />
                        <Element_User_Prefs />
                        <Gen_Notes_Input />
                    </>
                )
            case 'Input_Card_Element':
                return (
                    <>
                        <Gen_URI_Input />
                        <Element_User_Prefs />
                        <Gen_Notes_Input />
                    </>
                )
            case 'Input_ID_Element':
                return (
                    <>
                        <Element_User_Prefs />
                        <Gen_Notes_Input />
                    </>
                )
            case 'Input_SNote_Element':
                return (
                    <>
                        <Element_User_Prefs />
                        <Gen_Notes_Input />
                    </>
                )
            default:
                return (
                    <>
                        <Gen_URI_Input />
                        <Element_User_Prefs />
                        <Gen_Notes_Input />
                    </>
                )
        }
    }

    const form = useRef(null);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')

        const data = new formData(form.current)
        const  {name, user, email, password, totp} = Object.fromEntries([...data.entries()])

        if(!name.trim())
            return setError("Se requiere un nombre para guardar el formulario.")

        console.log(name, user, email, password, totp);
    }

    return(
        <>
            <div className="action-panel-info" id="sign-info">
                <span id="style-text-elem-info">
                    Element Information:
                </span>
            </div>
            <form onSubmit={handleSubmit} ref={form}>
                <div className="deco-panel-info" id="input-elements">
                    <div className="deco-border-div">
                        <span className="info-div-style" id="ch-entry-type">
                            <label for="entry-selection">Type</label>
                            <select className="info-div-style-et" id="entry-selection" defaultValue="Input_Acc_Element" onChange={DynamicSelChange}>
                                <option value="Input_Acc_Element">Account</option>
                                <option value="Input_Card_Element">Card</option>
                                <option value="Input_ID_Element">Identity</option>
                                <option value="Input_SNote_Element">Note</option>
                            </select>
                        </span>
                    </div>
                    {renderInputComp()}
                </div>
                {renderWidgets()}
            </form>
        </>
    );
}

export default ActionInput;