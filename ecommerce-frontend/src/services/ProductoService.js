import axios from 'axios';

const BASE_URL = 'http://localhost:8080/';

class ProductoService {
    getAll(){
        return axios({
            method: 'GET',
            url: '/productos/',
            baseURL: BASE_URL,
        });
    }
    save(producto){
        return axios({
            method: 'POST',
            url: '/productos/',
            baseURL: BASE_URL,
            headers:{'Content-Type': 'application/json'},
            data: JSON.stringify(producto),
        });
    }
    getById(id){
        return axios({
            method: 'GET',
            url: `/productos/${id}`,
            baseURL: BASE_URL,
        });
    }
    update(producto){
        return axios({
            method: 'PUT',
            url: '/productos/',
            baseURL: BASE_URL,
            headers:{'Content-Type': 'application/json'},
            data:JSON.stringify(producto),
        });
    }
    delete(id){
        return axios({
            method: 'DELETE',
            url: `/productos/${id}`,
            baseURL: BASE_URL,
        });
    }
}

export default new ProductoService();