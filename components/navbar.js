import React from 'react';
import {Box, Container, Flex, Heading, useColorModeValue} from "@chakra-ui/react";
import NextLink from 'next/link';
import Link from "next/link";
import Logo from "./logo";

const LinkItem = ({ href, path, children }) => {
    const active = path == href;
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link p={2}
                  bg={active ? 'glassTeal' : undefined}
                  color={active ? '#202023' : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

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
                        <Logo />
                    </Heading>
                </Flex>
            </Container>
        </Box>
    )
}

export default Navbar;