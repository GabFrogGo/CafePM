//Page
import '../panel-styles/panelements-st.scss';
//Components
import Prev_User_Element from '../panel-components/pe-comp/prevelem.jsx';
import PEFooter from '../panel-components/footers/pe-footer.jsx';
//Function
import Image from 'next/image';

import imgtest from '@/public/images/testimg.png'

function PElements() {
    return (
        <>
            <div className="panel-elements">
                <div className="elements-box">
                    <div className="elements">

                        <div className="element-prev">
                            <div className="left-cont">
                                <div className="image-standards element-img">
                                    <Image id="element-dist" src={imgtest} width={100} height={100}></Image>
                                </div>
                            </div>
                            <div className="right-cont">
                                <div>
                                    <span className="element-name">
                                        Netflix
                                    </span>
                                </div>
                                <div>
                                    <span className="element-user">
                                        serpiente@lol.com
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <PEFooter></PEFooter>
            </div>
        </>
    );
}

export default PElements;