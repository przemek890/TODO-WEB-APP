import {TodoType} from "../../types/TodoType";
import {TodoListItem} from "./TodoListItem";
import { SimpleGrid } from '@mantine/core';

const data: TodoType[] = [
    {
        id: 1,
        title: "Go for awalk",
        content: "-",
        done: false,
    },
    {
        id: 2,
        title: "Buy new macbook",
        content: "$$$",
        done: false,
    },
    {
        id:3,
        title: "Get an A in the Internet engineering",
        content: "-",
        done: true,
    },
    {
        id:4,
        title: "Survive",
        content: ":P",
        done: true,
    },

]




export const TodoList = () => {
    return (
        <div style={{width: '100%'}}>
            <SimpleGrid cols={{base: 1, sm: 2, lq: 3}}>
                {data.map((item) => <TodoListItem key={item.id} item={item}/>)}
            </SimpleGrid>
        </div>
    )
}
