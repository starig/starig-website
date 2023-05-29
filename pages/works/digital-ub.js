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
        <Layout title={'Digital UB'}>
            <Container>
                <Title>
                    Digital UB <Badge>2023</Badge>
                </Title>
                <>
                    <WorkImage src={'/images/smartub.png'} alt={'Digital UB'}/>
                    <Heading as={'h4'} fontSize={24}>Стек технологий:</Heading>
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
                    <Heading as={'h4'} fontSize={24}>Про проект:</Heading>
                    <Paragraph>
                        <b>Digital UB</b> — комплексное приложение для жителей столицы. Информационно-технологическое решение, интегрирующее все остальные системы столицы и обеспечивающее полноценную связь государства и граждан в режиме реального времени.
                    </Paragraph>
                </Section>
                <List>
                    <ListItem>
                        <Meta>App Store</Meta>
                        <WorkLink href={'https://apps.apple.com/lv/app/digital-ub/id6443485509'} target="_blank">
                            App Store <ExternalLinkIcon mx={'2px'}/>
                        </WorkLink>
                    </ListItem>
                    <ListItem>
                        <Meta>Google Play Store</Meta>
                        <WorkLink href={'https://play.google.com/store/apps/details?id=com.ictgroup.smartub'} target="_blank">
                            Google Play Store <ExternalLinkIcon mx={'2px'}/>
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
