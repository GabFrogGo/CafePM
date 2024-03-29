'use client';

import React, { createContext, useState, useContext } from 'react';

const ACContext = createContext({}); //("") (null) (false) ({})

export const ACContextProvider = ({ children }) => {
    
    const [showinfo, setShowinfo] = useState(false);

    const makeinfo = () => {
        console.log("Llamar información")
        setShowinfo(true);
    };

    const cancelinfo = () => {
        console.log("Cancelar información")
        setShowinfo(false);
    };

    return (
        <>
            <ACContext.Provider value={{ setShowinfo, makeinfo, cancelinfo, showinfo }}>
                { children }
            </ACContext.Provider>

        </>
    );
};

export const useACContext = () => useContext(ACContext);