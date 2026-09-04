import NextLink from 'next/link'
import {
    Box,
    Heading,
    Container,
    Divider,
    Button,
    Text, useColorModeValue
} from "@chakra-ui/react";
import {useSelector} from "react-redux";
import commonTranslation from "../public/locale/common.json";


const NotFound = () => {
    const currentLocale = useSelector((state) => state.language.locale);

    return (
        <Container>
            <Heading as={'h3'}>{commonTranslation[currentLocale].notFoundTitle}</Heading>
            <Text>{commonTranslation[currentLocale].notFoundDescription}</Text>
            <Divider my={6} />

            <Box my={6} align={'center'}>
                <NextLink href={'/'}>
                    <Button bg={useColorModeValue('#F56565', '#E53E3E')}
                            _hover={{backgroundColor: useColorModeValue('#f53737', '#414141')}}>
                        {commonTranslation[currentLocale].backHome}
                    </Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound;
