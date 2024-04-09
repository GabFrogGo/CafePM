'use client';

//Function
import { useACContext } from '@/src/context/AddCancelElementContext.jsx';

function Cancel_Elem_Btn() {

    const { cancelinfo } = useACContext();

    return (
        <>
            <div className="standard-svg-container" id="abort-element" onClick={ cancelinfo }>
                <div className="display-centered-svg">
                    Cancel
                </div>
            </div>
        </>
    );
};

export default Cancel_Elem_Btn;
