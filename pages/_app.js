import {ChakraProvider} from "@chakra-ui/react";
import Layout from '../components/layouts/main';
import React from 'react';
import theme from "../libs/theme";
import Fonts from '../components/fonts';
import { Analytics } from '@vercel/analytics/react';

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}

const Website = ({Component, pageProps, router}) => {
    return (
        <ChakraProvider theme={theme}>
            <Analytics />
            <Fonts/>
            <Layout router={router}>
                <Component {...pageProps} key={router.route}/>
            </Layout>
        </ChakraProvider>
    )
}

export default Website;
