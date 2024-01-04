import {TodoFormValues} from "../../../types/TodoFormValues";
import {TodoType} from "../../../types/TodoType";
import {API_URL} from "../../../config";
import ky from "ky";

export const createTodo = async (data: TodoFormValues)=> {
    return ky.post(`${API_URL}/cal`,{json: data,credentials: "include"}).json<TodoType>();
}