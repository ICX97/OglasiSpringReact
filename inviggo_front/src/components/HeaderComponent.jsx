import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render() {
        
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="row">
                            <Link style={{marginLeft: "1100px"},{marginTop: "10px"}} to="/oglas">
                                <ul>Oglasi</ul>
                            </Link>
                            <Link style={{marginLeft: "1100px"},{marginTop: "10px"}} to="/singUp">
                                <ul>Sing Up</ul>
                            </Link>
                            <Link  style={{marginLeft: "1100px"},{marginTop: "10px"}} to="/logIn">
                                <ul>
                                Log In
                                </ul>
                            </Link>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;