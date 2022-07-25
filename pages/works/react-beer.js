import {Badge, Container, Heading, List, ListItem} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Meta, Title, WorkImage} from "../../components/work";
import Layout from "../../components/layouts/article";
import WorkLink from "../../components/work-link";
import {BioSkill} from "../../components/bio";
import {Stack} from "../../components/projectStack";

const Work = () => {
    return (
        <Layout title={'React Beer'}>
            <Container>
                <Title>
                    React Beer <Badge>2022</Badge>
                </Title>
                <>
                    <WorkImage src={'/images/react-beer.png'} alt={'React Beer'} />
                    <Heading as={'h4'} fontSize={24}>Стек технологий:</Heading>
                    <Stack>
                        <li>
                            <BioSkill>React 18</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Redux-Toolkit</BioSkill>
                        </li>
                        <li>
                            <BioSkill>React Hooks</BioSkill>
                        </li>
                        <li>
                            <BioSkill>React Router</BioSkill>
                        </li>
                        <li>
                            <BioSkill>GitHub Pages</BioSkill>
                        </li>
                        <li>
                            <BioSkill>CSS-Modules / SCSS</BioSkill>
                        </li>
                    </Stack>
                </>
                <List>
                    <ListItem>
                        <Meta>Website</Meta>
                        <WorkLink href={'https://starig.github.io/react-beer/'} target="_blank">
                            https://starig.github.io/react-beer/ <ExternalLinkIcon mx={'2px'} />
                        </WorkLink>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub repository</Meta>
                        <WorkLink href={'https://github.com/starig/react-beer'} target="_blank">
                            https://github.com/starig/react-beer <ExternalLinkIcon mx={'2px'} />
                        </WorkLink>
                    </ListItem>
                </List>

            </Container>
        </Layout>
    )
}

export default Work