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
import {useSelector} from "react-redux";
import worksTranslation from './../../public/locale/works.json';


const Work = () => {

    const currentLocale = useSelector((state) => state.language.locale);

    return (
        <Layout title={'Digital Uvs'}>
            <Container>
                <Title>
                    Digital Uvs <Badge>2023</Badge>
                </Title>
                <>
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
                            <BioSkill>BloC</BioSkill>
                        </li>
                    </Stack>
                </>
                <Section>
                    <Heading as={'h4'} fontSize={24}>{worksTranslation[currentLocale].about_project}:</Heading>
                    <Paragraph>
                        <b>Digital Province</b> — {worksTranslation[currentLocale].digitalProvince.description}
                    </Paragraph>
                </Section>
                <List>
                    <ListItem>
                        <Meta>App Store</Meta>
                        <WorkLink href={'https://apps.apple.com/ru/app/%D0%B4%D0%B8%D0%B6%D0%B8%D1%82%D0%B0%D0%BB-%D0%B0%D0%B9%D0%BC%D0%B0%D0%B3-%D1%83%D0%B2%D1%81/id1629887689?l=en'} target="_blank">
                            App Store <ExternalLinkIcon mx={'2px'}/>
                        </WorkLink>
                    </ListItem>
                    <ListItem>
                        <Meta>Google Play Store</Meta>
                        <WorkLink href={'https://play.google.com/store/apps/details?id=com.ict.digital_province_uvs'} target="_blank">
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
