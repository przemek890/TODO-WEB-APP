import {TodoFormValues} from "../../types/TodoFormValues";
import {useTodoForm} from "./hooks/useTodoForm";
import {Button,Checkbox,Group,Paper,Stack,Textarea,TextInput} from "@mantine/core";
import React from 'react';


export const TodoForm = () => {
    const form = useTodoForm();

    const handleSubmit = (vals: TodoFormValues) => {
        console.log(vals);
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