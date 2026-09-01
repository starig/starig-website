import {Badge, Box, Button, Container, Heading, useColorModeValue} from "@chakra-ui/react";
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
        <Layout title={'Picnic'}>
            <Container>
                <Title>
                    Picnic <Badge>2023</Badge>
                </Title>
                <Section>
                    <WorkImage src={'/images/picnic.png'} alt={'Picnic App'}/>
                    <Heading as={'h4'} fontSize={24}>{worksTranslation[currentLocale].tech_stack}</Heading>
                    <Stack>
                        <li>
                            <BioSkill>Flutter</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Dart</BioSkill>
                        </li>
                        <li>
                            <BioSkill>BloC (Cubit)</BioSkill>
                        </li>
                        <li>
                            <BioSkill>dio</BioSkill>
                        </li>
                        <li>
                            <BioSkill>flutter_gen</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Clean Architecture</BioSkill>
                        </li>
                        <li>
                            <BioSkill>GraphQl</BioSkill>
                        </li>
                        <li>
                            <BioSkill>DI</BioSkill>
                        </li>
                    </Stack>
                </Section>
                <Section>
                    <Heading as={'h4'} fontSize={24}>{worksTranslation[currentLocale].platforms}</Heading>
                    <Paragraph>
                        <Badge>iOS</Badge> <Badge>Android</Badge> <Badge>Web</Badge>
                    </Paragraph>
                </Section>
                <Section>
                    <Heading as={'h4'} fontSize={24}>{worksTranslation[currentLocale].about_project}</Heading>
                    <Paragraph>
                        <b>Picnic</b> — {worksTranslation[currentLocale].picnic.description}
                    </Paragraph>
                </Section>
                <Box display={'flex'} alignItems={'center'} gap={2} flexWrap={'wrap'}>
                    <ProjectStatusBadge/>
                    <DownloadCountBadge count={'2M+'}/>
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
