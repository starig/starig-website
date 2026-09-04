import React from 'react'
import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'
import Navbar from '../navbar'
import VoxelDog from '../voxel-dog'
import NoSsr from '../no-ssr'
import {useSelector} from "react-redux";
import commonTranslation from "../../public/locale/common.json";

const Main = ({children, router}) => {
    const currentLocale = useSelector((state) => state.language.locale);

    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width-device-width, initial-scale=1"/>
                <meta name='title' content={commonTranslation[currentLocale].seoTitle}/>
                <meta name="description"
                      content={commonTranslation[currentLocale].seoDescription}/>
                <meta name='keywords' content={'starig, STARIG, Starkov Ivan, Старков Иван, Старков, frontend, flutter developer, flutter mobile, Иван Старков, иван старков, старков иван, flutter разработчик, флаттер разработчик'}/>
                <meta name="google-site-verification" content="L3A06pEhVNAFLonseNimA_xYExquRnbAeu3oqGkiORM"/>
                <title>{commonTranslation[currentLocale].seoTitle}</title>
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
