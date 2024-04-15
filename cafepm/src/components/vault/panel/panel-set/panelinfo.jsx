'use client';
//Function
import React from 'react';
import { useACContext } from '@/src/context/AddCancelElementContext.jsx';
import { PInfoInput, PInfoPrevious } from './info-panels/dynamic-panel.jsx';
// import { usePopupContext } from '@/src/context/InvokePopupsContext.jsx';

function PInfo() {

    const { showinfo } = useACContext();
    // const { showIPFPWidget, showIPGPPWidget } = usePopupContext();
   
    return (
        <>
            {showinfo ? <PInfoInput /> : <PInfoPrevious />}
        </>
    );
};

export default PInfo;