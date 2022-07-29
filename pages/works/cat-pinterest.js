import {Badge, Box, Button, Container, Heading, List, ListItem, useColorModeValue} from "@chakra-ui/react";
import {ChevronLeftIcon, ExternalLinkIcon} from "@chakra-ui/icons";
import {Meta, Title, WorkImage} from "../../components/work";
import Layout from "../../components/layouts/article";
import WorkLink from "../../components/work-link";
import {BioSkill} from "../../components/bio";
import {Stack} from "../../components/projectStack";
import NextLink from "next/link";

const Work = () => {
    return (
        <Layout title={'Cat Pinterest'}>
            <Container>
                <Title>
                    Cat Pinterest <Badge>2022</Badge>
                </Title>
                <>
                    <WorkImage src={'/images/pinterest.png'} alt={'Cat Pinterest'}/>
                    <Heading as={'h4'} fontSize={24}>Стек технологий:</Heading>
                    <Stack>
                        <li>
                            <BioSkill>React 18</BioSkill>
                        </li>
                        <li>
                            <BioSkill>useContext</BioSkill>
                        </li>
                        <li>
                            <BioSkill>React Router v6</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Axios</BioSkill>
                        </li>
                        <li>
                            <BioSkill>React Hook</BioSkill>
                        </li>
                        <li>
                            <BioSkill>CSS-Modules / SCSS</BioSkill>
                        </li>
                        <li>
                            <BioSkill>React Skeleton</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Lazy loading</BioSkill>
                        </li>
                    </Stack>
                </>
                <List>
                    <ListItem>
                        <Meta>Website</Meta>
                        <WorkLink href={'http://cat-pinterest.edelen.ru/'} target="_blank">
                            http://cat-pinterest.edelen.ru/ <ExternalLinkIcon mx={'2px'}/>
                        </WorkLink>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub repository</Meta>
                        <WorkLink href={'https://github.com/starig/frontend-challenge'} target="_blank">
                            https://github.com/starig/frontend-challenge <ExternalLinkIcon mx={'2px'}/>
                        </WorkLink>
                    </ListItem>
                </List>
                <Box align={'center'} my={4}>
                    <NextLink href={'/works'}>
                        <Button leftIcon={<ChevronLeftIcon/>}
                                bg={useColorModeValue('#F56565', '#E53E3E')}
                                _hover={{backgroundColor: useColorModeValue('#f53737', '#414141')}}>
                            Вернуться назад
                        </Button>
                    </NextLink>
                </Box>
            </Container>
        </Layout>
    )
}

export default Work