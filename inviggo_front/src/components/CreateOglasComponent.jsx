import React, { Component } from 'react';
import KorisnikService from '../services/KorisnikService';
import OglasService from '../services/OglasService';
import TipOglasaService from '../services/TipOglasaService';

class CreateOglasComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            oglas_id: this.props.match.params.oglas_id,
            ime_oglasa: '',
            opis: '',
            grad: '',
            cena: '',
            datum_postavljanja: '',
            url: '',
            korisnik: [],
            tipOglasa: [],
            selectedTip: [],
            selectedKorisnik: [],
            validationError: ''
        }
        this.changeImeHandler = this.changeImeHandler.bind(this);
        this.changeOpisHandler = this.changeOpisHandler.bind(this);
        this.changeGradHandler = this.changeGradHandler.bind(this);
        this.changeCenaHandler = this.changeCenaHandler.bind(this);
        this.changeDatumHandler = this.changeDatumHandler.bind(this);
        this.changeUrlHandler = this.changeUrlHandler.bind(this);
        this.changeTipOglasaHandler = this.changeTipOglasaHandler.bind(this);
        this.changeSelectedTipHandler = this.changeSelectedTipHandler.bind(this);
        this.saveOrUpdateOglas = this.saveOrUpdateOglas.bind(this);
        this.changeSelectedKorisnikHandler = this.changeSelectedKorisnikHandler.bind(this);
    }

    componentDidMount(){
        if(this.state.oglas_id == -1){
            TipOglasaService.getTipOglasa().then((res)=>{
                this.setState({tipOglasa: res.data});
            });
            KorisnikService.getKorisnik().then((res)=>{
                this.setState({korisnik: res.data});
            });
            return
        }
        else{
            OglasService.getOglasById(this.state.oglas_id).then((res)=>{
                let oglas = res.data;
                this.setState({ime_oglasa: oglas.ime_oglasa, opis: oglas.opis,
                     grad: oglas.grad,cena: oglas.cena, url:oglas.url});
            });
            TipOglasaService.getTipOglasa().then((res)=>{
                this.setState({tipOglasa: res.data});
            });
            KorisnikService.getKorisnik().then((res)=>{
                this.setState({korisnik: res.data});
            });
        }
    }

    saveOrUpdateOglas = (e) => {
        e.preventDefault();
        console.log(" nrdyo " + JSON.stringify(this.state.selectedTip));
        console.log(" tip " + JSON.stringify(this.state.selected));
        // var danas = new Date(); 
        // var godina = danas.getYear();
		// if(godina < 1000){
		// 	godina += 1900
		// }
        // var  mesec=danas.getMonth()+1;
        // console.log("vreme " + godina + "/" + mesec+ "/" +danas.getDate());
        // var vreme = godina + "-" + mesec+ "-" +danas.getDate();
        let selectedT;
        this.state.tipOglasa.forEach(element => {if(element.naziv==this.state.selectedTip){
            selectedT = element;
        }});
        let selectedK;
        this.state.korisnik.forEach(element => {if(element.ime==this.state.selectedKorisnik){
            selectedK = element;
        }});
            
        let oglas = {ime_oglasa: this.state.ime_oglasa, opis: this.state.opis, grad: this.state.grad,
        cena: this.state.cena,datum_postavljanja: Date.now(),url: this.state.url, tipOglasa:selectedT,korisnik: selectedK};
        console.log('oglas =>' + JSON.stringify(oglas)); 

        if(this.state.oglas_id == -1){
            OglasService.createOglas(oglas).then(res =>{
                this.props.history.push('/oglas');
            });
        }
        else{
            OglasService.updateOglas(oglas,this.state.oglas_id).then(res=>{
                this.props.history.push('/oglas');
            });
        }
    }

    //getTipOglasa(){
     //   if(this.state.oglas_id == -1){
       //     return this.state.selectedTip
        //}else{
        //    return this.state.tipOglasa.naziv
       //}
    //}

    changeImeHandler = (event) =>{
        this.setState({ime_oglasa: event.target.value})
    }
    changeOpisHandler = (event) =>{
        this.setState({opis: event.target.value})
    }
    changeGradHandler = (event) =>{
        this.setState({grad: event.target.value})
    }
    changeCenaHandler = (event) =>{
        this.setState({cena: event.target.value})
    }
    changeDatumHandler = (event) =>{
        this.setState({datum_postavljanja: event.target.value})
    }
    changeUrlHandler = (event) =>{
        this.setState({url: event.target.value})
    }
     changeKorisnikHandler = (event) =>{
         this.setState({korisnik: event.target.value})
     }
    changeTipOglasaHandler = (event) =>{
        this.setState({tipOglasa: event.target.value})
    }
    changeSelectedTipHandler = (event) =>{
        this.setState({selectedTip: event.target.value})
    }
    changeSelectedKorisnikHandler = (event) =>{
        this.setState({selectedKorisnik: event.target.value})
    }    

    cancel(){
        this.props.history.push('/oglas');
    }
    getTitle(){
        if(this.state.oglas_id == -1){
            return <h3 className="text-center">Add oglas</h3>
        }else{
            return <h3 className="text-center">Edit oglas</h3>
        }
    }
    render() {
        
        return (
            <div>
                <div className= "container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Ime</label>
                                        <input placeholder="Ime" name="ime" className="form-control"
                                        value={this.state.ime_oglasa} onChange={this.changeImeHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Opis</label>
                                        <input placeholder="Opis" name="opis" className="form-control"
                                        value={this.state.opis} onChange={this.changeOpisHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Grad</label>
                                        <input placeholder="City" name="grad" className="form-control"
                                        value={this.state.grad} onChange={this.changeGradHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Cena</label>
                                        <input placeholder="Cena" name="cena" className="form-control"
                                        value={this.state.cena} onChange={this.changeCenaHandler}/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Url</label>
                                        <input placeholder="Url" name="url" className="form-control"
                                        value={this.state.url} onChange={this.changeUrlHandler}/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <select
                                            value={this.state.selectedTip}
                                            /*onChange={e => this.setState({selectedTip: e.target.value})}*/
                                            onChange={this.changeSelectedTipHandler}
                                            > 
                                            {this.state.tipOglasa.map((tipOglasa) =>
                                            <option key={tipOglasa.value} value={tipOglasa.value}>{tipOglasa.naziv}</option>)}
                                        </select>
                                        <div style={{color: 'red', marginTop: '6px'}}>
                                            {this.state.validationError}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <select
                                            value={this.state.selectedKorisnik}
                                            /*onChange={e => this.setState({selectedTip: e.target.value})}*/
                                            onChange={this.changeSelectedKorisnikHandler}
                                            > 
                                            {this.state.korisnik.map((korisnik) =>
                                            <option key={korisnik.value} value={korisnik.value}>{korisnik.ime}</option>)}
                                        </select>
                                        <div style={{color: 'red', marginTop: '6px'}}>
                                            {this.state.validationError}
                                        </div>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateOglas}>Save</button>
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

export default CreateOglasComponent;