'use client';

function Input_Acc_Element() {
    return (
      <>
        <div className="deco-border-div">
            <span className="info-div-style">
                <label htmlFor="entry-acc-name">Name</label>
                <input 
                    name="name" 
                    id="entry-acc-name" 
                    autoComplete="off" 
                    type="text" 
                    defaultValue="">
                </input>
            </span>
        </div>
        <div className="deco-border-div">
            <span className="info-div-style">
                <label htmlFor="entry-acc-user">User</label>
                <input 
                    name="user" 
                    id="entry-acc-user" 
                    autoComplete="off"
                    type="text" 
                    defaultValue="">
                </input>
            </span>
        </div>
        <div className="deco-border-div">
            <span className="info-div-style">
                <label htmlFor="entry-acc-email">E-mail</label>
                <input 
                    name="email" 
                    id="entry-acc-email" 
                    autoComplete="off" 
                    type="text" 
                    defaultValue="">
                </input>
            </span>
        </div>
        <div className="deco-border-div">
            <span className="info-div-style">
                <label htmlFor="entry-acc-pwd">Password</label>
                <input 
                    name="password" 
                    id="entry-acc-pwd" 
                    autoComplete="off" 
                    type="password" 
                    defaultValue="">
                </input>
            </span>
        </div>
        <div>
            <span className="info-div-style">
                <label htmlFor="entry-acc-TOTP">Auth (TOTP)</label>
                <input 
                    name="totp" 
                    id="entry-acc-TOTP" 
                    autoComplete="off" 
                    type="text" 
                    defaultValue="">
                </input>
            </span>
        </div>
      </>
    );
}
  
export default Input_Acc_Element;