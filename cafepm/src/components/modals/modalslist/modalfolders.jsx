'use client';

import '@/src/components/modals/modalstyles/basemodal.scss';

import { usePopupContext } from '@/src/context/InvokePopupsContext.jsx';

//Buttons
import { SaveBTN, CancelBTN } from "../../buttons/shared/modalbuttons.jsx";

export default function FolderPopup() {

    const { cancelfolder } = usePopupContext();

    return (
        <>
            <div className="np-container">
                <div className="np-functions-box">

                    <span className="modal-action-text">
                        <div>Create a folder:</div>
                    </span>

                    <span className="modal-function-box">
                        <label htmlFor="entry-folder-gen">Name</label>
                        <input 
                            name="inp-folder" 
                            id="entry-folder-gen" 
                            autoComplete="off" 
                            type="text" 
                            defaultValue="">
                        </input>
                    </span>

                </div>

                <div className="np-buttons-box">
                    <SaveBTN />
                    <span onClick={ cancelfolder }>
                        <CancelBTN />
                    </span>
                </div>
            </div>
        </>
    );
}