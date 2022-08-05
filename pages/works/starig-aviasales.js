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
        <Layout title={'Starig Aviasales'}>
            <Container>
                <Title>
                    starig aviasales <Badge>2022</Badge>
                </Title>
                <>
                    <WorkImage src={'/images/aviasales.png'} alt={'starig-aviasales'}/>
                    <Heading as={'h4'} fontSize={24}>Стек технологий:</Heading>
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
                            <BioSkill>React Hook</BioSkill>
                        </li>
                        <li>
                            <BioSkill>CSS-Modules / SCSS</BioSkill>
                        </li>
                        <li>
                            <BioSkill>GitHub Pages</BioSkill>
                        </li>

                    </Stack>
                </>
                <List>
                    <ListItem>
                        <Meta>Website</Meta>
                        <WorkLink href={'https://starig.github.io/starig-aviasales/'} target="_blank">
                            https://starig.github.io/starig-aviasales/ <ExternalLinkIcon mx={'2px'}/>
                        </WorkLink>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub repository</Meta>
                        <WorkLink href={'https://github.com/starig/starig-aviasales'} target="_blank">
                            https://github.com/starig/starig-aviasales <ExternalLinkIcon mx={'2px'}/>
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