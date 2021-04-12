import React from 'react';
import {auth} from './firebase/firebase';
import {signInWithGoogle} from './firebase/firebase';

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            currentUser: null
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <>
                {this.state.currentUser ? (
                        <div>
                            <div className="shadow p-3 my-3 card-border card-color">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex flex-row">
                                            <div className="image mr-3"><img src={this.state.currentUser.photoURL}
                                                                             className="rounded-circle" width="60" alt="oops"/></div>
                                            <div>
                                                <h6 className="">Hi, {this.state.currentUser.displayName}</h6>
                                                <button onClick={() => auth.signOut()} className="btn btn-danger">Uitloggen
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ) :


                    <div>
                        <div className="d-flex justify-content-center">
                            <div className="row">
                                <button type="button"
                                        className="btn btn-primary text-white position-absolute google-btn"
                                        onClick={signInWithGoogle}>
                                    Login met Google
                                </button>
                            </div>
                        </div>
                        <div className="shadow p-3 my-3 card-border card-color blur">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex flex-row">
                                        <div className="image mr-3"><img src="https://i.imgur.com/0LKZQYM.jpg"
                                                                         className="rounded-circle" width="60" alt="problem"/></div>
                                        <h6 className="my-2">Hi,</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </>
        );
    }
}

export default Login;