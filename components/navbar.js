import React from 'react';
import {
    Box,
    Container,
    Flex,
    Heading,
    IconButton,
    Menu,
    MenuButton,
    MenuItem, MenuList,
    Stack,
    Link,
    useColorModeValue
} from "@chakra-ui/react";
import NextLink from 'next/link';
import Logo from "./logo";
import {HamburgerIcon} from "@chakra-ui/icons";
import ThemeToggleButton from "../components/theme-toggle-button";
import WorkLink from "./work-link";
import {AiFillHome} from "react-icons/ai";
import {MdOutlineWork} from "react-icons/md";
import {FaGithub, FaTelegram} from "react-icons/fa";

const LinkItem = ({href, path, children}) => {
    const active = path === href;
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link p={2}
                  bg={active ? '#E53E3E' : undefined}
                  color={active ? '#F7FAFC' : inactiveColor}
                  href={href}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const {path} = props

    return (
        <Box position='fixed'
             as='nav'
             w='100%'
             bg={useColorModeValue('#ffffff40', '#2020380')}
             style={{backdropFilter: 'blur(10px)'}}
             zIndex={1}
             {...props}>
            <Container display='flex'
                       p={2} maxW='container.md'
                       wrap='wrap' align='center'
                       justify='space-between'>
                <Flex align='center' mr={5}>
                    <Heading as='h1' size='lg' letterSpacing={'tighter'}>
                        <Logo/>
                    </Heading>
                </Flex>

                <Stack direction={{base: 'column', md: 'row'}}
                       display={{base: 'none', md: 'flex'}}
                       width={{base: 'full', md: 'auto'}}
                       alignItems="center"
                       flexGrow={1}
                       mt={{base: 4, md: 0}}
                >
                    <LinkItem href={'/works'} path={path}>Works</LinkItem>
                    <WorkLink href={'https://t.me/starig'} target="_blank" path={path}>Telegram</WorkLink>
                    <WorkLink href={'https://github.com/starig'} target="_blank" path={path}>GitHub</WorkLink>
                    <WorkLink href={'https://github.com/starig/starig-website'} target="_blank" path={path}>View Source</WorkLink>
                </Stack>
                <Box flex={1} align='right'>
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options"/>
                            <MenuList>
                                <NextLink href={'/'} passHref>
                                    <MenuItem as={Link} icon={<AiFillHome />}>Homepage</MenuItem>
                                </NextLink>
                                <NextLink href={'/works'} passHref>
                                    <MenuItem as={Link} icon={<MdOutlineWork />}>Works</MenuItem>
                                </NextLink>
                                <NextLink href={'https://t.me/starig'} passHref>
                                    <MenuItem as={Link} icon={<FaTelegram />}>Telegram</MenuItem>
                                </NextLink>
                                <NextLink href={'https://github.com/starig'} passHref>
                                    <MenuItem as={Link} icon={<FaGithub />}>GitHub</MenuItem>
                                </NextLink>
                                <MenuItem as={Link} href={'https://github.com/starig/starig-website'}>View Source</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar;