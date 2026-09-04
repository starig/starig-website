import {
    Badge,
    Box,
    Button,
    Container,
    Heading,
    ListItem,
    UnorderedList,
    useColorModeValue
} from "@chakra-ui/react";
import {ChevronLeftIcon} from "@chakra-ui/icons";
import {Title, WorkImage} from "../../components/work";
import Layout from "../../components/layouts/article";
import {BioSkill} from "../../components/bio";
import {Stack} from "../../components/projectStack";
import NextLink from "next/link";
import Paragraph from "../../components/paragraph";
import Section from "../../components/section";
import worksTranslation from './../../public/locale/works.json';
import {useSelector} from "react-redux";
import ProjectStatusBadge from "../../components/project-status-badge";
import DownloadCountBadge from "../../components/download-count-badge";

const Work = () => {
    const currentLocale = useSelector((state) => state.language.locale);

    return (
        <Layout title={'Newtify'}>
            <Container>
                <Title>
                    Newtify <Badge>2025</Badge>
                </Title>
                <Section>
                    <WorkImage src={'/images/newtify.png'} alt={'Newtify'}/>
                    <Heading as={'h4'} fontSize={24}>{worksTranslation[currentLocale].tech_stack}</Heading>
                    <Stack>
                        <li>
                            <BioSkill>Dart</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Flutter</BioSkill>
                        </li>
                        <li>
                            <BioSkill>BLoC</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Retrofit</BioSkill>
                        </li>
                        <li>
                            <BioSkill>DI</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Appodeal</BioSkill>
                        </li>
                    </Stack>
                </Section>
                <Section>
                    <Heading as={'h4'} fontSize={24}>{worksTranslation[currentLocale].platforms}</Heading>
                    <Paragraph>
                        <Badge>iOS</Badge> <Badge>Android</Badge>
                    </Paragraph>
                </Section>
                <Section>
                    <Heading as={'h4'} fontSize={24}>{worksTranslation[currentLocale].about_project}</Heading>
                    <Paragraph>
                        <b>Newtify</b> — {worksTranslation[currentLocale].newtify.description}
                    </Paragraph>
                </Section>
                <Section>
                    <Heading as={'h4'} fontSize={24}>{worksTranslation[currentLocale].my_role}</Heading>
                    <Paragraph>
                        {worksTranslation[currentLocale].newtify.role.description}
                    </Paragraph>
                    <UnorderedList spacing={2} pl={4} fontSize={18}>
                        {
                            worksTranslation[currentLocale].newtify.role.achievements.map((achievement) => (
                                <ListItem key={achievement}>
                                    {achievement}
                                </ListItem>
                            ))
                        }
                    </UnorderedList>
                </Section>
                <Box display={'flex'} alignItems={'center'} gap={2} flexWrap={'wrap'}>
                    <ProjectStatusBadge/>
                    <DownloadCountBadge count={'45k+'}/>
                </Box>
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
