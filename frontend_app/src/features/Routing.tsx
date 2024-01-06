import {Navigate, RouteObject, useRoutes} from "react-router-dom";
import {Layout} from "../components/Layout";
import {TodoList} from "./todo/TodoList";
import {Calculator} from "./calculator/Calculator";
import {TodoForm} from "./todo/TodoForm";
import {ErrorPage} from "./error/ErrorPage";

// Routing.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {LoginPage} from "./login/LoginPage";
import {useIsLogged} from "../hooks/useIsLogged";

const publicRoutes: RouteObject[] = [
    {
        // path: '/',
        children: [
            {
                path: '/login',
                element: <LoginPage/>
            },
            {
                path: '*',
                element: <Navigate to="/login" replace/>
            }
        ]
    }
]

const privateroutes: RouteObject[] = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: "/todo",
                element: <TodoList/>,
            },
            {
                path: '/todo/new',
                element: <TodoForm/>,
            },
            {
                path: 'todo/:id',
                element: <TodoForm/>,
            },
            {
                path: 'todo/calculator',
                element: <Calculator/>,
            },
            {
                path: '*',
                element: <ErrorPage/>,
            }

        ]
    }
]

export const Rounting = () => {
    const isLogged = useIsLogged();
    const routes = isLogged ? privateroutes : publicRoutes;
    return useRoutes(routes);
}