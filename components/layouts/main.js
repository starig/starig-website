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
                <meta name='title' content='Ivan Starkov'/>
                <meta name="description"
                      content="Иван Старков - Гений, миллиардер, плейбой, филантроп. Один из лучших программистов мира согласно исследованиям за 2023 год."/>
                <meta name='keywords' content={'starig, STARIG, Starkov Ivan, Старков Иван, Старков, frontend, flutter developer, flutter mobile, Иван Старков, иван старков, старков иван'}/>
                <meta name="google-site-verification" content="L3A06pEhVNAFLonseNimA_xYExquRnbAeu3oqGkiORM"/>
                <title>Иван Старков - Homepage</title>
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
