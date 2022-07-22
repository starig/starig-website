import {Badge, Container, Heading, List, ListItem} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Meta, Title, WorkImage} from "../../components/work";
import Layout from "../../components/layouts/article";
import WorkLink from "../../components/work-link";
import {BioSkill} from "../../components/bio";
import {Stack} from "../../components/projectStack";

const Work = () => {
    return (
        <Layout title={'Cat Pinterest'}>
            <Container>
                <Title>
                    Cat Pinterest <Badge>2022</Badge>
                </Title>
                <>
                    <WorkImage src={'/images/pinterest.png'} alt={'Cat Pinterest'} />
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
                            http://cat-pinterest.edelen.ru/ <ExternalLinkIcon mx={'2px'} />
                        </WorkLink>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub repository</Meta>
                        <WorkLink href={'https://github.com/starig/frontend-challenge'} target="_blank">
                            https://github.com/starig/frontend-challenge <ExternalLinkIcon mx={'2px'} />
                        </WorkLink>
                    </ListItem>
                </List>

            </Container>
        </Layout>
    )
}

export default Work