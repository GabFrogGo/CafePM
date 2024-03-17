'use client';

import React, { createContext, useState, useContext } from 'react';

import saveForm from '../components/vault/panel/panel-components/pi-comp/input-scripts/to-json-acc.js';

const SNEContext = createContext({}); //("") (null) (false) ({})

export const SNEContextProvider = ({ children }) => {
    
    const [formData, setFormData] = useState(false);

    // const name = formData.name;
    // const username = formData.username;
    // const email = formData.email;
    // const password = formData.password;
    // const totp = formData.totp;

    // //Otros
    // const notes = formData.notes;
    // const favourite = formData.favourite;
    // const askpass = formData.askpass;

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
            {/* <SNEContext.Provider value={{ setFormData, handleFormSubmit, formData }}>
                { children }
            </SNEContext.Provider> */}

        </>
    );
};

export const useSNEContext = () => useContext(SNEContext);