import axios from "../utils/request";
import base from "./base";

const api = {
    getNcov(params){
        
        return axios.get(base.baseUrl + base.ncov,{
            params
        })
    },
    getProvince(){
        return axios.get('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf')
    }

}

export default api;