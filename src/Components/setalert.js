import React from 'react';
import "../App.css"
import {onCreate} from "./firebase/firebase";
import firebase from "firebase";


class SetAlert extends React.Component {
    constructor() {
        super();
        this.state = {
            coins: [],
            alerts: [],
            currentUser: null
        }
    }

    fetchAPI() {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        coins: result,

                    });

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    readData() {
        const db = firebase.firestore();
        db.collection('alerts')
            .get().then((querySnapshot) => {
            const alerts = []
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                alerts.push(data)
            })
            this.setState({alerts: alerts})
        })
    }

    componentDidMount() {
        this.fetchAPI();
        this.readData();
    }

    render() {
        const {coins, alerts} = this.state;
        return (
            <>

                <div className="shadow p-3 my-3 card-border card-color">
                    <form className="form-inline">
                        <label className="sr-only" htmlFor="inlineFormInputName2">Voor</label>
                        <select className="custom-select mb-2 mr-sm-2" id="name">
                            <option>Choose...</option>
                            {coins.map((coin) =>
                                <option value={coin.name} key={coin.id}>{coin.name}</option>
                            )}
                        </select>

                        <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Krijg alert bij</label>
                        <div className="input-group mb-2 mr-sm-2">
                            <input type="text" className="form-control" id="price"
                                   placeholder="Bijv. €60000,-"/>
                        </div>
                        <button className="btn btn-primary mb-2" onClick={onCreate}>Voeg alert toe</button>
                    </form>
                </div>
                {alerts ? (
                        <div className="shadow p-3 my-3 card-border card-color">
                            <div className="overflow-auto">
                                <div className="height-alerts">
                                    {alerts.map((alert) =>
                                        <div className="alert" key={alert.id}>
                                            <div className="text-coin">
                                                <p>Naam Crypto<br/> <b>{alert.crypto_name}</b></p>
                                            </div>
                                            <div className="text-coin">
                                                <p>Alert Prijs<br/> <b>{alert.alert_at}</b></p>
                                            </div>
                                            <div className="text-coin">
                                                <p>Status<br/> <b>{alert.price_achieved ? 'True' : 'False'}</b></p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    ) :

                    <div className="shadow p-3 my-3 card-border card-color">
                        <div className="overflow-auto">
                            <div className="height-alerts">
                                Geen data gevonden
                            </div>
                        </div>
                    </div>

                }


            </>
        );
    }


}

export default SetAlert;