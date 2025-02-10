import ky from "ky";
import {API_URL} from "../../../config";
import {UserType} from "../../../types/UserType";
import {CategoryTypeForm} from "../../../types/CatFormType";

export const deleteCategory = async (data: CategoryTypeForm)=> {
    return ky.delete(`${API_URL}/cat/${data.name}`,{credentials: "include"}).json<UserType>();
}