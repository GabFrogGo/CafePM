function Gen_Notes_Input() {
    return (
      <>
        <div className="deco-panel-info" id="notes">
          <label htmlFor="notes">Notes</label>
          <textarea 
            name="notes" 
            rows="4" 
            id="do-note"
          ></textarea>
        </div>
      </>
    );
}
  
export default Gen_Notes_Input;