'use client';

import React, { createContext, useState, useContext } from 'react';

const PopupContext = createContext();

export const PopupContextProvider = ({ children }) => {
    
    const [showIPFPWidget, setShowIPFPWidget] = useState(false);
    const [showIPGPPWidget, setShowIPGPPWidget] = useState(false);

    const makingfolder = () => {
        console.log("Llamar widget")
        setShowIPFPWidget(true)
    };

    const cancelfolder = () => {
        console.log("Cancelar widget")
        setShowIPFPWidget(false)
    };

    const callpasswidget = () => {
        console.log("Llamar widget")
        setShowIPGPPWidget(true)
    };

    const cancelpasswidget = () => {
        console.log("Cancelar widget")
        setShowIPGPPWidget(false)
    };

    return (
        <>
            <PopupContext.Provider value={{ setShowIPFPWidget, makingfolder, cancelfolder, showIPFPWidget, setShowIPGPPWidget, callpasswidget, cancelpasswidget, showIPGPPWidget }}>
                { children }
            </PopupContext.Provider>

        </>
    );
};

export const usePopupContext = () => useContext(PopupContext);