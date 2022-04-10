import {axiosService} from "./axiosService";
import {urls} from "../Config/Config";


export const usersServiceId ={
    getById:(id)=> axiosService.get(`${urls.users}/${id}`)
}