import {Paper, Switch, useMantineColorScheme } from '@mantine/core';

export const ColorSchemeComponent = () => {
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    const handleColorSchemeChange = () => {
        setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem' }}>
            <Paper>
                <Switch
                    checked={colorScheme === "dark"}
                    onChange={handleColorSchemeChange}
                    label={colorScheme === "dark" ? "Dark mode" : "Light mode"}
                />
            </Paper>
        </div>
    );
}
