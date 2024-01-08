import {
    IconCalculator,
    IconCross,
    IconDoorExit,
    IconListCheck,
    IconPlus,
    IconSkull,
    IconUser
} from "@tabler/icons-react";
import React, {useEffect, useState} from "react";
import {NavLink} from "@mantine/core";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {logout} from "../features/login/api/logout";
import {getMe} from "../features/login/api/getMe";
import fs from 'fs';
import path from 'path';
import {TodoFormValues} from "../types/TodoFormValues";
import ky from "ky";
import {API_URL} from "../config";
import {TodoType} from "../types/TodoType";
import {createincident} from "../features/apiIncident";


export const AppNavBar = () => {
    const navigate : NavigateFunction = useNavigate();
    const [userEmail, setUserEmail] = useState('');

    const handleLogout = async () => {
        try {
            await logout();
            window.location.reload(); // odśwież stronę
            alert("Wylogowano!");
        } catch (error) {
            alert("Wylogowanie nie powiodło się!!");
        }
    }

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getMe();
            if ('email' in user) {
                setUserEmail(user.email);
            }
        };
        fetchUser();
    }, []);

    const isAdmin = userEmail === 'admin@example.com';




    const handleAdminClick = async () => {
        if (isAdmin) {
            navigate("/admin");
        } else {
            alert("No permissions - this incident will be reported");
            await createincident(
                {
                    email: userEmail,
                    description: "No access to the resource"
                }
            );
        }
    }


    return (
        <div>
            <NavLink onClick={() => navigate("/todo")} label="TODO LISTS" leftSection={<IconListCheck size="1rem" stroke={1.5} />} />
            <NavLink onClick={() => navigate("/todo/new")} label="Add" leftSection={<IconPlus size="1rem" stroke={1.5} />} />
            <NavLink onClick={() => navigate("/todo/delete")} label="Delete" leftSection={<IconSkull size="1rem" stroke={1.5} />} />
            <NavLink onClick={() => navigate("/todo/calculator")} label="Calculator" leftSection={<IconCalculator size="1rem" stroke={1.5} />} />
            <NavLink onClick={handleAdminClick} label="Admin" leftSection={<IconUser size="1rem" stroke={1.5} />} />
            <NavLink onClick={handleLogout} label="Wyloguj" leftSection={<IconDoorExit size="1rem" stroke={1.5} />} />
        </div>
    )
}

{/*<NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to={'/todo'}>Lista TODO</NavLink> |*/}
{/*<NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to={'/todo/new'}>Dodaj</NavLink> |*/}
{/*<NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to={'/todo/calculator'}>Kalkulator</NavLink>*/}

