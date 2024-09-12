import {Box, Button, Container, Heading, SimpleGrid, useColorModeValue} from "@chakra-ui/react";
import Section from "../components/section";
import {WorkGridItem} from "../components/grid-item";
import chestAIThumbnail from '../public/images/chest-ai.png';
import digitalUvsThumbnail from '../public/images/digital-uvs.png';
import digitalUBThumbnail from '../public/images/smartub.png';
import picnicThumbnail from '../public/images/picnic.png';
import {BioSkill} from "../components/bio";
import Layout from "../components/layouts/article";
import {useSelector} from "react-redux";
import worksTranslation from "../public/locale/works.json";
import NextLink from "next/link";
import {ChevronLeftIcon} from "@chakra-ui/icons";

const Works = () => {
    const currentLocale = useSelector((state) => state.language.locale);

    const works = [
        {
            id: 'picnic',
            title: 'Picnic',
            thumbnail: picnicThumbnail,
            desc: worksTranslation[currentLocale].picnic.subtitle,
            skills: [
                'Flutter,',
                'Dart,',
                'BloC',
            ]
        },

        {
            id: 'digital-uvs',
            title: 'Digital Province',
            thumbnail: digitalUvsThumbnail,
            desc: worksTranslation[currentLocale].digitalProvince.subtitle,
            skills: [
                'Flutter,',
                'Dart,',
                'BloC',
            ]
        },
        {
            id: 'digital-ub',
            title: 'Digital UB',
            thumbnail: digitalUBThumbnail,
            desc: worksTranslation[currentLocale].digitalUb.subtitle,
            skills: [
                'Flutter,',
                'Dart,',
                'BloC',
            ]
        },
        {
            id: 'chest-ai',
            productUrl: `https://chest-ai.khamuga.com/`,
            title: 'Chest-AI',
            thumbnail: chestAIThumbnail,
            desc: worksTranslation[currentLocale].chestAi.subtitle,
            skills: [
                'React,',
                'Next,',
                'MUI',
            ]
        }
    ]
    return (
        <Layout>
            <Container>
                <Heading as={"h3"} fontSize={20} mb={4}>
                    {worksTranslation[currentLocale].portfolio}
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    {
                        works.map(item => <Section key={item.id}>
                            <WorkGridItem id={item.id} demoUrl={item.demoUrl} productUrl={item.productUrl}
                                          title={item.title}
                                          thumbnail={item.thumbnail}>{item.desc}<br />
                                {
                                    item.skills.map(skill => <BioSkill key={skill}> {skill}</BioSkill>)
                                }
                            </WorkGridItem>
                        </Section>)
                    }
                </SimpleGrid>
                <Box align={'center'} my={4}>
                    <NextLink href={'/'}>
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

export default Works;
