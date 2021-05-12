import React, { Component } from 'react';
import OglasService from '../services/OglasService';
import Pagination from './Pagination';


class ListOglasComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentPage:1,
            postsPerPage: 20,
            oglasi: []
        }
        this.addOglas = this.addOglas.bind(this);
        this.editOglas = this.editOglas.bind(this);
        this.deleteOglas = this.deleteOglas.bind(this);
    }
    editOglas(oglas_id){
        this.props.history.push(`/addOglas/${oglas_id}`);
    }
    componentDidMount(){
        OglasService.getOglas().then((res)=>{
            this.setState({oglasi: res.data});
        });
    }

    addOglas(){
        this.props.history.push('/addOglas/-1');
    }

    deleteOglas(oglas_id){
        OglasService.deleteOglas(oglas_id).then(res=> {
            this.setState({oglasi: this.state.oglasi.filter(oglas => oglas.oglas_id !== oglas_id)})
        });
    }

    viewOglas(oglas_id){
        this.props.history.push(`/viewOglas/${oglas_id}`)
    }


    render() {
        const { currentPage , postsPerPage } = this.state;
        const indexOfLastPage = currentPage * postsPerPage;
        const paginate = pageNum => this.setState({currentPage: pageNum});

        const nextPage = () => this.setState({currentPage: currentPage + 1 });

        const prevPage = () => this.setState({currentPage: currentPage - 1 });

        return (
            <div>
                <h2 style={{margin: "10px"}} className="text-center">Lista oglasa</h2>
                <div className="row">
                    <button style={{margin: "10px"}} className="btn btn-primary" onClick={this.addOglas}>Add Oglas</button>
                </div>
                <div className="row ">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>url</th>
                                <th>Naslov</th>
                                <th>Cena</th>
                                <th>Opis</th>
                                <th>Grad</th>
                                <th>Datum</th>
                                <th>Korisnik</th>
                                <th>Kategorija</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.oglasi.map(
                                    oglasi =>
                                    <tr key = {oglasi.oglas_id}>
                                        <td><image src="../../public/images/default.png" height="200" width="200"></image>{oglasi.url}</td>
                                        <td>{oglasi.ime_oglasa}</td>
                                        <td>{oglasi.cena}</td>
                                        <td>{oglasi.opis}</td>
                                        <td>{oglasi.grad}</td>
                                        <td>{oglasi.datum_postavljanja}</td>
                                        <td>{oglasi.korisnik.ime}</td>
                                        <td>{oglasi.tipOglasa.naziv}</td>
                                        <td>
                                            <button onClick= {()=> this.editOglas(oglasi.oglas_id)} className="btn btn-info">Update</button>
                                            <button style={{margin: "5px"}} onClick= {()=> this.deleteOglas(oglasi.oglas_id)} className="btn btn-danger">Delete</button>
                                            <button style={{margin: "5px"}} onClick= {()=> this.viewOglas(oglasi.oglas_id)} className="btn btn-primary">View</button>
                                            
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                        <Pagination postsPerPage={postsPerPage} totalPosts={this.state.oglasi.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage}></Pagination>
                    </table>

                </div>

            </div>
        );
    }
}

export default ListOglasComponent;