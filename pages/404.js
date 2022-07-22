import NextLink from 'next/link'
import {
    Box,
    Heading,
    Container,
    Divider,
    Button,
    Text
} from "@chakra-ui/react";


const NotFound = () => {
    return (
        <Container>
            <Heading as={'h1'}>Not found</Heading>
            <Text>Страницы, на которую Вы пытаетесь перейти, не существует.</Text>
            <Divider my={6} />

            <Box my={6} align={'center'}>
                <NextLink href={'/'}>
                    <Button colorScheme={'teal'}>Вернуться на главную</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound;