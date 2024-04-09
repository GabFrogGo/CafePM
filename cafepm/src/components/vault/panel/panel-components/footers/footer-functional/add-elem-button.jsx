'use client';

//Function
import Image from 'next/image';
import svgadd from '@/public/ups/native/plus.svg';
import { useACContext } from '@/src/context/AddCancelElementContext.jsx';

function Add_Elem_Btn() {

    const { makeinfo } = useACContext();

    return (
        <>
            <div id="box-add-elem" onClick={ makeinfo }>
                <div className="display-centered-svg">
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
                <div className="display-centered-svg">
                    <Image src={svgadd} width={24} height={24}></Image>
                </div>
            </div>
        </>
    );
*/