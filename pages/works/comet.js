import {Badge, Box, Button, Container, Heading, useColorModeValue} from "@chakra-ui/react";
import {ChevronLeftIcon} from "@chakra-ui/icons";
import {Title, WorkVideo} from "../../components/work";
import Layout from "../../components/layouts/article";
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
        <Layout title={'Comet'}>
            <Container>
                <Title>
                    Comet <Badge>2023-2024</Badge>
                </Title>
                <>
                    <WorkVideo
                        src={'https://6h4j6b6j67es6lxu.public.blob.vercel-storage.com/comet-sLeXBpbehegQJAQtKIpvDmu0NJ0DSZ.mp4'}
                        alt={'Comet'}/>
                    <Heading as={'h4'} fontSize={24}>{worksTranslation[currentLocale].tech_stack}</Heading>
                    <Stack>
                        <li>
                            <BioSkill>Swift</BioSkill>
                        </li>
                        <li>
                            <BioSkill>SwiftUI</BioSkill>
                        </li>
                        <li>
                            <BioSkill>MVVM</BioSkill>
                        </li>
                        <li>
                            <BioSkill>GraphQl</BioSkill>
                        </li>
                        <li>
                            <BioSkill>SceneKit</BioSkill>
                        </li>
                    </Stack>
                </>
                <Section>
                    <Heading as={'h4'} fontSize={24}>{worksTranslation[currentLocale].about_project}</Heading>
                    <Paragraph>
                        <b>Comet</b> — {worksTranslation[currentLocale].comet.description}
                    </Paragraph>
                </Section>
                {/*<List>*/}
                {/*    <ListItem>*/}
                {/*        <Meta>App Store</Meta>*/}
                {/*        <WorkLink href={'https://apps.apple.com/lv/app/digital-ub/id6443485509'} target="_blank">*/}
                {/*            App Store <ExternalLinkIcon mx={'2px'}/>*/}
                {/*        </WorkLink>*/}
                {/*    </ListItem>*/}
                {/*    <ListItem>*/}
                {/*        <Meta>Google Play Store</Meta>*/}
                {/*        <WorkLink href={'https://play.google.com/store/apps/details?id=com.ictgroup.smartub'} target="_blank">*/}
                {/*            Google Play Store <ExternalLinkIcon mx={'2px'}/>*/}
                {/*        </WorkLink>*/}
                {/*    </ListItem>*/}
                {/*</List>*/}
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
