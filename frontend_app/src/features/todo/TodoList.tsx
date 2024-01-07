import {TodoType} from "../../types/TodoType";
import {TodoListItem} from "./TodoListItem";
import { SimpleGrid } from '@mantine/core';
import {useEffect, useState} from "react";
import {listTodo} from "./api/todo";
import {Checkbox} from '@mantine/core';


export const TodoList = () => {
    const [data, setData] = useState<TodoType[]>([]);
    const [isAscending, setIsAscending] = useState(true);
    const [showCompleted, setShowCompleted] = useState(false); // Dodaj nowy stan

    useEffect(() => {
        listTodo().then((response) => setData(response));
    },[])

    const sortData = () => {
        const sortedData = [...data].sort((a, b) => {
            const textA = a.title.toUpperCase();
            const textB = b.title.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        if (!isAscending) {
            sortedData.reverse();
        }
        setData(sortedData);
        setIsAscending(!isAscending);
    }

    return (
        <div style={{width: '100%'}}>
            <h2 style={{ display: 'flex', marginTop: '-20px' }}>TODOS</h2>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <Checkbox onClick={sortData} style={{ marginRight: '8px' }}/>
                <div>Sort {'alphabetically'}</div>
                <Checkbox
                    checked={showCompleted}
                    onChange={() => setShowCompleted(!showCompleted)}
                    style={{ marginRight: '8px', marginLeft: '8px' }}
                />
                <div>IsDone</div>
            </div>
            <SimpleGrid cols={{base: 1, sm: 2, lq: 3}}>
                {data.filter(item => !showCompleted || item.done).map((item) => <TodoListItem key={item.id} item={item}/>)}
            </SimpleGrid>
        </div>
    )
}