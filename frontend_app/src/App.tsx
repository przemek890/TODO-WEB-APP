// App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Rounting } from './features/Routing';
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
    /** Put your mantine theme override here */
});

function App() {
    return (
        <div>
            <MantineProvider theme={theme}>
                <BrowserRouter>
                        <Rounting/>
                </BrowserRouter>
            </MantineProvider>
        </div>
    );
}

export default App;