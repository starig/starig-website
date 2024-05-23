import React, {useEffect} from 'react';
import {Box, Button, Container, Grid, GridItem, Heading, Image, useColorModeValue, useToast} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";
import {ChevronRightIcon, EmailIcon, SettingsIcon} from "@chakra-ui/icons";
import {BioSection, BioSkill, BioText, BioYear, SkillsList} from "../components/bio";
import Layout from "../components/layouts/article";
import {ContactLink} from "../components/contact-link";
import {Email} from '../components/email';
import {ICTGroup} from "../components/ictgroup";
import Timer from "../components/timer";
import {useDispatch, useSelector} from "react-redux";
import homeTranslation from './../public/locale/home.json';
import commonTranslation from './../public/locale/common.json';
import {PicnicLink} from "../components/picnic-link";
import {setToastShowed} from "../state/toast/toastSlice";


const Page = () => {
    const currentLocale = useSelector((state) => state.language.locale);
    const toastShowed = useSelector((state) => state.toast.toastShowed);
    const dispatch = useDispatch();
    const toast = useToast();


    useEffect(() => {
        if (!toastShowed) {
            toast({
                title: homeTranslation[currentLocale].tip,
                position: 'top-right',
                description: homeTranslation[currentLocale].tip_description,
                status: 'warning',
                duration: 8000,
                isClosable: true,
                icon: <SettingsIcon />,
                containerStyle: {
                    display: "flex",
                    alignContent: "center",
                },
                onCloseComplete: () => {
                    dispatch(setToastShowed());
                }
            });
        }
    }, []);

    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3}
                     align="center"
                     mb={6} mt={6}>
                    {homeTranslation[currentLocale].hello_phrase}
                </Box>
                <Grid templateColumns='repeat(2, 1fr)'>
                    <GridItem flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            {homeTranslation[currentLocale].name}
                        </Heading>
                        <p>Forever Junior Developer</p>
                        <Email>
                            <ContactLink href={'mailto:starkovivan3@gmail.com'}>
                                starkovivan3@gmail.com <EmailIcon ml={1}/></ContactLink>
                        </Email>
                    </GridItem>
                    <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align={'center'}>
                        <Image borderColor={'whiteAlpha.800'} borderWidth={2} borderStyle={'solid'}
                               maxWidth={'100px'}
                               display={'inline-block'} borderRadius='full' src={'/images/starig.jpg'}
                               alt={'Profile Image'}/>
                    </Box>
                </Grid>

                <Section>
                    <Heading as={'h3'} variant={'section-title'}>
                        {homeTranslation[currentLocale].this_site}
                    </Heading>
                    <Paragraph>
                        {homeTranslation[currentLocale].i_created_with} <BioSkill>Next.js</BioSkill>,
                        <BioSkill> Chakra UI</BioSkill> {commonTranslation[currentLocale].and}
                        <BioSkill> Three.js</BioSkill>.<br/>
                        {homeTranslation[currentLocale].u_can_meet_me}
                    </Paragraph>
                </Section>

                <Section delay={0.1}>
                    <Heading as={'h3'} variant={'section-title'}>
                        {homeTranslation[currentLocale].bt_me}
                    </Heading>
                    <BioSection>
                        <BioYear>
                            {homeTranslation[currentLocale].at13yo}
                        </BioYear>
                        <BioText>
                            {homeTranslation[currentLocale].at13yo_1}
                            <BioSkill>HTML</BioSkill>, <BioSkill>CSS</BioSkill>, <BioSkill>JavaScript</BioSkill>.
                            {homeTranslation[currentLocale].at13yo_2}
                        </BioText>
                    </BioSection>
                    <BioSection>
                        <BioYear>{homeTranslation[currentLocale].at17yo}</BioYear>
                        <BioText>
                            {homeTranslation[currentLocale].at17yo_1}<BioSkill>Figma</BioSkill>/<BioSkill>Photoshop</BioSkill>/<BioSkill>Adobe
                            Xd</BioSkill>.
                        </BioText>
                    </BioSection>
                    <BioSection>
                        <BioYear>{homeTranslation[currentLocale].at2020}</BioYear>
                        <BioText>{homeTranslation[currentLocale].at2020_1}</BioText>
                    </BioSection>
                    <BioSection>
                        <BioYear>{homeTranslation[currentLocale].at2021}</BioYear>
                        <BioText>{homeTranslation[currentLocale].at2021_1}</BioText>
                        <BioText>
                            <SkillsList>
                                <li><BioSkill>TypeScript</BioSkill></li>
                                <li><BioSkill>Next</BioSkill></li>
                                <li><BioSkill>React</BioSkill></li>
                                <li><BioSkill>Redux-Toolkit</BioSkill></li>
                                <li><BioSkill>React-Native</BioSkill></li>
                            </SkillsList>
                        </BioText>
                    </BioSection>
                    <BioSection>
                        <BioYear>{homeTranslation[currentLocale].at2022}</BioYear>
                        <BioText>{homeTranslation[currentLocale].at2022_1}
                            <ICTGroup href={'https://www.ictgroup.mn/'} target="_blank">
                                ICT Group
                            </ICTGroup>
                            {homeTranslation[currentLocale].at2022_2} </BioText>
                        <BioText>
                            <SkillsList>
                                <li><BioSkill>Dart</BioSkill></li>
                                <li><BioSkill>Flutter</BioSkill></li>
                                <li><BioSkill>BloC</BioSkill></li>
                                <li><BioSkill>Cubit</BioSkill></li>
                                <li><BioSkill>React-Native</BioSkill></li>
                                <li><BioSkill>TypeScript</BioSkill></li>
                                <li><BioSkill>Redux-Toolkit</BioSkill></li>
                            </SkillsList>
                        </BioText>
                    </BioSection>
                    <BioSection>
                        <BioYear>{homeTranslation[currentLocale].currently}</BioYear>
                        <BioText>
                            {homeTranslation[currentLocale].currently_1}
                            <PicnicLink href={'https://picnic.zone/'} target="_blank">
                                Picnic
                            </PicnicLink>
                            {homeTranslation[currentLocale].currently_2}
                            <SkillsList>
                                <li><BioSkill>Dart</BioSkill></li>
                                <li><BioSkill>Flutter</BioSkill></li>
                                <li><BioSkill>BloC</BioSkill></li>
                                <li><BioSkill>Cubit</BioSkill></li>
                                <li><BioSkill>GraphQl</BioSkill></li>
                                <li><BioSkill>Clean Architecture</BioSkill></li>
                                <li><BioSkill>DI</BioSkill></li>
                                <li><BioSkill>flutter_gen</BioSkill></li>
                            </SkillsList>
                        </BioText>
                    </BioSection>
                    <BioSection>
                        <BioYear>{homeTranslation[currentLocale].experience}</BioYear>
                        <BioText>
                            <Timer/>
                        </BioText>
                    </BioSection>
                    <Box align={'center'} my={4}>
                        <NextLink href={'/works'}>
                            <Button rightIcon={<ChevronRightIcon/>}
                                    bg={useColorModeValue('#F56565', '#E53E3E')}
                                    _hover={{backgroundColor: useColorModeValue('#f53737', '#414141')}}>
                                {homeTranslation[currentLocale].my_works}
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page;
