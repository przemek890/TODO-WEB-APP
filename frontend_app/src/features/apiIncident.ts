import ky from "ky";
import {API_URL} from "../config";
import {IncidentType} from "../types/Incident";

export const createincident = async (data: IncidentType)=> {
    return ky.post(`${API_URL}/inc`,{json: data,credentials: "include"}).json<IncidentType>();
}