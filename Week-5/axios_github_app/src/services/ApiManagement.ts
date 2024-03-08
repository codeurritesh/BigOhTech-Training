import axios from "axios";
import { Response } from "../dataTypes/Response";
import { APIResponse } from "../dataTypes/APIResponse";

//handle erros with trycase,
// add custom header,
// add seperated method, get, put,patch,delete everything will be generic
// quality code,

class ApiManagement{
    private baseUrl="https://api.github.com/users"
    async getUserData(userName:string){
        try{
        const response=await axios.get(`${this.baseUrl}/${userName}`)
        return response.data;
        }catch(error){
            console.log(error)
        }
    }
}
export  const apiManagement=new ApiManagement();
