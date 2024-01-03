import {TodoFormValues} from "../../types/TodoFormValues";
import {useTodoForm} from "./hooks/useTodoForm";
import {Button,Checkbox,Group,Paper,Stack,Textarea,TextInput} from "@mantine/core";
import React from 'react';
import {createTodo} from "./api/create-todo";
import {useNavigate} from "react-router-dom";


export const TodoForm = () => {
    const form = useTodoForm();
    const navigate = useNavigate();

    const handleSubmit = async (vals: TodoFormValues) => {
        try {
            await createTodo(vals);
            navigate('/todo');
        } catch {
            alert("Blad przy dodawaniu todo")
        }
    }

    return (
        <Paper shadow="xs" p="xl">
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap={"lg"}>
                    <TextInput
                        withAsterisk
                        label="Title"
                        placeholder="Title todo"
                        {...form.getInputProps("title")}
                    />

                    <Textarea withAsterisk label="Content"
                              placeholder="Content todo" {...form.getInputProps("content")}>
                    </Textarea>

                    <Checkbox
                        label="Done"
                        {...form.getInputProps("done",{type:'checkbox'})}
                    />
                    <Group justify="flex-end" mt="md">
                        <Button type="submit">Sent</Button>
                    </Group>
                </Stack>
            </form>
        </Paper>
    )
}