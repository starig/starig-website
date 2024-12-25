import {Badge, Box, Button, Container, Heading, List, ListItem, useColorModeValue} from "@chakra-ui/react";
import {ChevronLeftIcon, ExternalLinkIcon} from "@chakra-ui/icons";
import {Meta, Title, WorkImage} from "../../components/work";
import Layout from "../../components/layouts/article";
import WorkLink from "../../components/work-link";
import {BioSkill} from "../../components/bio";
import {Stack} from "../../components/projectStack";
import NextLink from "next/link";
import Paragraph from "../../components/paragraph";
import Section from "../../components/section";
import worksTranslation from './../../public/locale/works.json';
import {useSelector} from "react-redux";

const Work = () => {
    const currentLocale = useSelector((state) => state.language.locale);

    return (
        <Layout title={'Tadpole'}>
            <Container>
                <Title>
                    Tadpole <Badge>2024</Badge>
                </Title>
                <>
                    <WorkImage src={'/images/tadpole.png'} alt={'Tadpole'}/>
                    <Heading as={'h4'} fontSize={24}>{worksTranslation[currentLocale].tech_stack}</Heading>
                    <Stack>
                        <li>
                            <BioSkill>Angular</BioSkill>
                        </li>
                        <li>
                            <BioSkill>TypeScript</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Rest API</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Clean Architecture</BioSkill>
                        </li>
                        <li>
                            <BioSkill>DI</BioSkill>
                        </li>
                    </Stack>
                </>
                <Section>
                    <Heading as={'h4'} fontSize={24}>{worksTranslation[currentLocale].about_project}</Heading>
                    <Paragraph>
                        <b>Corgi</b> — {worksTranslation[currentLocale].tadpole.description}
                    </Paragraph>
                </Section>
                <List>
                    <ListItem>
                        <Meta>Website</Meta>
                        <WorkLink href={'https://www.tadpole.so/'} target="_blank">
                            Landing page <ExternalLinkIcon mx={'2px'}/>
                        </WorkLink>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <WorkLink href={'https://app.tadpole.so/'} target="_blank">
                            Dashboard <ExternalLinkIcon mx={'2px'}/>
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
