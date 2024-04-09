'use client';

import React, { createContext, useState, useContext } from 'react';

// import saveForm from '../components/vault/panel/panel-components/pi-comp/input-scripts/to-json-acc.js';

const SNEContext = createContext(); //("") (null) (false) ({})

export const SNEContextProvider = ({ children }) => {
    
    const [saveFormData, setSaveFormData] = useState(false);

    const doNewElement = () => {
        setSaveFormData(!saveFormData)
    }

    return (
        <>
            <SNEContext.Provider value={{ doNewElement, saveFormData }}>
                { children }
            </SNEContext.Provider>

        </>
    );
};

export const useSNEContext = () => useContext(SNEContext);