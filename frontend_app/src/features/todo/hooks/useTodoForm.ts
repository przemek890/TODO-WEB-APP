import {useForm} from "@mantine/form";
import {TodoFormValues} from "../../../types/TodoFormValues";

export const useTodoForm = () => {
    const form = useForm<TodoFormValues>({
        initialValues: {
            content: "",
            title: "",
            done: false,
        },

        validate: {
            title: (value) => {
                if (value.length < 3) {
                    return "Title must be at least 3 characters long"
                }
            },
            content: (value) => {
                if (value.length < 10) {
                    return "Description must be at least 10 characters long"
                }
            }
        },
    });
    return form;
}