import axios from 'axios';

const korisnikURL = "http://localhost:8080/api/v1/korisnik"
class KorisnikService {
    getKorisnik(){
        return axios.get(korisnikURL);
    }

    createKorisnik(korisnik){
        return axios.post(korisnikURL,korisnik);
    }

    getKorisnikById(korisnik_id){
        return axios.get(korisnikURL + '/' + korisnik_id );
    }
    updateKorisnik(korisnik,korisnik_id){
        return axios.put(korisnikURL + '/' + korisnik_id,korisnik);
    }
    deleteKorisnik(korisnik_id){
        return axios.delete(korisnikURL + '/' + korisnik_id);
    }
}
export default new KorisnikService()