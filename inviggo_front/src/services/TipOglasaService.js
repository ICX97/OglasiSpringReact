import axios from 'axios';

const tipURL = "http://localhost:8080/api/v1/tipOglasa"
class TipOglasaService {
    getTipOglasa(){
        return axios.get(tipURL);
    }
    getTipOglasaById(tip_id){
        return axios.get(tipURL + '/' + tip_id );
    }
    getTipOglasaPoNazivuTipa(naziv){
        return axios.get('http://localhost:8080/api/v1/poNazivuTipa' + naziv );
    }
}
export default new TipOglasaService()