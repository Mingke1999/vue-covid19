import axios from "axios";

const instance = axios.create({
    timeout:5000,
    //baseURL:""
})

/**
 * console log corresonding to error code
 * @param {*} status error code
 * @param {*} info  error detail
 */
const errorCode = (status,info) =>{
    switch(status){
        case 400:
            console.log("Bad Request")
            break;
        case 401:
            console.log("Unauthorized")
            break;
        case 402:
            console.log("Payment Required")
            break;
        case 403:
            console.log("Forbidden")
            break;
        case 404:
            console.log("Not Found")
            break;
        case 500:
            console.log("Internal Server Error")
            break;
        case 502:
            console.log("Bad Gateway")
            break;
        default:
            console.lop(info);
            break;
    }
}
/**
 * request preview
 */
instance.interceptors.request.use(
    config=>{
        if(config.method === 'post'){
            config.headers =  {
                'Content-type': 'application/x-www-form-urlencoded',
            }
            //old versions use querystring convert onject to &key=value
        }
        return config;
    },
    error => Promise.reject(error)
)
/**
 * passing response code and details for further console log
 */
instance.interceptors.response.use(
    response => response.status===200? Promise.resolve(response) : Promise.reject(response),
    error =>{
        const { response } = error;
        errorCode(response.status,response.info)
    }
)

export default instance;