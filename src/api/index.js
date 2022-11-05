import axios from "../utils/request";
import base from "./base";

const api = {
    getNcov(params){
        
        return axios.get(base.baseUrl + base.ncov,{
            params
        })
    }
}

export default api;