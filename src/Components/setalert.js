import "../App.css"


function Setalert() {
    return (
        <>

            <div className="shadow p-3 my-1 card-border card-color">
                <form className="form-inline">
                    <label className="sr-only" htmlFor="inlineFormInputName2">Voor</label>
                    <select className="custom-select mb-2 mr-sm-2" id="inlineFormCustomSelect">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Krijg alert bij</label>
                    <div className="input-group mb-2 mr-sm-2">
                        <input type="text" className="form-control" id="inlineFormInputGroupUsername2"
                               placeholder="Bijv. €60000,-"/>
                    </div>

                    <button type="submit" className="btn btn-primary mb-2">Voeg alert toe</button>
                </form>
            </div>
        </>
    );
}

export default Setalert;