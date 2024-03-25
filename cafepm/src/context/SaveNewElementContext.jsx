'use client';

import React, { createContext, useState, useContext } from 'react';

// import saveForm from '../components/vault/panel/panel-components/pi-comp/input-scripts/to-json-acc.js';

const SNEContext = createContext({}); //("") (null) (false) ({})

export const SNEContextProvider = ({ children }) => {
    
    const [saveFormData, setSaveFormData] = useState(false);

    const doNewElement = () => {
        setSaveFormData(true)
    }

    // const newElement = {
    //     creationDate: getCrDate(),
    //     upDate: null, //getLastUpdate(),
    //     elementID: "", //función para crear id
    //     folderID: null, //default
    //     type: 1, //tipo de elemento
    //     askPwd: askpass, //default 0
    //     favourite: favourite, //default 0
    //     name: name,
    //     notes: notes,
    //     login: {
    //         uris: [],
    //         username: username,
    //         email: email,
    //         password: password,
    //         totp: totp //default
    //     }
    // };
    
    // function getCrDate() {
    //     const fecha = new Date();
    //     return fecha.toISOString();
    // }

    // const handleFormSubmit = () => {
    //     //saveForm(formData);
    //     saveForm(newElement)
    // }

    return (
        <>
            <SNEContext.Provider value={{ setSaveFormData, doNewElement, saveFormData }}>
                { children }
            </SNEContext.Provider>

        </>
    );
};

export const useSNEContext = () => useContext(SNEContext);