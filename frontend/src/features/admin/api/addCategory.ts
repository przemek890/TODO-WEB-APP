import ky from "ky";
import {API_URL} from "../../../config";
import {TodoFormValues} from "../../../types/TodoFormValues";
import {TodoType} from "../../../types/TodoType";
import {CategoryType} from "../../../types/CatType";
import {CategoryTypeForm} from "../../../types/CatFormType";

export const createCategory = async (data: CategoryTypeForm)=> {
    return ky.post(`${API_URL}/cat`,{json: data,credentials: "include"}).json<CategoryType>();
}