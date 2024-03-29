import '../footer-styles/footerinfo-st.scss';
//Function
import SaveNewElement from '../footers/footer-functional/save-new-element';
import Cancel_Elem_Btn from '../footers/footer-functional/cancel-elem-btn';

function PIFooter() {
    return (
        <>
            <div class="footer-panel-gen">
                <SaveNewElement />
                <Cancel_Elem_Btn />
            </div>
        </>
    );
}
  
export default PIFooter;