import React, { Component } from 'react';

class LogKorisnikComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    cancel(){   
        this.props.history.push('/oglas');
    }
    render() {
        return (
            <div>
                <div className= "container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Log in</h3>
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

export default LogKorisnikComponent;