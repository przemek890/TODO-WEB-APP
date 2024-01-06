import {TodoFormValues} from "../../types/TodoFormValues";
import {useTodoForm} from "./hooks/useTodoForm";
import {Button,Checkbox,Group,Paper,Stack,Textarea,TextInput,Space} from "@mantine/core";
import React, {useEffect, useState} from 'react';
import {createTodo} from "./api/create-todo";
import {useNavigate} from "react-router-dom";
import {listCategories} from "./api/categories";
import {CategoryType} from "../../types/CatType";


export const TodoForm = () => {
    const form = useTodoForm();
    const navigate = useNavigate();

    // Pobierz kategorie
    const [categories, setCategories] = useState<CategoryType[]>([]);
    useEffect(() => {
        listCategories().then(setCategories);
    }, []);

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

                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {categories.map((category, index) => (
                            <div style={{ marginRight: '25px' }}>
                                <Checkbox
                                    key={category.id}
                                    label={category.name}
                                    checked={form.values.categories.includes(category.id)}
                                    onChange={() => {
                                        const isChecked = form.values.categories.includes(category.id);
                                        if (isChecked) {
                                            form.setFieldValue('categories', form.values.categories.filter(id => id !== category.id));
                                        } else {
                                            form.setFieldValue('categories', [...form.values.categories, category.id]);
                                        }
                                    }}
                                />
                            </div>
                        ))}
                    </div>


                    <Space/>
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

