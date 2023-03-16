import {Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Section from "../components/section";
import {WorkGridItem} from "../components/grid-item";
import pizzaThumbnail from '../public/images/react-pizza.png';
import tellsyThumbnail from '../public/images/tellsy.png';
import agencyThumbnail from '../public/images/agency.png';
import libraryThumbnail from '../public/images/library.png';
import pinterestThumbnail from '../public/images/pinterest.png';
import justiceThumbnail from '../public/images/justice.png';
import beerThumbnail from '../public/images/react-beer.png';
import aviasalesThumbnail from '../public/images/aviasales.png';
import chestAIThumbnail from '../public/images/chest-ai.png';
import swaggerThumbnail from '../public/images/starig-swagger.png'
import deckThumbnail from '../public/images/starig-deck.png';
import digitalUvsThumbnail from '../public/images/digital-uvs.png';
import {BioSkill} from "../components/bio";
import Layout from "../components/layouts/article";

const Works = () => {
    const works = [
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
            id: 'digital-uvs',
            // productUrl: `https://apps.apple.com/ru/app/%D0%B4%D0%B8%D0%B6%D0%B8%D1%82%D0%B0%D0%BB-%D0%B0%D0%B9%D0%BC%D0%B0%D0%B3-%D1%83%D0%B2%D1%81/id1629887689?l=en`,
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
            id: 'tellsy',
            productUrl: `https://mozlabtreki.ru/galereya-marafonov/`,
            title: 'Tellsy',
            thumbnail: tellsyThumbnail,
            desc: 'Коммерческий проект в веб-студии Tellsy.',
            skills: [
                'Wordpress,',
                'CSS,',
                'Elementor',
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
            id: 'starig-aviasales',
            demoUrl: `https://starig.github.io/starig-aviasales/`,
            title: 'starig aviasales',
            thumbnail: aviasalesThumbnail,
            desc: 'Тестовое задание Starig Aviasales.',
            skills: [
                'React,',
                'Redux-Toolkit,',
                'TypeScript',
            ]
        },
        {
            id: 'starig-swagger',
            demoUrl: `https://starig.github.io/starig-swagger/`,
            title: 'starig swagger',
            thumbnail: swaggerThumbnail,
            desc: 'Тестовое задание Starig Swagger.',
            skills: [
                'React,',
                'Redux-Toolkit,',
                'TypeScript',
            ]
        },
        {
            id: 'react-agency',
            demoUrl: `http://agency-test-task.edelen.ru/`,
            title: 'React Agency',
            thumbnail: agencyThumbnail,
            desc: 'Тестовое задание Agency.',
            skills: [
                'React,',
                'Lazy loading,',
                'Redux-Toolkit,',
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
            id: 'react-library',
            demoUrl: `http://react-library.edelen.ru/`,
            title: 'React Library',
            thumbnail: libraryThumbnail,
            desc: 'Тестовое задание React Library.',
            skills: [
                'React,',
                'Google Books API,',
                'Sort/Filter',
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
        {
            id: 'cat-pinterest',
            demoUrl: `http://cat-pinterest.edelen.ru/`,
            title: 'Cat Pinterest',
            thumbnail: pinterestThumbnail,
            desc: 'Тестовое задание Cat Pinterest.',
            skills: [
                'React,',
                'Lazy Loading,',
                'useContext',
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
