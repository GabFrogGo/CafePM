function Element_User_Prefs() {
    return (
      <>
        <div className="deco-panel-info" id="user-prefs">
            <div>
                <span className="info-div-style">
                    <label htmlFor="folder-selector">Folder</label>
                    <select name="folderID" className="info-div-style-et element-txt" id="folder-selector" defaultValue="">
                        <option value="">No Folder</option>
                        <option value="13435t34ebe">Inserta todos los folders disponibles</option>
                    </select>
                </span>
            </div>
            <div className="deco-border-div-prefs">
                <span className="favourite">
                    <label htmlFor="fav-ck">Favourite</label>
                    <input name="favourite" id="fav-ck" autocomplete="off" type="checkbox"></input>
                </span>
            </div>
            <div className="deco-border-div-prefs">
                <span className="qa-master-pwd">
                    <label htmlFor="askpwd-ck">Ask again master password?</label>
                    <input name="askPwd" id="askpwd-ck" autocomplete="off" type="checkbox"></input>
                </span>
            </div>
        </div>
      </>
    );
}
  
export default Element_User_Prefs;