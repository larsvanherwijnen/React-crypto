import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../App.css';


class Coin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({items: result})
                }
            )
    }

    render() {
        const {items} = this.state;
        return (
            <>
            <div className="shadow p-3 my-3 bg-white rounded h-100 ">Regular shadow

                    {
                        items.map(coin => (
                            <div className="coin">
                                <img className="coinImage" src={coin.image} width="50px" height="50px"></img>
                                <div className="name">
                                    <p>Crypto name <br/> <b>{coin.name}</b></p>
                                </div>
                                <div className="market">
                                    <p>Crypto price <br/> <b>{coin.current_price}</b></p>
                                </div>
                                <div className="change">
                                    <p>Crypto percentage <br/><b>{coin.price_change_percentage_24h}</b></p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </>

        )
    }
}

export default Coin;
