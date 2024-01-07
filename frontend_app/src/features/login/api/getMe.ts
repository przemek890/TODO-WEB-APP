import ky from "ky";
import {API_URL} from "../../../config";
import {userMeUndefined} from "../../../types/UserMeUndefined";
import {userMe} from "../../../types/UserMe";

export const getMe = async () => {
    return ky.get(`${API_URL}/user/me`,{credentials:"include"}).json< userMe | userMeUndefined>();
}