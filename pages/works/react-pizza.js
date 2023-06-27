import {Badge, Box, Button, Container, Heading, List, ListItem, useColorModeValue} from "@chakra-ui/react";
import {ChevronLeftIcon, ExternalLinkIcon} from "@chakra-ui/icons";
import {Meta, Title, WorkImage} from "../../components/work";
import Layout from "../../components/layouts/article";
import WorkLink from "../../components/work-link";
import {BioSkill} from "../../components/bio";
import {Stack} from "../../components/projectStack";
import NextLink from "next/link";
import {useSelector} from "react-redux";
import worksTranslation from './../../public/locale/works.json';


const Work = () => {
    const currentLocale = useSelector((state) => state.language.locale);

    return (
        <Layout title={'React Pizza'}>
            <Container>
                <Title>
                    React Pizza <Badge>2022</Badge>
                </Title>
                <>
                    <WorkImage src={'/images/react-pizza.png'} alt={'react pizza'}/>
                    <Heading as={'h4'} fontSize={24}>{worksTranslation[currentLocale].tech_stack}</Heading>
                    <Stack>
                        <li>
                            <BioSkill>React 18</BioSkill>
                        </li>
                        <li>
                            <BioSkill>TypeScript</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Redux Toolkit</BioSkill>
                        </li>
                        <li>
                            <BioSkill>React Router v6</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Axios + Fetch</BioSkill>
                        </li>
                        <li>
                            <BioSkill>React Hook</BioSkill>
                        </li>
                        <li>
                            <BioSkill>CSS-Modules / SCSS</BioSkill>
                        </li>
                        <li>
                            <BioSkill>React Pagination</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Lodash.Debounce</BioSkill>
                        </li>
                        <li>
                            <BioSkill>useWhyDidYouUpdate</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Prettier</BioSkill>
                        </li>

                    </Stack>
                </>
                <List>
                    <ListItem>
                        <Meta>Website</Meta>
                        <WorkLink href={'http://react-pizza.edelen.ru/'} target="_blank">
                            http://react-pizza.edelen.ru/ <ExternalLinkIcon mx={'2px'}/>
                        </WorkLink>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub repository</Meta>
                        <WorkLink href={'https://github.com/starig/react-pizza'} target="_blank">
                            https://github.com/starig/react-pizza <ExternalLinkIcon mx={'2px'}/>
                        </WorkLink>
                    </ListItem>
                </List>
                <Box align={'center'} my={4}>
                    <NextLink href={'/works'}>
                        <Button leftIcon={<ChevronLeftIcon/>}
                                bg={useColorModeValue('#F56565', '#E53E3E')}
                                _hover={{backgroundColor: useColorModeValue('#f53737', '#414141')}}>
                            {worksTranslation[currentLocale].goBack}
                        </Button>
                    </NextLink>
                </Box>
            </Container>
        </Layout>
    )
}

export default Work
