'use client';
import React, { useRef, useState } from 'react';
//Functions

import { getCrDate, getID } from '@/src/components/functions/getAIProperties.jsx'

//Components

import Gen_Notes_Input from './notes-input';
import Gen_URI_Input from './uri-input';
import Element_User_Prefs from './preferences';

import Input_Acc_Element from '@/src/components/vault/panel/panel-components/pi-comp/pi-inputs/accountelem.jsx';
import Input_Card_Element from '@/src/components/vault/panel/panel-components/pi-comp/pi-inputs/cardelem.jsx';
import Input_ID_Element from '@/src/components/vault/panel/panel-components/pi-comp/pi-inputs/idelem.jsx';
import Input_SNote_Element from '@/src/components/vault/panel/panel-components/pi-comp/pi-inputs/safenote.jsx';

import { useSNEContext } from '@/src/context/SaveNewElementContext.jsx';

function ActionInput() {
    const [SelectedInput, setSelectedInput] = useState("");
    const [error, setError] = useState("")

    const form = useRef(null);
    
    const { setSaveFormData } = useSNEContext();

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
            case 'Input_Card_Element':
                return (
                    <>
                        <Gen_URI_Input />
                        <Element_User_Prefs />
                        <Gen_Notes_Input />
                    </>
                )
            case 'Input_ID_Element':
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

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')

        const data = new FormData(form.current)
        letForms(data)
        console.log(getID())
        console.log(getCrDate())
        console.log([...data.entries()])
    }

    const letForms = (data) => {
        switch (SelectedInput) {
            //Account
            case 'Input_Acc_Element':
                var {type, name, user, email, password, totp, notes, folderID, favourite, askPwd} = Object.fromEntries([...data.entries()])
                if(!name.trim()) {
                    return setError("Se requiere un nombre para guardar el formulario.")
                }
                console.log(type, name, user, email, password, totp, notes, folderID, favourite, askPwd);
                break;
            //Card
            case 'Input_Card_Element':
                var {type, name, cardowner, number, cardtm, expmonth, expyear, seccode, notes, folderID, favourite, askPwd} = Object.fromEntries([...data.entries()])
                if(!name.trim()) {
                    return setError("Se requiere un nombre para guardar el formulario.")
                }
                console.log(type, name, cardowner, number, cardtm, expmonth, expyear, seccode, notes, folderID, favourite, askPwd);
                break;
            //ID
            case 'Input_ID_Element':
                var {type, name, title, firstname, secondname, surname, company, ssn, passportnum, licensenum, email, phone, addr1, addr2, addr3, locCT, locSP, locCode, country, notes, folderID, favourite, askPwd} = Object.fromEntries([...data.entries()])
                if(!name.trim()) {
                    return setError("Se requiere un nombre para guardar el formulario.")
                }
                console.log(type, name, title, firstname, secondname, surname, company, ssn, passportnum, licensenum, email, phone, addr1, addr2, addr3, locCT, locSP, locCode, country, notes, folderID, favourite, askPwd);
                break;
            //Safe Note
            case 'Input_SNote_Element':
                var {type, name, notes, folderID, favourite, askPwd} = Object.fromEntries([...data.entries()])
                if(!name.trim()) {
                    return setError("Se requiere un nombre para guardar el formulario.")
                }
                console.log(type, name, notes, folderID, favourite, askPwd);
                break;
            //Default Account
            default:
                var {type, name, user, email, password, totp, notes, folderID, favourite, askPwd} = Object.fromEntries([...data.entries()])
                if(!name.trim()) {
                    return setError("Se requiere un nombre para guardar el formulario.")
                }
                console.log(type, name, user, email, password, totp, notes, folderID, favourite, askPwd);
                break;
        }
    }

    const newJSONProps = () => {
        let jsonProps = {};
        switch (SelectedInput) {
            case 'Input_Acc_Element':
                jsonProps = {
                    login: {
                        uris: [],
                        username: user,
                        email: email,
                        password: password,
                        totp: totp
                    }
                };
                break;
            case 'Input_Card_Element':
                jsonProps = {
                    card: {
                        uris: [],
                        owner: cardowner,
                        cardnumber: number,
                        cardbrand: cardtm,
                        expirymonth: expmonth,
                        expiryyear: expyear,
                        securitycode: seccode
                    }
                };
                break;
            case 'Input_ID_Element':
                jsonProps = {
                    identity: {
                        title: title,
                        firstname: firstname,
                        secondname: secondname,
                        surname: surname,
                        company: company,
                        ssn: ssn,
                        passportnumber: passportnum,
                        licensenumber: licensenum,
                        email: email,
                        phone: phone,
                        address1: addr1,
                        address2: addr2,
                        address3: addr3,
                        citytown: locCT,
                        stateprovince: locSP,
                        zippostalcode: locCode,
                        country: country
                    }
                };
                break;
            case 'Input_SNote_Element':
                jsonProps = {
                    safenote: {}
                };
                break;
            default:
                jsonProps = {
                    login: {
                        uris: [],
                        username: user,
                        email: email,
                        password: password,
                        totp: totp
                    }
                };
                break;
        }
        return jsonProps;
    }

    const newJSONElement = () => {
        creationDate: getCrDate()
        id: doRandomID()
        folderID: ""
        type: type
        reprompt: askPwd
        favourite: favourite
        name: name
        notes: notes
        {newJSONProps()}
    };

    // if(setSaveFormData) {
    //     handleSubmit
    // }

    return(
        <>
            <div className="action-panel-info" id="sign-info">
                <span id="style-text-elem-info">
                    Element Information:
                    {error !=='' && error}
                </span>
            </div>
            <form onSubmit={handleSubmit} ref={form}>
                <div className="deco-panel-info" id="input-elements">
                    <div className="deco-border-div">
                        <span className="info-div-style" id="ch-entry-type">
                            <label for="entry-selection">Type</label>
                            <select name='type' className="info-div-style-et" id="entry-selection" defaultValue="Input_Acc_Element" onChange={DynamicSelChange}>
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
                <button type='submit'> Prueba</button>
            </form>
        </>
    );
}

export default ActionInput;