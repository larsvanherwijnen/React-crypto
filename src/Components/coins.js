import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../App.css';


class Coins extends React.Component {
    constructor() {
        super();
        this.state = {
            coins: []
        }
    }

    fetchAPI() {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false`)
            .then(res => res.json())
            .then(
                (result) => {
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

    componentDidMount() {
        this.fetchAPI();
        this.interval = setInterval(() => {
            this.fetchAPI();
        }, 3000);
    }


    render() {
        const {coins} = this.state;
        return (
            <>
                <div className="shadow p-3 my-3 card-border">
                    <div className="overflow-auto">
                        <div className="height">
                            {coins.map(coin => (
                                <div className="coin" key={coin.id}>
                                    <img className="coinImage" src={coin.image} width="50px" height="50px"  alt="Problem with loading"></img>
                                    <div className="text-coin">
                                        <p>Naam<br/> <b>{coin.name}({coin.symbol})</b></p>
                                    </div>
                                    <div className="text-coin">
                                        <p>Huidige price<br/> <b>€ {coin.current_price},-</b></p>
                                    </div>
                                    <div className="text-coin">
                                        <p>Procentuele verandering (24
                                            uur) <br/><b>{coin.price_change_percentage_24h} %</b></p>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Coins;
