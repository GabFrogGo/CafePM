'use client';

//Function
import { useCEContext } from '@/src/context/CancelElementContext.jsx';

function Cancel_Elem_Btn() {

    const { callCancelInfo } = useCEContext();

    return (
        <>
            <div class="standard-svg-container" id="abort-element" onClick={ callCancelInfo }>
                <div class="display-centered-svg">
                    Cancel
                </div>
            </div>
        </>
    );
};

export default Cancel_Elem_Btn;
