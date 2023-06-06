import {Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Section from "../components/section";
import {WorkGridItem} from "../components/grid-item";
import pizzaThumbnail from '../public/images/react-pizza.png';
import justiceThumbnail from '../public/images/justice.png';
import beerThumbnail from '../public/images/react-beer.png';
import chestAIThumbnail from '../public/images/chest-ai.png';
import deckThumbnail from '../public/images/starig-desk.png';
import digitalUvsThumbnail from '../public/images/digital-uvs.png';
import digitalUBThumbnail from '../public/images/smartub.png';
import {BioSkill} from "../components/bio";
import Layout from "../components/layouts/article";

const Works = () => {
    const works = [
        {
            id: 'digital-ub',
            title: 'Digital UB',
            thumbnail: digitalUBThumbnail,
            desc: 'Коммерческий проект в компании ICT Group.',
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
            desc: 'Коммерческий проект в компании ICT Group.',
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
            desc: 'Коммерческий проект в компании ICT Group.',
            skills: [
                'React,',
                'Next,',
                'MUI',
            ]
        },
        {
            id: 'react-pizza',
            demoUrl: `http://react-pizza.edelen.ru/`,
            title: 'React Pizza',
            thumbnail: pizzaThumbnail,
            desc: 'React Pizza курс по ReactJS.',
            skills: [
                'React,',
                'TypeScript,',
                'Redux-Toolkit',
            ]
        },
        {
            id: 'starig-deck',
            demoUrl: `https://starig.github.io/starig-deck/`,
            title: 'starig deck',
            thumbnail: deckThumbnail,
            desc: 'Тестовое задание Starig Deck.',
            skills: [
                'React,',
                'Redux-Toolkit,',
                'TypeScript',
            ]
        },
        {
            id: 'react-beer',
            demoUrl: `https://starig.github.io/react-beer/`,
            title: 'React Beer',
            thumbnail: beerThumbnail,
            desc: 'Тестовое задание React Beer.',
            skills: [
                'React,',
                'GitHub Pages,',
                'Redux-Toolkit',
            ]
        },
        {
            id: 'react-justice',
            demoUrl: `http://justice-crm.edelen.ru/`,
            title: 'Justice CRM',
            thumbnail: justiceThumbnail,
            desc: 'Тестовое задание Justice CRM.',
            skills: [
                'React,',
                'React Charts,',
                'Redux',
            ]
        },
    ]
    return (
        <Layout>
            <Container>
                <Heading as={"h3"} fontSize={20} mb={4}>
                    Портфолио
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
            </Container>
        </Layout>
    )
}

export default Works;
