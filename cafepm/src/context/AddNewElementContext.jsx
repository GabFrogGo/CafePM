'use client';

import React, { createContext, useState, useContext } from 'react';

const ANEContext = createContext({}); //("") (null) (false) ({})

export const ANEContextProvider = ({ children }) => {
    
    const [showinfo, setShowinfo] = useState(false);
    //const [infoSetted, setInfoSetted] = useState(false);

    const callinfo = () => {
        if(!infoSetted) {
            setShowinfo(true);
            //setInfoSetted(true);
        }
    };

    return (
        <>
            <ANEContext.Provider value={{ setShowinfo, callinfo, showinfo }}>
                { children }
            </ANEContext.Provider>

        </>
    );
};

export const useANEContext = () => useContext(ANEContext);