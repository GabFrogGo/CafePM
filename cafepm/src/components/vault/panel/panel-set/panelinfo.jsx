'use client';
//Function
import React from 'react';
import { useANEContext } from '@/src/context/AddNewElementContext.jsx';
//import { useCEContext } from '@/src/context/CancelElementContext.jsx';
import { PInfoInput, PInfoPrevious, PInfoTest } from './info-panels/dynamic-panel.jsx';
//{(showInfoANE || showInfoCE) ? <PInfoInput /> : <PInfoPrevious />}

function PInfo() {

    const { showinfo: showInfoANE } = useANEContext();
    //const { showinfo: showInfoCE } = useCEContext();
   
    return (
        <>
            {showInfoANE ? <PInfoInput /> : <PInfoPrevious />}
        </>
    );
};

export default PInfo;