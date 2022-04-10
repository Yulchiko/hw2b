import {axiosService} from "./axiosService";
import {urls} from "../Config/Config";

export const userService={
    getAll:()=> axiosService.get(urls.users)
}