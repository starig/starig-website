import {Badge, Box, Button, Container, Heading, useColorModeValue} from "@chakra-ui/react";
import {ChevronLeftIcon} from "@chakra-ui/icons";
import {Title, WorkImage} from "../../components/work";
import Layout from "../../components/layouts/article";
import {BioSkill} from "../../components/bio";
import {Stack} from "../../components/projectStack";
import NextLink from "next/link";
import Paragraph from "../../components/paragraph";
import Section from "../../components/section";
import {useSelector} from "react-redux";
import worksTranslation from './../../public/locale/works.json';
import ProjectStatusBadge from "../../components/project-status-badge";


const Work = () => {

    const currentLocale = useSelector((state) => state.language.locale);

    return (
        <Layout title={'Digital Uvs'}>
            <Container>
                <Title>
                    Digital Uvs <Badge>2023</Badge>
                </Title>
                <Section>
                    <WorkImage src={'/images/digital-uvs.png'} alt={'Digital Uvs'}/>
                    <Heading as={'h4'} fontSize={24}>{worksTranslation[currentLocale].tech_stack}</Heading>
                    <Stack>
                        <li>
                            <BioSkill>Flutter</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Dart</BioSkill>
                        </li>
                        <li>
                            <BioSkill>BLoC (Cubit)</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Dio</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Freezed</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Clean Architecture</BioSkill>
                        </li>
                        <li>
                            <BioSkill>REST API</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Swagger</BioSkill>
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
                        <b>Digital Province</b> — {worksTranslation[currentLocale].digitalProvince.description}
                    </Paragraph>
                </Section>
                <ProjectStatusBadge/>
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
