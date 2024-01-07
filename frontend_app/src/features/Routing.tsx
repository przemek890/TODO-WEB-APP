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
import AdminPage from "./admin/AdminPage";


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

const PrivateRoutes: RouteObject[] = [
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
                path: '/todo/:id',
                element: <TodoForm/>,
            },
            {
                path: '/todo/calculator',
                element: <Calculator/>,
            },
            {
                path: '/admin',
                element: <AdminPage/>,
            },
            {
                path: '*',
                element: <ErrorPage/>,
            }
        ]
    }
]


export const Routing = () => {
    const isLogged = useIsLogged();
    const routes = isLogged ? PrivateRoutes : publicRoutes;
    return useRoutes(routes);
}