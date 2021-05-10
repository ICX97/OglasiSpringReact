import React, { Component } from 'react';

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
                        <div>
                            <h1 className="navbar-brand">Oglasi inviggo</h1>
                            <button style={{marginLeft: "10px"}} className ="btn btn-primary"  onClick={this.SignUp}>Sing Up</button>
                            <button style={{marginLeft: "10px"}} className ="btn btn-primary"  onClick={this.LogIn}>Log in</button>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;