function Input_Card_Element() {
    return (
      <>
        <div className="deco-border-div">
            <span className="info-div-style">
                <label htmlFor="entry-card-name">Name</label>
                <input 
                    name="name" 
                    id="entry-card-name" 
                    defaultValue="" 
                    autoComplete="off" 
                    type="text"
                >
                </input>
            </span>
        </div>
        <div className="deco-border-div">
            <span className="info-div-style">
                <label htmlFor="entry-card-owner">Name of the card owner</label>
                <input 
                    name="cardowner" 
                    id="entry-card-owner" 
                    defaultValue="" 
                    autoComplete="off" 
                    type="text"
                >
                </input>
            </span>
        </div>
        <div className="deco-border-div">
            <span className="info-div-style">
                <label htmlFor="entry-card-num">Number</label>
                <input 
                    name="number" 
                    id="entry-card-num" 
                    defaultValue="" 
                    autoComplete="off" 
                    type="password"
                >
                </input>
            </span>
        </div>
        <div className="deco-border-div">
            <span className="info-div-style">
                <label htmlFor="entry-card-tm">Trademark</label>
                <select 
                    name="cardtm" 
                    id="entry-card-tm" 
                    defaultValue="" 
                    className="info-div-style-et"
                >
                    <option value="">-- Select --</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="American Express">American Express</option>
                    <option value="Discover">Discover</option>
                    <option value="Diners Club">Diners Club</option>
                    <option value="JBC">JCB</option>
                    <option value="Maestro">Maestro</option>
                    <option value="UnionPay">UnionPay</option>
                    <option value="RuPay">RuPay</option>
                    <option value="Other">Other</option>
                </select>
            </span>
        </div>
        <div className="deco-border-div">
            <span className="info-div-style">
                <label htmlFor="entry-card-em">Expiration month</label>
                <select 
                    name="expmonth" 
                    id="entry-card-em" 
                    defaultValue="" 
                    className="info-div-style-et"
                >
                    <option value="">-- Select --</option>
                    <option value="01">01 - January</option>
                    <option value="02">02 - February</option>
                    <option value="03">03 - March</option>
                    <option value="04">04 - April</option>
                    <option value="05">05 - May</option>
                    <option value="06">06 - June</option>
                    <option value="07">07 - July</option>
                    <option value="08">08 - August</option>
                    <option value="09">09 - September</option>
                    <option value="10">10 - October</option>
                    <option value="11">11 - November</option>
                    <option value="12">12 - December</option>
                </select>
            </span>
        </div>
        <div className="deco-border-div">
            <span className="info-div-style">
                <label htmlFor="entry-card-ey">Expiration Year</label>
                <input 
                    name="expyear" 
                    id="entry-card-ey" 
                    defaultValue="" 
                    autoComplete="off" 
                    type="number" 
                    placeholder="ej. 2024"
                >
                </input>
            </span>
        </div>
        <div className="deco-border-div">
            <span className="info-div-style">
                <label htmlFor="entry-card-sc">Security code</label>
                <input 
                    name="seccode" 
                    id="entry-card-sc" 
                    defaultValue="" 
                    autoComplete="off" 
                    type="password"
                >
                </input>
            </span>
        </div>
      </>
    );
}
  
export default Input_Card_Element;