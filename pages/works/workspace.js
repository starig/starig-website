import {Badge, Box, Button, Container, Heading, List, ListItem, useColorModeValue} from "@chakra-ui/react";
import {ChevronLeftIcon, ExternalLinkIcon} from "@chakra-ui/icons";
import {Meta, Title, WorkVideo} from "../../components/work";
import Layout from "../../components/layouts/article";
import {BioSkill} from "../../components/bio";
import {Stack} from "../../components/projectStack";
import NextLink from "next/link";
import Paragraph from "../../components/paragraph";
import Section from "../../components/section";
import worksTranslation from './../../public/locale/works.json';
import {useSelector} from "react-redux";
import WorkLink from "../../components/work-link";

const Work = () => {
    const currentLocale = useSelector((state) => state.language.locale);

    return (
        <Layout title={'Workspace'}>
            <Container>
                <Title>
                    Workspace <Badge>2025-2026</Badge>
                </Title>
                <Section>
                    <WorkVideo
                        src={'https://6h4j6b6j67es6lxu.public.blob.vercel-storage.com/short_blured.mp4'}
                        alt={'Workspace'}/>
                    <Heading as={'h4'} fontSize={24}>{worksTranslation[currentLocale].tech_stack}</Heading>
                    <Stack>
                        <li>
                            <BioSkill>Dart</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Flutter</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Clean Architecture</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Bloc (Cubit)</BioSkill>
                        </li>
                        <li>
                            <BioSkill>getIt + Injectable</BioSkill>
                        </li>
                        <li>
                            <BioSkill>drift</BioSkill>
                        </li>
                        <li>
                            <BioSkill>go_router</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Dio + Retrofit</BioSkill>
                        </li>
                        <li>
                            <BioSkill>media_kit</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Rest API (Zulip API)</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Long Polling</BioSkill>
                        </li>
                    </Stack>
                </Section>
                <Section>
                    <Heading as={'h4'} fontSize={24}>{worksTranslation[currentLocale].platforms}</Heading>
                    <Paragraph>
                        <Badge>iOS</Badge> <Badge>Android</Badge> <Badge>macOS</Badge> <Badge>Windows</Badge> <Badge>Linux</Badge> <Badge>Web</Badge>
                    </Paragraph>
                </Section>
                <Section>
                    <Heading as={'h4'} fontSize={24}>{worksTranslation[currentLocale].about_project}</Heading>
                    <Paragraph>
                        <b>Workspace</b> — {worksTranslation[currentLocale].workspace.description}
                    </Paragraph>
                </Section>
                <List>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <WorkLink href={'https://github.com/infraguys/genesis_workspace'} target="_blank">
                            Source Repository <ExternalLinkIcon mx={'2px'}/>
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
