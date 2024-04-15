'use client'

import React, { useState } from 'react'

export default function ClBtn() {
    const [hacerAccion, setHacerAccion] = useState(false);

    const handleAccion = () => {
        setHacerAccion(!hacerAccion);
    };

    return (
        <>
            <div>
                <div>
                    <div className='accion' onClick={handleAccion}>Crea una carpeta</div>
                </div>
            </div>
        </>
    );
}
