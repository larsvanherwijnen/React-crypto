import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';


function Coins() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false'
            )
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }, []);


    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <>
            <div className="shadow p-3 my-3 card-border">
                <input type="text" placeholder="Search.." onChange={handleChange}/>
            </div>
            <div className="shadow p-3 my-3 card-border">
                <div className="overflow-auto">
                    <div className="height">
                        {filteredCoins.map(coin => {
                            return (
                                <div className="coin">
                                    <img className="coinImage" src={coin.image} width="50px" height="50px"></img>
                                    <div className="text-coin">
                                        <p>Naam<br/> <b>{coin.name}({coin.symbol})</b></p>
                                    </div>
                                    <div className="text-coin">
                                        <p>Huidige price<br/> <b>€ {coin.current_price},-</b></p>
                                    </div>
                                    <div className="text-coin">
                                        <p>Procentuele verandering (24 uur) <br/><b>{coin.price_change_percentage_24h} %</b></p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>

    )

}

export default Coins;
