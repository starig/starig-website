import React from 'react'
import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'
import Navbar from '../navbar'
import VoxelDog from '../voxel-dog'
import NoSsr from '../no-ssr'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width-device-width, initial-scale=1"/>
                <meta
                    name="description"
                    content="Starkov Ivan Website"
                />
                <meta name="google-site-verification" content="L3A06pEhVNAFLonseNimA_xYExquRnbAeu3oqGkiORM"/>
                <title>Ivan Starkov - Homepage</title>
            </Head>

            <Navbar path={router.asPath}/>

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <VoxelDog/>
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main;