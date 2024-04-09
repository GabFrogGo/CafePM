//Page
import '../panel-styles/panelmain-st.scss';
//Components
import User_Folders from '../panel-components/pm-comp/userfolders.jsx';
import Elemental_Dirs from '../panel-components/pm-comp/dirs.jsx';
import Element_Types from '../panel-components/pm-comp/elemtypes.jsx';
import PMFooter from '../panel-components/footers/pm-footer.jsx';

function PMain() {
    return (
        <>
            <div className="panel-main">
                <div className="main-box">
                    <div id="main-info-contents">
                        <Elemental_Dirs></Elemental_Dirs>
                        <Element_Types></Element_Types>
                        <User_Folders></User_Folders>
                    </div>
                </div>
                <PMFooter></PMFooter>
            </div>
        </>
    );
}

export default PMain;