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
            <div class="panel-elements">
                <div class="elements-box">
                    <div class="elements">

                        <div class="element-prev">
                            <div class="left-cont">
                                <div class="image-standards element-img">
                                    <Image id="element-dist" src={imgtest} width={100} height={100}></Image>
                                </div>
                            </div>
                            <div class="right-cont">
                                <div>
                                    <span class="element-name">
                                        Netflix
                                    </span>
                                </div>
                                <div>
                                    <span class="element-user">
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