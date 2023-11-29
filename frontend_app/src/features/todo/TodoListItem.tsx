import React, {CSSProperties, FC, memo, useState} from 'react';
import {TodoType} from "../../types/TodoType";
import {Badge, Card, Group, Image, Text, Checkbox} from "@mantine/core";

interface TodoListItemProps {
    item: TodoType;
}

export const TodoListItem : FC<TodoListItemProps> = memo(({item}) => {
    const [checked, setChecked] = useState(false);

    const style: CSSProperties | undefined = checked ? {border: "2px solid", borderColor: "rgba(63,63,63,0.72)"} : undefined;

    return (
        <Card shadow="sm" style={style} padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src="https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    height={160}
                    alt="TODO"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{item.title}</Text>
                <Checkbox checked={checked} onChange={(e) => setChecked(e.currentTarget.checked)} />
            </Group>

            <Text mt="xs" size="sm" c="dimmed">
                {item.content}
            </Text>
        </Card>
    );
});
