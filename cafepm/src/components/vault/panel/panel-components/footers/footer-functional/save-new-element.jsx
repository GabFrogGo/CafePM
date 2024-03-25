'use client';

import Image from 'next/image';
//Deco
import svgsave from '@/public/ups/native/device-floppy.svg';
import { useSNEContext } from '@/src/context/SaveNewElementContext.jsx';

function SaveNewElement() {

    // const { doFormSaving } = useSNEContext();
    const { doNewElement } = useSNEContext();

    return (
        <>
            <div className="standard-svg-container" id="save-current-element" onClick={ doNewElement }>
                <div className="display-centered-svg">
                    <Image src={svgsave} width={24} height={24}></Image>
                </div>
            </div>
        </>
    );
}

export default SaveNewElement;