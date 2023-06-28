import React from 'react';
import {
    Box,
    Container,
    Flex,
    Heading,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList, Popover, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger,
    Stack,
    useColorModeValue
} from "@chakra-ui/react";
import NextLink from 'next/link';
import Logo from "./logo";
import {HamburgerIcon, SettingsIcon} from "@chakra-ui/icons";
import ThemeToggleButton from "../components/theme-toggle-button";
import WorkLink from "./work-link";
import {AiFillHome} from "react-icons/ai";
import {MdOutlineWork} from "react-icons/md";
import {FaGithub, FaTelegram} from "react-icons/fa";
import DownloadCvButton from "./download-cv-button";
import LanguageToggleButton from "./language-toggle-button";
import {useSelector} from "react-redux";
import commonTranslation from "./../public/locale/common.json";

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
    const {path} = props;
    const currentLocale = useSelector((state) => state.language.locale);


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
                    <WorkLink href={'https://github.com/starig/starig-website'} target="_blank" path={path}>View
                        Source</WorkLink>
                </Stack>
                <Box flex={1} align='right'>
                    <Stack direction={{base: 'column', md: 'row'}} display={{base: 'none', md: 'flex'}}>
                        <DownloadCvButton text={true}/>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton aria-label={'Toggle theme'}
                                            colorScheme={useColorModeValue('purple', 'orange')}
                                            icon={<SettingsIcon/>}
                                            onClick={() => {
                                            }}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent bg={useColorModeValue('#f0e7db', '#202023')}
                                            borderColor={useColorModeValue('#736d6d', null)}
                                            maxWidth="200px" boxShadow="0px 4px 6px rgba(0, 0, 0, 0.4)">
                                <PopoverHeader pt={4} fontWeight='bold' border='0'>
                                    <Flex justify={'center'}>
                                        {commonTranslation[currentLocale].settings}
                                    </Flex>
                                </PopoverHeader>
                                <PopoverBody>
                                    <Flex justify="space-evenly">
                                        <ThemeToggleButton/>
                                        <LanguageToggleButton/>
                                    </Flex>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </Stack>
                    <Box display={{base: 'flex', md: 'none'}} justifyContent={'end'} gap={2}>
                        <DownloadCvButton text={false}/>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton aria-label={'Toggle theme'}
                                            colorScheme={useColorModeValue('purple', 'orange')}
                                            icon={<SettingsIcon/>}
                                            onClick={() => {
                                            }}></IconButton>
                            </PopoverTrigger>
                            <PopoverContent bg={useColorModeValue('#f0e7db', '#202023')}
                                            borderColor={useColorModeValue('#736d6d', null)}
                                            maxWidth="200px" boxShadow="0px 4px 6px rgba(0, 0, 0, 0.4)">
                                <PopoverHeader pt={4} fontWeight='bold' border='0'>
                                    <Flex justify={'center'}>
                                        Settings
                                    </Flex>
                                </PopoverHeader>
                                <PopoverBody>
                                    <Flex justify="space-evenly">
                                        <ThemeToggleButton/>
                                        <LanguageToggleButton/>
                                    </Flex>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                            <Menu>
                                <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant="outline"
                                            aria-label="Options"/>
                                <MenuList>
                                    <NextLink href={'/'} passHref>
                                        <MenuItem as={Link} icon={<AiFillHome/>}>Homepage</MenuItem>
                                    </NextLink>
                                    <NextLink href={'/works'} passHref>
                                        <MenuItem as={Link} icon={<MdOutlineWork/>}>Works</MenuItem>
                                    </NextLink>
                                    <NextLink href={'https://t.me/starig'} passHref>
                                        <MenuItem as={Link} icon={<FaTelegram/>}>Telegram</MenuItem>
                                    </NextLink>
                                    <NextLink href={'https://github.com/starig'} passHref>
                                        <MenuItem as={Link} icon={<FaGithub/>}>GitHub</MenuItem>
                                    </NextLink>
                                    <MenuItem as={Link} href={'https://github.com/starig/starig-website'}>View
                                        Source</MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar;
