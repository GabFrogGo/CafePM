'use client';

import React, { createContext, useState, useContext } from 'react';

const CEContext = createContext({});

export const CEContextProvider = ({ children }) => {
    const [showinfo, setShowinfo] = useState(false);
    const [infoSetted, setInfoSetted] = useState(false);

    const callCancelInfo = () => {
        if(showinfo && infoSetted) {
            setShowinfo(false);
            setInfoSetted(false);
        }
    };

    return (
        <CEContext.Provider value={{ setShowinfo, callCancelInfo, showinfo }}>
            {children}
        </CEContext.Provider>
    );
};

export const useCEContext = () => useContext(CEContext);
