import React, { Component } from 'react';
import OglasService from '../services/OglasService';

class ViewOglasComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            oglas_id: this.props.match.params.oglas_id,
            oglasi: []
        }
        this.editOglas = this.editOglas.bind(this);
        this.deleteOglas = this.deleteOglas.bind(this);
    }

    editOglas(oglas_id){
        this.props.history.push(`/addOglas/${oglas_id}`);
    }

    deleteOglas(oglas_id){
        OglasService.deleteOglas(oglas_id).then(res=> {
            this.setState({oglasi: this.state.oglasi.filter(oglas => oglas.oglas_id !== oglas_id)})
        });
        this.props.history.push('/oglas');
    }

    componentDidMount(){
        OglasService.getOglasById(this.state.oglas_id).then(res => {
            this.setState({oglasi: res.data});
        });
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Oglas Datails</h3>
                    <div className="card-body">
                        <div className="column">
                            <div className="row">
                                <label> Ime oglasa:</label>
                                <div> {this.state.oglasi.ime_oglasa}</div>
                            </div>
                            <div className="row">
                                <label> Opis: </label>
                                <div> {this.state.oglasi.opis}</div>
                            </div>
                            <div className="row">
                                <label> Cena: </label>
                                <div> {this.state.oglasi.cena}</div>
                            </div>
                            <div className="row">
                                <label> Grad: </label>
                                <div> {this.state.oglasi.grad}</div>
                            </div>
                            <div className="row">
                                <label> Url: </label>
                                <div> {this.state.oglasi.url}</div>
                            </div>
                            <div className="row">
                                <label> Datum: </label>
                                <div> {this.state.oglasi.datum_postavljanja}</div>
                            </div>
                        </div>
                        <div className="column">
                            <button onClick= {()=> this.editOglas(this.state.oglasi.oglas_id)} className="btn btn-info">Update</button>
                            <button style={{marginLeft: "10px"}} onClick= {()=> this.deleteOglas(this.state.oglasi.oglas_id)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewOglasComponent;