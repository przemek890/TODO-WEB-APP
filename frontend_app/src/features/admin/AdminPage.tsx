import React from 'react';
import { Paper, Stack, TextInput, Button, Space } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import { createCategory } from "./api/addCategory";
import { CategoryTypeForm } from "../../types/CatFormType";
import {useForm} from "@mantine/form";
import { UserType } from "../../types/UserType";
import { createUser } from "./api/addUser";
import { Group } from "@mantine/core";
import {UserTypeForm} from "../../types/UserTypeForm";

const AdminPage: React.FC = () => {
    const navigate = useNavigate();
    const form_user = useForm<UserTypeForm>();
    const form_category = useForm<CategoryTypeForm>();

    const handleUserSubmit = async (vals: UserTypeForm) => {
        try {
            await createUser(vals);
            navigate("/todo/new");
        } catch {
            alert("Error adding user - please enter correct details")
        }
    };

    const handleCategorySubmit = async  (vals: CategoryTypeForm) => {
        try {
            await createCategory(vals);
            navigate("/todo/new");
        } catch {
            alert("Error adding categories - please enter correct details")
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', marginLeft: '0' }}>
            <h2 style={{ marginTop: '-20px'}}>ADMIN BASEMENT</h2>
            <Paper shadow="xs" p="xl">
                <h3>Add User:</h3>
                <form onSubmit={form_user.onSubmit(handleUserSubmit)}>
                    <Stack gap={"lg"}>
                        <TextInput
                            withAsterisk
                            label="Username"
                            placeholder="Add User"
                            {...form_user.getInputProps("email")}
                        />
                        <TextInput
                            withAsterisk
                            label="Password"
                            placeholder="Add Password"
                            type="password"
                            {...form_user.getInputProps("password")}
                        />
                        <Group mt="md">
                            <Button type="submit">Add User</Button>
                        </Group>
                    </Stack>
                </form>
            </Paper>

            <Space h="lg" />

            <Paper shadow="xs" p="xl">
                <h3>Add Category:</h3>
                <form onSubmit={form_category.onSubmit(handleCategorySubmit)}>
                    <Stack gap={"lg"}>
                        <TextInput
                            withAsterisk
                            label="Category Name"
                            placeholder="Add Category"
                            {...form_category.getInputProps("name")}
                        />
                        <Group mt="md">
                            <Button type="submit">Add Category</Button>
                        </Group>
                    </Stack>
                </form>
            </Paper>
        </div>
    );
}

export default AdminPage;

