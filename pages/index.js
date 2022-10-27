import React from 'react';
import {Box, Button, Container, Grid, GridItem, Heading, Image, useColorModeValue} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";
import {ChevronRightIcon, EmailIcon} from "@chakra-ui/icons";
import {BioSection, BioSkill, BioText, BioYear, SkillsList} from "../components/bio";
import Layout from "../components/layouts/article";
import {ContactLink} from "../components/contact-link";
import {Email} from '../components/email';


const Page = () => {

    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3}
                     align="center"
                     mb={6} mt={6}>
                    Привет, Я Frontend React разработчик из России!
                </Box>
                <Grid templateColumns='repeat(2, 1fr)'>
                    <GridItem flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Иван Старков
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
                        Этот сайт
                    </Heading>
                    <Paragraph>
                        Я создал с помощью <BioSkill>Next.js</BioSkill>,
                        <BioSkill> Chakra UI</BioSkill> и <BioSkill> Three.js</BioSkill>.<br/>
                        Здесь Вы можете познакомиться со мной, как с Frontend разработчиком.
                    </Paragraph>
                </Section>

                <Section delay={0.1}>
                    <Heading as={'h3'} variant={'section-title'}>
                        Обо мне
                    </Heading>
                    <BioSection>
                        <BioYear>
                            В 13 лет
                        </BioYear>
                        <BioText>
                            Увлёкся web-разработкой.
                            Познакомился
                            с <BioSkill>HTML</BioSkill>, <BioSkill>CSS</BioSkill>, <BioSkill>JavaScript</BioSkill>.
                            Решал простые задачки (создавал калькулятор, таймер, работал с API Yandex Maps).
                        </BioText>
                    </BioSection>
                    <BioSection>
                        <BioYear>В 17 лет</BioYear>
                        <BioText>
                            Начал активно изучать вёрстку. Познакомился с CSS библиотеками
                            (<BioSkill>Bootstrap</BioSkill> и
                            др.).
                            Начал работать с <BioSkill>Figma</BioSkill>/<BioSkill>Photoshop</BioSkill>/<BioSkill>Adobe
                            Xd</BioSkill>.
                        </BioText>
                    </BioSection>
                    <BioSection>
                        <BioYear>В 18 лет</BioYear>
                        <BioText>
                            После сдачи ЕГЭ, поступил в <b>Университет ИТМО</b> в Санкт-Петербурге. На
                            факультет <b>Программная инженерия</b>, специальность <b>Нейротехнологии и
                            программирование</b>.
                            На первом курсе университета занялся frontend разработкой. Начал проходить курсы
                            по <BioSkill>React</BioSkill>. Появился большой интерес к этой сфере. В октябре этого же
                            года
                            устролся верстальшиком в веб-студию в <b>Москве</b>.
                        </BioText>
                    </BioSection>
                    <BioSection>
                        <BioYear>В настоящее время</BioYear>
                        <BioText>
                            учу <BioSkill>React</BioSkill>. Уже хорошо знаком со следующими технологиями:
                            <SkillsList>
                                <li><BioSkill>TypeScript</BioSkill></li>
                                <li><BioSkill>Next.js</BioSkill></li>
                                <li><BioSkill>Redux-Toolkit</BioSkill></li>
                                <li><BioSkill>React Hooks</BioSkill></li>
                                <li><BioSkill>React Router</BioSkill></li>
                                <li><BioSkill>React Skeleton</BioSkill></li>
                                <li><BioSkill>Loadash</BioSkill></li>
                                <li><BioSkill>Axios</BioSkill></li>
                                <li><BioSkill>npm</BioSkill></li>
                                <li><BioSkill>CSS Modules</BioSkill></li>
                                <li><BioSkill>SASS </BioSkill>(<BioSkill>SCSS</BioSkill>)</li>
                                <li><BioSkill>Git</BioSkill></li>
                            </SkillsList>
                            В планах выучить или начал учить:
                            <SkillsList>
                                <li><BioSkill>React Native</BioSkill></li>
                                <li><BioSkill>Node.js</BioSkill></li>
                                <li><BioSkill>Redux-Thunk</BioSkill></li>
                                <li><BioSkill>Webpack</BioSkill></li>
                            </SkillsList>
                        </BioText>
                    </BioSection>
                    <Box align={'center'} my={4}>
                        <NextLink href={'/works'}>
                            <Button rightIcon={<ChevronRightIcon/>}
                                    bg={useColorModeValue('#F56565', '#E53E3E')}
                                    _hover={{backgroundColor: useColorModeValue('#f53737', '#414141')}}>
                                Мои работы
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page;