import {Outlet} from "react-router-dom";
import {AppNavBar} from "./AppNavBar";
import {AppShell, Burger, Group, Text} from "@mantine/core";
import React from "react";
import {useDisclosure} from "@mantine/hooks";
import {ColorSchemeComponent} from "./ColorSchema";

export const Layout = () => {
    const [opened, { toggle }] = useDisclosure();
    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Text fw={700} size="xl">TODO APP</Text>
                    <ColorSchemeComponent />
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <AppNavBar/>
            </AppShell.Navbar>
            <AppShell.Main><Outlet/></AppShell.Main>
        </AppShell>
    );
}
