import React from 'react';
import {Box, Container, Heading} from "@chakra-ui/react";

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} align="center" mb={6}>
                Hello, I&apos;m a frontend developer based in Russian Federation!
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Ivan Starkov
                    </Heading>
                    <p>Forever junior programmer (Artist / Developer / Software engineer)</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page;