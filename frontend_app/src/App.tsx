// App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Rounting } from './features/Routing';
import '@mantine/core/styles.css';
import {MantineProvider, createTheme, Notification} from '@mantine/core';

const theme = createTheme({
});

function App() {
    return (
        <div>
            <MantineProvider defaultColorScheme="dark">
                <Notification/>
                <BrowserRouter>
                        <Rounting/>
                </BrowserRouter>
            </MantineProvider>
        </div>
    );
}

export default App;