'use client';
//Function
import React from 'react';
import { useACContext } from '@/src/context/AddCancelElementContext.jsx';
import { PInfoInput, PInfoPrevious, PInfoTest } from './info-panels/dynamic-panel.jsx';

function PInfo() {

    const { showinfo } = useACContext();
   
    return (
        <>
            {showinfo ? <PInfoInput /> : <PInfoPrevious />}
        </>
    );
};

export default PInfo;