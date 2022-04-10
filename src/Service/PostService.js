import {axiosService} from "./axiosService";
import {urls} from "../Config/Config";

export const PostService={
    getAllPost:(id)=>axiosService.get(`${urls.posts}?userId=${id}` )
}
