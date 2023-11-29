import {RouteObject, useRoutes} from "react-router-dom";
import {Layout} from "../components/Layout";
import {TodoList} from "./todo/TodoList";
import {Calculator} from "./todo/calculator/Calculator";
import {TodoForm} from "./todo/TodoForm";
import {ErrorPage} from "./error/ErrorPage";

// Routing.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const routes: RouteObject[] = [
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
    return useRoutes(routes);
}