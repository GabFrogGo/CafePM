import Element_User_Prefs from "./preferences";
import Gen_Notes_Input from "./notes-input";

function Input_SNote_Element() {
    return (
      <>
          <div className="deco-border-div">
              <span className="info-div-style">
                  <label htmlFor="entry-sn-name">Name</label>
                  <input name="name" id="entry-sn-name" defaultValue="" autocomplete="off" type="text"></input>
              </span>
          </div>
      </>
    );
}
  
export default Input_SNote_Element;