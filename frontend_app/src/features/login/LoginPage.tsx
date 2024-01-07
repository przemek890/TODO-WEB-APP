import React, {FC} from 'react';
import {useForm} from "@mantine/form";
import {Button,Stack,TextInput} from "@mantine/core";
import { useLogin } from "./api/login";
import {useNavigate} from "react-router-dom";

type LoginFormType = {
    email: string;
    password: string;
}

export const LoginPage: FC = () => {
    const navigate = useNavigate();
    const login = useLogin();
    const form = useForm<LoginFormType>({
        initialValues: {
            email: '',
            password: ''
        },
    })

    const handleSubmit = async(data: LoginFormType) => {
        try {
            await login(data.email, data.password);
            navigate('/todo');
        } catch (error: any) {
            alert("Błędne dane!!");
        }
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <div style={{ width: '50%' }}>
                <h1 style={{ textAlign: 'center' }}>TODO LIST LOGIN PAGE</h1>
                <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
                    <Stack gap = "md">
                        <TextInput required type="email" label="Email" {...form.getInputProps('email')}/>
                        <TextInput required type="password" label="Password" {...form.getInputProps('password')}/>
                        <Button type="submit">Login</Button>
                    </Stack>
                </form>
            </div>
        </div>
    );

};