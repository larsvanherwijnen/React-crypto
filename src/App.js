import 'bootstrap/dist/css/bootstrap.min.css';
import Coin from './Components/coins';
import Login from "./Components/login";
import Setalert from "./Components/setalert"
import React from "react";
import firebase from "firebase";
import {auth} from "./Components/firebase/firebase";

class App extends React.Component {
    render(){
        return (
            <>
                <section className="">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-5">
                                <Login/>
                                <Setalert/>
                            </div>
                            <div className="col-lg-7">
                                <Coin/>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default App;
