import 'bootstrap/dist/css/bootstrap.min.css';
import Coin from './Components/coins';
import HeaderNav from './Components/header';

function App() {
    return (
        <>
            <HeaderNav/>
            <section className="py-2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="shadow p-5 my-3 bg-white rounded">
                                fg
                            </div>
                            <div className="shadow p-5 my-3 bg-white rounded">
                                gf
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <Coin/>
                        </div>
                    </div>
                </div>
            </section>


        </>

    );
}

export default App;
