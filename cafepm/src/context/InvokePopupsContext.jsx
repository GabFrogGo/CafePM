'use client';

import React, { createContext, useState, useContext } from 'react';

const PopContext = createContext({}); //("") (null) (false) ({})

export const PopContextProvider = ({ children }) => {
    
    const [showIPFPWidget, setShowIPFPWidget] = useState(false);

    const makingfolder = () => {
        console.log("Llamar widget")
        setShowIPFPWidget(true);
    };

    const cancelfolder = () => {
        console.log("Cancelar widget")
        setShowIPFPWidget(false);
    };

    const [showIPGPPWidget, setShowIPGPPWidget] = useState(false);

    const callpasswidget = () => {
        console.log("Llamar widget")
        setShowIPGPPWidget(true);
    };

    const cancelpasswidget = () => {
        console.log("Cancelar widget")
        setShowIPGPPWidget(false);
    };

    return (
        <>
            <PopContext.Provider value={{ 
                setShowIPFPWidget, 
                makingfolder, 
                cancelfolder, 
                showIPFPWidget,
                setShowIPGPPWidget,
                callpasswidget, 
                cancelpasswidget,
                showIPGPPWidget }}
            >
                { children }
            </PopContext.Provider>

        </>
    );
};

export const usePopContext = () => useContext(PopContext);