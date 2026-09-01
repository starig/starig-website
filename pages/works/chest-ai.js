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
        <Layout title={'Chest AI'}>
            <Container>
                <Title>
                    Chest AI <Badge>2022</Badge>
                </Title>
                <>
                    <WorkImage src={'/images/chest-ai.png'} alt={'Chest-AI'}/>
                    <Heading as={'h4'} fontSize={24}>{worksTranslation[currentLocale].tech_stack}</Heading>
                    <Stack>
                        <li>
                            <BioSkill>React 18</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Next</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Material UI</BioSkill>
                        </li>
                    </Stack>
                </>
                <Section>
                    <Heading as={'h4'} fontSize={24}>{worksTranslation[currentLocale].about_project}</Heading>
                    <Paragraph>
                        <b>Chest AI</b> — {worksTranslation[currentLocale].chestAi.description}
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
