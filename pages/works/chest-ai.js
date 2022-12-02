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

const Work = () => {
    return (
        <Layout title={'Chest AI'}>
            <Container>
                <Title>
                    Chest AI <Badge>2022</Badge>
                </Title>
                <>
                    <WorkImage src={'/images/chest-ai.png'} alt={'Chest-AI'}/>
                    <Heading as={'h4'} fontSize={24}>Стек технологий:</Heading>
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
                    <Heading as={'h4'} fontSize={24}>Про проект:</Heading>
                    <Paragraph>
                        <b>Chest AI</b> — это первый в Монголии продукт на основе искусственного интеллекта для обнаружения
                        патологических изменений в рентгеновских изображениях грудной клетки на основе данных
                        рентгенографии грудной клетки в Монголии.
                    </Paragraph>
                </Section>
                <List>
                    <ListItem>
                        <Meta>Website</Meta>
                        <WorkLink href={'https://chest-ai.khamuga.com/'} target="_blank">
                            https://chest-ai.khamuga.com/ <ExternalLinkIcon mx={'2px'}/>
                        </WorkLink>
                    </ListItem>
                </List>
                <Box align={'center'} my={4}>
                    <NextLink href={'/works'}>
                        <Button leftIcon={<ChevronLeftIcon/>}
                                bg={useColorModeValue('#F56565', '#E53E3E')}
                                _hover={{backgroundColor: useColorModeValue('#f53737', '#414141')}}>
                            Вернуться назад
                        </Button>
                    </NextLink>
                </Box>
            </Container>
        </Layout>
    )
}

export default Work