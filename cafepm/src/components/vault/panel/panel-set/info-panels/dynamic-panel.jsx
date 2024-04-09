//Page
import '../../panel-styles/panelinfo-st.scss';
//Components
import Image from 'next/image';

import ActionInput from '../../panel-components/pi-comp/pi-inputs/actioninput.jsx'
import PIFooter from '../../panel-components/footers/pi-footer.jsx';
import owl_logo from '../../../../../../public/ups/native/cafepmboceto_white.svg';

export function PInfoInput() {

    return (
        <>
            <div className="panel-info">
                <div className="info-box">
                    <ActionInput></ActionInput>
                </div>
                <PIFooter></PIFooter>
            </div>
        </>
    );
}

export function PInfoPrevious() {

    return (
        <>
            <div className="panel-info">
                <div className="info-box">
                    <div className="logopip-cont">
                        <Image src={owl_logo} width={220} height={220}></Image>
                    </div>
                </div>
            </div>
        </>
    );
}