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
        <Layout title={'Picnic'}>
            <Container>
                <Title>
                    Picnic <Badge>2023</Badge>
                </Title>
                <>
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
                </>
                <Section>
                    <Heading as={'h4'} fontSize={24}>{worksTranslation[currentLocale].about_project}</Heading>
                    <Paragraph>
                        <b>Picnic</b> — {worksTranslation[currentLocale].picnic.description}
                    </Paragraph>
                </Section>
                <List>
                    <ListItem>
                        <Meta>App Store</Meta>
                        <WorkLink href={'https://apps.apple.com/ua/app/picnic-dive-into-communities/id1544626265'} target="_blank">
                            App Store <ExternalLinkIcon mx={'2px'}/>
                        </WorkLink>
                    </ListItem>
                    <ListItem>
                        <Meta>Google Play Store</Meta>
                        <WorkLink href={'https://play.google.com/store/apps/details?id=com.ambertech.amber&hl=ru&gl=US'} target="_blank">
                            Google Play Store <ExternalLinkIcon mx={'2px'}/>
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
