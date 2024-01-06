import React, {FC} from 'react';
import {useForm} from "@mantine/form";
import {Button,Stack,TextInput} from "@mantine/core";
import {loginErrorNotification} from "./notifications";
import {login} from "./api/login";
import {useNavigate} from "react-router-dom";

type LoginFormType = {
    email: string;
    password: string;
}

export const LoginPage: FC = () => {
    const navigate = useNavigate();
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
        <div style={{width: '100%'}}>
            <h1>Witamy na stronie logowania</h1>
            <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
                <Stack gap = "md">
                    <TextInput required type="email" label="Email" {...form.getInputProps('email')}/>
                    <TextInput required type="password" label="Password" {...form.getInputProps('password')}/>
                    <Button type="submit">Login</Button>
                </Stack>
            </form>
        </div>
    );

};