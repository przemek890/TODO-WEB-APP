import ky from "ky";
import {API_URL} from "../../../config";
import {CalType} from "../../../types/CalType";

export const listcal = async () => {
    return ky.get(`${API_URL}/cal`,{credentials:"include"}).json<CalType>();
}