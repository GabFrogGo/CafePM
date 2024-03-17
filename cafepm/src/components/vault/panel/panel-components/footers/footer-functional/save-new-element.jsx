'use client';

import Image from 'next/image';
//Deco
import svgsave from '@/public/ups/native/device-floppy.svg';
import { useSNEContext } from '@/src/context/SaveNewElementContext';

function SaveNewElement() {

    const { handleFormSubmit } = useSNEContext();

    return (
        <>
            <div class="standard-svg-container" id="save-current-element" onClick={ handleFormSubmit }>
                <div class="display-centered-svg">
                    <Image src={svgsave} width={24} height={24}></Image>
                </div>
            </div>
        </>
    );
}

export default SaveNewElement;