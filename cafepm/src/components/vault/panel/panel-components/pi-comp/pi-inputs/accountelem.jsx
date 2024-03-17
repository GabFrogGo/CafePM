'use client';

//import { useSNEContext } from "@/src/context/SaveNewElementContext";
import { useRef, useState } from "react";

function Input_Acc_Element() {
    
    //const { formData, setFormData } = useSNEContext();

    return (
      <>
        <div className="deco-border-div">
            <span className="info-div-style">
                <label htmlFor="entry-acc-name">Name</label>
                <input name="name" 
                    id="entry-acc-name" 
                    autocomplete="off" 
                    type="text" 
                    defaultValue="">
                </input>
            </span>
        </div>
        <div className="deco-border-div">
            <span className="info-div-style">
                <label htmlFor="entry-acc-user">User</label>
                <input name="user" 
                    id="entry-acc-user" 
                    autocomplete="off" 
                    type="text" 
                    defaultValue="">
                </input>
            </span>
        </div>
        <div className="deco-border-div">
            <span className="info-div-style">
                <label htmlFor="entry-acc-email">E-mail</label>
                <input name="email" 
                    id="entry-acc-email" 
                    autocomplete="off" 
                    type="text" 
                    defaultValue="">
                </input>
            </span>
        </div>
        <div className="deco-border-div">
            <span className="info-div-style">
                <label htmlFor="entry-acc-pwd">Password</label>
                <input name="password" 
                    id="entry-acc-pwd" 
                    autocomplete="off" 
                    type="password" 
                    defaultValue="">
                </input>
            </span>
        </div>
        <div>
            <span className="info-div-style">
                <label htmlFor="entry-acc-TOTP">Auth (TOTP)</label>
                <input name="totp" 
                    id="entry-acc-TOTP" 
                    autocomplete="off" 
                    type="text" 
                    defaultValue="">
                </input>
            </span>
        </div>
      </>
    );
}
  
export default Input_Acc_Element;