import React from 'react';
import { Paper, Stack, TextInput, Button, Space } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import {useForm} from "@mantine/form";
import { Group } from "@mantine/core";
import {TodoFormValuesDelete} from "../../types/TodoFormValueDelete";
import {deleteTodo} from "./api/deleteTodo";




const DeleteTodoPage: React.FC = () => {
    const navigate = useNavigate();


    const form_todo = useForm<TodoFormValuesDelete>({
        initialValues: {
            id: '',
        },
    });

    const handleTodoDelete = async (vals: TodoFormValuesDelete) => {
        try {
            await deleteTodo(vals);
            navigate("/todo");
        } catch {
            alert("Error deleting todo - please enter correct details")
        }
    };


    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', marginLeft: '0' }}>
            <h2 style={{ marginTop: '-20px', marginBottom: '-20px'}}>DELETE TODO</h2>
            <Paper shadow="xs" p="xl">
                <h3>Delete todo:</h3>
                <form onSubmit={form_todo.onSubmit(handleTodoDelete)}>
                    <Stack gap={"lg"}>
                        <TextInput
                            withAsterisk
                            label="id"
                            name="id"
                            placeholder="Delete todo"
                            {...form_todo.getInputProps("id")}
                        />
                        <Group mt="md">
                            <Button type="submit">Delete Todo</Button>
                        </Group>
                    </Stack>
                </form>
            </Paper>
        </div>
    );
}

export default DeleteTodoPage;

