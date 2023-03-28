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
        <Layout title={'Digital Uvs'}>
            <Container>
                <Title>
                    Digital Uvs <Badge>2023</Badge>
                </Title>
                <>
                    <WorkImage src={'/images/digital-uvs.png'} alt={'Digital Uvs'}/>
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
                        <b>Digital Province</b> — это ряд мобильных сервисов для монгольсих провинций. В каждой провинции
                        будет платформа, которая содержит множество сервисов и функций для упрощения удовлетворения
                        повседневных потребностей.
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
                        <WorkLink href={'https://play.google.com/store/apps/details?id=com.ict.digital_province_khovd'} target="_blank">
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
