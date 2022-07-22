import {Badge, Container, Heading, List, ListItem} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Meta, Title, WorkImage} from "../../components/work";
import Layout from "../../components/layouts/article";
import WorkLink from "../../components/work-link";
import {BioSkill} from "../../components/bio";
import {Stack} from "../../components/projectStack";

const Work = () => {
    return (
        <Layout title={'Tellsy'}>
            <Container>
                <Title>
                    Tellsy <Badge>2020-2021</Badge>
                </Title>
                <>
                    <WorkImage src={'/images/tellsy.png'} alt={'Tellsy'} />
                    <Heading as={'h4'} fontSize={24}>Стек технологий:</Heading>
                    <Stack>
                        <li>
                            <BioSkill>CSS</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Wordpress</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Elementor</BioSkill>
                        </li>
                    </Stack>
                </>
                <List>
                    <ListItem>
                        <Meta>Website</Meta>
                        <WorkLink href={'https://mozlabtreki.ru/galereya-marafonov/'} target="_blank">
                            https://mozlabtreki.ru/galereya-marafonov/ <ExternalLinkIcon mx={'2px'} />
                        </WorkLink>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Work