import axios from "axios";
import {baseUrls} from "../Config/Config";

export  const  axiosService = axios.create({baseUrls});