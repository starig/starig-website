import React from 'react';
import {Box, Button, Container, Heading, Image, useColorModeValue} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {ContactLink} from "../components/contact-link";
import {BioSection, BioSkill, BioText, BioYear, SkillsList} from "../components/bio";

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center"
                 mb={6}>
                Привет, Я Frontend разработчик из России!
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Иван Старков
                    </Heading>
                    <p>Forever Junior developer</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align={'center'}>
                    <Image borderColor={'whiteAlpha.800'} borderWidth={2} borderStyle={'solid'}
                           maxWidth={'100px'}
                           display={'inline-block'} borderRadius='full' src={'/images/starig.jpg'}
                           alt={'Profile Image'}/>
                </Box>
            </Box>

            <Section>
                <Heading as={'h3'} variant={'section-title'}>
                    Этот сайт
                </Heading>
                <Paragraph>
                    Создан с помощью <BioSkill>Next.js</BioSkill>,
                    <BioSkill> Chakra UI</BioSkill>,
                    <BioSkill> Framer Motion</BioSkill> и
                    <BioSkill> Three.js</BioSkill>. <br/>
                    На этом сайте Вы можете познакомиться со мной, как с Frontend разработчиком.
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
                        Активно увлекся вёрсткой. Познакомился с CSS библиотеками (<BioSkill>Bootstrap</BioSkill> и
                        др.).
                        Начал работать с <BioSkill>Figma</BioSkill>/<BioSkill>Photoshop</BioSkill>/<BioSkill>Adobe
                        Xd</BioSkill>.
                    </BioText>
                </BioSection>
                <BioSection>
                    <BioYear>В 18 лет</BioYear>
                    <BioText>
                        После сдачи ЕГЭ, поступил в <b>Университет ИТМО</b> в Санкт-Петербурге. На
                        факультет <b>Программная инженерия</b>, специальность <b>Нейротехнологии и программирование</b>.
                        На первом курсе университета увлёкся frontend разработкой. Начал проходить курсы
                        по <BioSkill>React</BioSkill>. Появился большой интерес к этой сфере. В октябре этого же года
                        устролся верстальшиком в веб-студию в <b>Москве</b>.
                    </BioText>
                </BioSection>
                <BioSection>
                    <BioYear>В настоящее время</BioYear>
                    <BioText>
                        Активно изучаю <BioSkill>React</BioSkill>. Уже хорошо знаком со следующими технологиями:
                        <SkillsList>
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
                            <li><BioSkill>TypeScript</BioSkill></li>
                            <li><BioSkill>Next.js</BioSkill></li>
                            <li><BioSkill>Node.js</BioSkill></li>
                            <li><BioSkill>Redux-Thunk</BioSkill></li>
                            <li><BioSkill>E2E Testing/Unit Testing</BioSkill></li>
                            <li><BioSkill>Webpack</BioSkill></li>
                        </SkillsList>
                    </BioText>
                </BioSection>
                <Box align={'center'} my={4}>
                    <NextLink href={'/works'}>
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme='teal'>
                            Мои работы
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.3}>
                <Heading as={'h3'} variant={'section-title'}>
                    Контакты
                </Heading>
                <Paragraph>
                    <ContactLink href={'https://github.com/starig'} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </ContactLink>
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page;