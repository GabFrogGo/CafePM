'use client';

//Function
import Image from 'next/image';
import svgadd from '@/public/ups/native/plus.svg';
import { useANEContext } from '@/src/context/AddNewElementContext.jsx';

function Add_Elem_Btn() {

    const { callinfo } = useANEContext();

    return (
        <>
            <div id="box-add-elem" onClick={ callinfo }>
                <div class="display-centered-svg">
                    <Image src={svgadd} width={24} height={24}></Image>
                </div>
            </div>
        </>
    );
};

export default Add_Elem_Btn;


/*
const { callinfo } = useContext(PanelInfoContext);

    return (
        <>
            <div id="box-add-elem" onClick={() => {
                callinfo();
            }}>
                <div class="display-centered-svg">
                    <Image src={svgadd} width={24} height={24}></Image>
                </div>
            </div>
        </>
    );
*/