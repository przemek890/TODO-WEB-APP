import {TodoType} from "../../types/TodoType";
import {TodoListItem} from "./TodoListItem";
import { SimpleGrid } from '@mantine/core';
import {useEffect, useState} from "react";
import {listTodo} from "./api/todo";


export const TodoList = () => {
    const [data, setData] = useState<TodoType[]>([]);

    useEffect(() => {
        listTodo().then((response) => setData(response));
    },[])

    return (
        <div style={{width: '100%'}}>
            <SimpleGrid cols={{base: 1, sm: 2, lq: 3}}>
                {data.map((item) => <TodoListItem key={item.id} item={item}/>)}
            </SimpleGrid>
        </div>
    )
}
