import NextLink from 'next/link'
import {
    Box,
    Heading,
    Container,
    Divider,
    Button,
    Text, useColorModeValue
} from "@chakra-ui/react";


const NotFound = () => {
    return (
        <Container>
            <Heading as={'h3'} >Not found</Heading>
            <Text>Страницы, на которую Вы пытаетесь перейти, не существует.</Text>
            <Divider my={6} />

            <Box my={6} align={'center'}>
                <NextLink href={'/'}>
                    <Button bg={useColorModeValue('#F56565', '#E53E3E')}
                            _hover={{backgroundColor: useColorModeValue('#f53737', '#414141')}}>Вернуться на главную</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound;
