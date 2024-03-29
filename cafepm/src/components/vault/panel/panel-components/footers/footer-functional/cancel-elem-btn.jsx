'use client';

//Function
import { useACContext } from '@/src/context/AddCancelElementContext.jsx';

function Cancel_Elem_Btn() {

    const { cancelinfo } = useACContext();

    return (
        <>
            <div class="standard-svg-container" id="abort-element" onClick={ cancelinfo }>
                <div class="display-centered-svg">
                    Cancel
                </div>
            </div>
        </>
    );
};

export default Cancel_Elem_Btn;
