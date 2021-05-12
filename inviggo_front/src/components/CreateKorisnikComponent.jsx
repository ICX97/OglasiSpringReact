import React, { Component } from 'react';

import { withRouter } from "react-router-dom";

class CreateKorisnikComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            
            ime: '',
            sifra: '',
            grad: '',
            email: '',
            datum: '',
            status: '',
            brTelefona: ''
        }
        // this.changeImeHandler = this.changeImeHandler.bind(this);
        // this.changeSifraHandler = this.changeSifraHandler.bind(this);
        // this.changeGradHandler = this.changeGradHandler.bind(this);
        // this.changeBrTelefonaHandler = this.changeBrTelefonaHandler.bind(this);
        // this.saveKorisnik = this.saveKorisnik.bing(this);
        // this.changeEmailHandler = this.changeEmailHandler.bing(this);
        // this.changeStatusHandler = this.changeStatusHandler.bing(this);
    }

    // saveKorisnik = (e) => {
    //     e.preventDefault();
    //     let korisnik = {ime: this.state.ime, sifra: this.state.sifra,email: this.state.email,status: this.state.status, grad: this.state.grad, brTelefona: this.state.brTelefona};
    //     console.log('korisnik =>' + JSON.stringify(korisnik)); 
    // }

    // changeImeHandler = (event) =>{
    //     this.setState({ime: event.target.value})
    // }

    // changeSifraHandler = (event) =>{
    //     this.setState({sifra: event.target.value})
    // }
    // changeEmailHandler = (event) =>{
    //     this.setState({email: event.target.value})
    // }
    // changeGradHandler = (event) =>{
    //     this.setState({grad: event.target.value})
    // }
    // changeBrTelefonaHandler = (event) =>{
    //     this.setState({brTelefona: event.target.value})
    // }
    // changeStatusHandler = (event) =>{
    //     this.setState({status: event.target.value})
    // }

    cancel(){
        this.props.history.push('/oglas');
    }
    render() {
        return (
            <div>
                <div className= "container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add User</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input placeholder="Username" name="ime" className="form-control"
                                        value={this.state.ime} onChange={this.changeImeHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input placeholder="Password" name="sifra" className="form-control"
                                        value={this.state.sifra} onChange={this.changeSifraHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>City</label>
                                        <input placeholder="City" name="grad" className="form-control"
                                        value={this.state.grad} onChange={this.changeGradHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input placeholder="Email" name="email" className="form-control"
                                        value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Status</label>
                                        <input placeholder="Status" name="status" className="form-control"
                                        value={this.state.status} onChange={this.changeStatusHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Telephone number</label>
                                        <input placeholder="Number" name="brTelefona" className="form-control"
                                        value={this.state.brTelefona} onChange={this.changeBrTelefonaHandler}/>
                                    </div>
                                    {/* <button className="btn btn-success" onClick={this.saveKorisnik}>Save</button> */}
                                    <button className="btn btn-success" >Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateKorisnikComponent;