import {Outlet} from "react-router-dom";
import {AppNavBar} from "./AppNavBar";
import {AppShell, Burger, Group, Text, Image, useMantineColorScheme} from "@mantine/core";
import React from "react";
import {useDisclosure} from "@mantine/hooks";
import {ColorSchemeComponent} from "./ColorSchema";
import { useTheme } from "@chakra-ui/react";

export const Layout = () => {
    const [opened, { toggle }] = useDisclosure();
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Image
                        h={75}
                        src={ colorScheme === 'dark' ? "/logo192white.png" : "/logo192.png"}
                        alt="Logo"
                        style={{ marginTop: '-7px' }}
                    />
                    <Text fw={700} size="xl" style={{ marginTop: '-7px' }}>TODO APP</Text>
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
