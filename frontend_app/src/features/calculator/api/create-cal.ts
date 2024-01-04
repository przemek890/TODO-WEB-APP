import ky from "ky";
import {API_URL} from "../../../config";
import {CalType} from "../../../types/CalType";
import {CalFormType} from "../../../types/CalFormType";

export const createCal = async (data: CalFormType)=> {
    return ky.post(`${API_URL}/cal`,{json: data,credentials: "include"}).json<CalType>();
}