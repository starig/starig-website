import {Badge, Box, Button, Container, Heading, List, ListItem, useColorModeValue} from "@chakra-ui/react";
import {ChevronLeftIcon, ExternalLinkIcon} from "@chakra-ui/icons";
import {Meta, Title, WorkImage} from "../../components/work";
import Layout from "../../components/layouts/article";
import {BioSkill} from "../../components/bio";
import {Stack} from "../../components/projectStack";
import NextLink from "next/link";
import Paragraph from "../../components/paragraph";
import Section from "../../components/section";
import worksTranslation from "../../public/locale/works.json";
import commonTranslation from "../../public/locale/common.json";
import {useSelector} from "react-redux";
import WorkLink from "../../components/work-link";

const technologies = [
    'Flutter & Dart',
    'Backend-Driven UI',
    'WebSocket',
    'BLoC / Cubit',
    'REST API · Dio · Retrofit',
    'GetIt & Injectable',
    'GoRouter',
    'Firebase Cloud Messaging',
    'AppMetrica & MyTracker'
];

const Work = () => {
    const currentLocale = useSelector((state) => state.language.locale);
    const translation = worksTranslation[currentLocale];
    const project = translation.sporta;

    return (
        <Layout title={project.title}>
            <Container>
                <Title>
                    {project.title} <Badge>2026</Badge>
                </Title>
                <Section>
                    <WorkImage src={'/images/sporta.png'} alt={project.coverAlt}/>
                    <Heading as={'h4'} fontSize={24}>{translation.tech_stack}</Heading>
                    <Stack>
                        {technologies.map((technology) => (
                            <li key={technology}>
                                <BioSkill>{technology}</BioSkill>
                            </li>
                        ))}
                    </Stack>
                </Section>
                <Section>
                    <Heading as={'h4'} fontSize={24}>{translation.platforms}</Heading>
                    <Paragraph>
                        <Badge>iOS</Badge> <Badge>Android</Badge>
                    </Paragraph>
                </Section>
                <Section>
                    <Heading as={'h4'} fontSize={24}>{translation.about_project}</Heading>
                    <Paragraph>
                        <b>{project.title}</b> — {project.description}
                    </Paragraph>
                    <Paragraph>{project.details}</Paragraph>
                </Section>
                <Section>
                    <Heading as={'h4'} fontSize={24}>{translation.my_role}</Heading>
                    {project.role.map((paragraph) => (
                        <Paragraph key={paragraph}>{paragraph}</Paragraph>
                    ))}
                </Section>
                <List>
                    <ListItem>
                        <Meta>{commonTranslation[currentLocale].site}</Meta>
                        <WorkLink href={'https://app.sporta.ru/'} target="_blank" rel="noopener noreferrer">
                            {commonTranslation[currentLocale].site} <ExternalLinkIcon mx={'2px'}/>
                        </WorkLink>
                    </ListItem>
                    <ListItem>
                        <Meta>iOS</Meta>
                        <WorkLink href={'https://apps.apple.com/rs/app/%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%B0-%D0%BC%D0%B0%D1%82%D1%87%D0%B8-%D0%B8-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE/id6801591972'} target="_blank" rel="noopener noreferrer">
                            App Store <ExternalLinkIcon mx={'2px'}/>
                        </WorkLink>
                    </ListItem>
                    <ListItem>
                        <Meta>Android</Meta>
                        <WorkLink href={'https://play.google.com/store/apps/details?id=ru.sporta.app'} target="_blank" rel="noopener noreferrer">
                            Google Play <ExternalLinkIcon mx={'2px'}/>
                        </WorkLink>
                    </ListItem>
                </List>
                <Box align={'center'} my={4}>
                    <NextLink href={'/works'}>
                        <Button leftIcon={<ChevronLeftIcon/>}
                                bg={useColorModeValue('#F56565', '#E53E3E')}
                                _hover={{backgroundColor: useColorModeValue('#f53737', '#414141')}}>
                            {translation.goBack}
                        </Button>
                    </NextLink>
                </Box>
            </Container>
        </Layout>
    )
}

export default Work
