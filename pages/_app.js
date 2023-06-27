import {ChakraProvider} from "@chakra-ui/react";
import Layout from '../components/layouts/main';
import React from 'react';
import theme from "../libs/theme";
import Fonts from '../components/fonts';
import { Analytics } from '@vercel/analytics/react';
import {Provider} from "react-redux";
import store from "../state/store";

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}

const Website = ({Component, pageProps, router}) => {
    return (
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <Analytics />
                <Fonts/>
                <Layout router={router}>
                    <Component {...pageProps} key={router.route}/>
                </Layout>
            </ChakraProvider>
        </Provider>
    )
}

export default Website;
