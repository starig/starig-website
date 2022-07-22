import {Badge, Container, Heading, List, ListItem} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Meta, Title, WorkImage} from "../../components/work";
import Layout from "../../components/layouts/article";
import WorkLink from "../../components/work-link";
import {BioSkill} from "../../components/bio";
import {Stack} from "../../components/projectStack";

const Work = () => {
    return (
        <Layout title={'React Library'}>
            <Container>
                <Title>
                    React Library <Badge>2022</Badge>
                </Title>
                <>
                    <WorkImage src={'/images/library.png'} alt={'React Library'} />
                    <Heading as={'h4'} fontSize={24}>Стек технологий:</Heading>
                    <Stack>
                        <li>
                            <BioSkill>React 18</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Google Books API</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Lazy loading</BioSkill>
                        </li>
                        <li>
                            <BioSkill>React Router</BioSkill>
                        </li>
                        <li>
                            <BioSkill>React Hook</BioSkill>
                        </li>
                        <li>
                            <BioSkill>CSS-Modules / SCSS</BioSkill>
                        </li>
                    </Stack>
                </>
                <List>
                    <ListItem>
                        <Meta>Website</Meta>
                        <WorkLink href={'http://react-library.edelen.ru/'} target="_blank">
                            http://react-library.edelen.ru/ <ExternalLinkIcon mx={'2px'} />
                        </WorkLink>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub repository</Meta>
                        <WorkLink href={'https://github.com/starig/react-library'} target="_blank">
                            https://github.com/starig/react-library <ExternalLinkIcon mx={'2px'} />
                        </WorkLink>
                    </ListItem>
                </List>

            </Container>
        </Layout>
    )
}

export default Work