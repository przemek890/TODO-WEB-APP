import {UserTypeForm} from "../../../types/UserTypeForm";
import ky from "ky";
import {API_URL} from "../../../config";
import {UserType} from "../../../types/UserType";
import {emailType} from "../../../types/Email";

export const deleteUser = async (data: emailType)=> {
    return ky.delete(`${API_URL}/user/${data.email}`,{credentials: "include"}).json<UserType>();
}