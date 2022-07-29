import {Badge, Box, Button, Container, Heading, List, ListItem, useColorModeValue} from "@chakra-ui/react";
import {ChevronLeftIcon, ExternalLinkIcon} from "@chakra-ui/icons";
import {Meta, Title, WorkImage} from "../../components/work";
import Layout from "../../components/layouts/article";
import WorkLink from "../../components/work-link";
import {BioSkill} from "../../components/bio";
import {Stack} from "../../components/projectStack";
import NextLink from "next/link";

const Work = () => {
    return (
        <Layout title={'Tellsy'}>
            <Container>
                <Title>
                    Tellsy <Badge>2020-2021</Badge>
                </Title>
                <>
                    <WorkImage src={'/images/tellsy.png'} alt={'Tellsy'}/>
                    <Heading as={'h4'} fontSize={24}>Стек технологий:</Heading>
                    <Stack>
                        <li>
                            <BioSkill>CSS</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Wordpress</BioSkill>
                        </li>
                        <li>
                            <BioSkill>Elementor</BioSkill>
                        </li>
                    </Stack>
                </>
                <List>
                    <ListItem>
                        <Meta>Website</Meta>
                        <WorkLink href={'https://mozlabtreki.ru/galereya-marafonov/'} target="_blank">
                            https://mozlabtreki.ru/galereya-marafonov/ <ExternalLinkIcon mx={'2px'}/>
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