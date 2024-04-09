'use client'
import { useState, useEffect } from "react"
import '@/src/components/modals/modalstyles/basemodal.scss'

//Buttons
import { SaveBTN, CancelBTN } from "../../buttons/shared/modalbuttons.jsx"

export default function FolderPopup() {
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
                    <CancelBTN />
                </div>
            </div>
        </>
    );
}