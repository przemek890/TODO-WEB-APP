import ky from "ky";
import {API_URL} from "../../../config";
import {CategoryType} from "../../../types/CatType";

export const listCategories = async () => {
    return ky.get(`${API_URL}/cat`,{credentials:"include"}).json<CategoryType[]>();
}