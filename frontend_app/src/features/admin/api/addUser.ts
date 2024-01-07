import ky from "ky";
import {API_URL} from "../../../config";
import {UserType} from "../../../types/UserType";
import {UserTypeForm} from "../../../types/UserTypeForm";

export const createUser = async (data: UserTypeForm)=> {
    console.log(data)
    return ky.post(`${API_URL}/user`,{json: data,credentials: "include"}).json<UserType>();
}