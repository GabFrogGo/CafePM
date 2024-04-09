import '../footer-styles/footermain-st.scss';
//Function
import Image from 'next/image';

//Deco
import svglock from '../../../../../../public/ups/native/lock.svg';
import svgshare from '../../../../../../public/ups/native/share.svg';

function PMFooter() {
    return (
        <>
            <div className="main-footer-panel-gen">
                <div id="my-vault" className="main-standard-svg-container">
                    <div className="main-display-centered-svg">
                        <div>
                            <Image src={svglock} width={19} height={19}></Image>
                        </div>
                        <div>
                            My vault
                        </div>
                    </div>
                </div>
                <div id="u-share" className="main-standard-svg-container">
                    <div className="main-display-centered-svg">
                        <div>
                            <Image src={svgshare} width={19} height={19}></Image>
                        </div>
                        <div>
                            Share
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
  
export default PMFooter;