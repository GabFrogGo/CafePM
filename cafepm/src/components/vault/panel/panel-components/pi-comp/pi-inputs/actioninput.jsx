'use client';
import React, { useRef, useState } from 'react';
import fs from 'fs';
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
    
    const { saveFormData } = useSNEContext();

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


    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setError('')

    //     const data = new FormData(form.current)
    //     letForms(data)
    //     console.log(getID())
    //     console.log(getCrDate())
    //     console.log([...data.entries()])
    // }

    const newJSONProps = (data) => {
        let jsonProps = {};
        switch (SelectedInput) {
            case 'Input_Acc_Element':
                jsonProps = {
                    login: {
                        uris: [],
                        username: data.user,
                        email: data.email,
                        password: data.password,
                        totp: data.totp
                    }
                };
                break;
            case 'Input_Card_Element':
                jsonProps = {
                    card: {
                        uris: [],
                        owner: data.cardowner,
                        cardnumber: data.number,
                        cardbrand: data.cardtm,
                        expirymonth: data.expmonth,
                        expiryyear: data.expyear,
                        securitycode: data.seccode
                    }
                };
                break;
            case 'Input_ID_Element':
                jsonProps = {
                    identity: {
                        title: data.title,
                        firstname: data.firstname,
                        secondname: data.secondname,
                        surname: data.surname,
                        company: data.company,
                        ssn: data.ssn,
                        passportnumber: data.passportnum,
                        licensenumber: data.licensenum,
                        email: data.email,
                        phone: data.phone,
                        address1: data.addr1,
                        address2: data.addr2,
                        address3: data.addr3,
                        citytown: data.locCT,
                        stateprovince: data.locSP,
                        zippostalcode: data.locCode,
                        country: data.country
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
                        username: data.user,
                        email: data.email,
                        password: data.password,
                        totp: data.totp
                    }
                };
                break;
        }
        return jsonProps;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')

        const data = Object.fromEntries(new FormData(form.current).entries())
        letForms(data)
        console.log(getID())
        console.log(getCrDate())
        console.log([...Object.entries(data)])

        const newJSONElement = {
            creationDate: getCrDate(),
            id: getID(),
            folderID: "",
            type: SelectedInput,
            reprompt: data.askPwd,
            favourite: data.favourite,
            name: data.name,
            notes: data.notes,
            ...newJSONProps(data)
        };

        console.log(saveFormData(newJSONElement))
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

    // const newJSONProps = () => {
    //     let jsonProps = {};
    //     switch (SelectedInput) {
    //         case 'Input_Acc_Element':
    //             jsonProps = {
    //                 login: {
    //                     uris: [],
    //                     username: user,
    //                     email: email,
    //                     password: password,
    //                     totp: totp
    //                 }
    //             };
    //             break;
    //         case 'Input_Card_Element':
    //             jsonProps = {
    //                 card: {
    //                     uris: [],
    //                     owner: cardowner,
    //                     cardnumber: number,
    //                     cardbrand: cardtm,
    //                     expirymonth: expmonth,
    //                     expiryyear: expyear,
    //                     securitycode: seccode
    //                 }
    //             };
    //             break;
    //         case 'Input_ID_Element':
    //             jsonProps = {
    //                 identity: {
    //                     title: title,
    //                     firstname: firstname,
    //                     secondname: secondname,
    //                     surname: surname,
    //                     company: company,
    //                     ssn: ssn,
    //                     passportnumber: passportnum,
    //                     licensenumber: licensenum,
    //                     email: email,
    //                     phone: phone,
    //                     address1: addr1,
    //                     address2: addr2,
    //                     address3: addr3,
    //                     citytown: locCT,
    //                     stateprovince: locSP,
    //                     zippostalcode: locCode,
    //                     country: country
    //                 }
    //             };
    //             break;
    //         case 'Input_SNote_Element':
    //             jsonProps = {
    //                 safenote: {}
    //             };
    //             break;
    //         default:
    //             jsonProps = {
    //                 login: {
    //                     uris: [],
    //                     username: user,
    //                     email: email,
    //                     password: password,
    //                     totp: totp
    //                 }
    //             };
    //             break;
    //     }
    //     return jsonProps;
    // }

    // function saveForm(data) {
    //     // Leer el contenido actual del archivo JSON (si existe)
    //     let existentContent = [];
    //     try {
    //         existentContent = JSON.parse(fs.readFileSync('./uservault.json', 'utf8'));
    //     } catch (err) {
    //         console.error('Error al leer el archivo JSON:', err);
    //         existentContent = null;
    //     }
    
    //     if (existentContent === null) {
    //         try {
    //             existentContent = [data];
    //         } catch (err) {
    //             console.error('Error al tratar de crear una bóbeda.', err);
    //         }
    //     } else {
    //         try {
    //             existentContent.push(data);
    //         } catch (err) {
    //             console.error('No se pudo agregar el elemento a la lista.', err);
    //         }
    //     }
    
    //     // Convertir el contenido actualizado a una cadena JSON
    //     const dataToJSON = JSON.stringify({ items: existentContent }, null, 2); // Formateo para una mejor legibilidad
    
    //     // Escribir los datos JSON actualizados en el archivo
    //     fs.writeFile('./uservault.json', dataToJSON, 'utf-8', (err) => {
    //         if (err) {
    //             console.error('Error al guardar el archivo JSON:', err);
    //             return;
    //         }
    //         console.log('El nuevo elemento ha sido agregado al archivo JSON.');
    //     });
    // }

    // const newJSONElement = {
    //     creationDate: getCrDate(),
    //     id: getID(),
    //     folderID: "",
    //     type: type,
    //     reprompt: askPwd,
    //     favourite: favourite,
    //     name: name,
    //     notes: notes,
    //     ...newJSONProps()
    // };


    if(saveFormData) {
        handleSubmit()
    }

    

    // saveForm(newJSONElement);

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
            </form>
        </>
    );
}

export default ActionInput;