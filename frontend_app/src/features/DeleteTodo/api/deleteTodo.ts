import ky from "ky";
import {API_URL} from "../../../config";
import {TodoFormValuesDelete} from "../../../types/TodoFormValueDelete";

export const deleteTodo = async (data: TodoFormValuesDelete)=> {
    return ky.delete(`${API_URL}/todo/${parseInt(data.id)}`,{credentials: "include"}).json<TodoFormValuesDelete>();
}