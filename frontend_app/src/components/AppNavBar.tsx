import {IconCalculator, IconListCheck, IconPlus} from "@tabler/icons-react";
import React from "react";
import {NavLink} from "@mantine/core";
import {NavigateFunction, useNavigate} from "react-router-dom";



// AppNavBar.tsx
export const AppNavBar = () => {
    const navigate : NavigateFunction = useNavigate();

    return (
        <div>
            <NavLink onClick={() => navigate("/todo")} label="TODO LIST" leftSection={<IconListCheck size="1rem" stroke={1.5} />} />
            <NavLink onClick={() => navigate("/todo/new")} label="Add" leftSection={<IconPlus size="1rem" stroke={1.5} />} />
            <NavLink onClick={() => navigate("/todo/calculator")} label="Calculator" leftSection={<IconCalculator size="1rem" stroke={1.5} />} />
        </div>
    )
}

{/*<NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to={'/todo'}>Lista TODO</NavLink> |*/}
{/*<NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to={'/todo/new'}>Dodaj</NavLink> |*/}
{/*<NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to={'/todo/calculator'}>Kalkulator</NavLink>*/}