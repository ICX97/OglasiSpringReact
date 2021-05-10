import axios from 'axios';

const oglasURL = "http://localhost:8080/api/v1/oglas"
class OglasService {
    getOglas(){
        return axios.get(oglasURL);
    }

    createOglas(oglas){
        return axios.post(oglasURL,oglas);
    }

    getOglasById(oglas_id){
        return axios.get(oglasURL + '/' + oglas_id );
    }
    updateOglas(oglas,oglas_id){
        return axios.put(oglasURL + '/' + oglas_id,oglas);
    }
    deleteOglas(oglas_id){
        return axios.delete(oglasURL + '/' + oglas_id);
    }
}
export default new OglasService()