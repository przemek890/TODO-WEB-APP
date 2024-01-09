import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './features/Routing';
import '@mantine/core/styles.css';
import { MantineProvider, createTheme, Notification, Paper, Switch, useMantineColorScheme } from '@mantine/core';

const theme = createTheme({});

function App() {
    return (
        <MantineProvider theme={theme}>
            <ColorSchemeComponent />
        </MantineProvider>
    );
}

function ColorSchemeComponent() {
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    const handleColorSchemeChange = () => {
        setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
    };


    return (
        <div>
            <Notification/>
            <BrowserRouter>
                <Routing/>
            </BrowserRouter>
            <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem' }}>
                <Paper>
                    <Switch name="switch"
                        checked={colorScheme === "dark"}
                        onChange={handleColorSchemeChange}
                        label={colorScheme === "dark" ? "Dark mode" : "Light mode"}
                    />
                </Paper>
            </div>
        </div>
    );
}

export default App;
