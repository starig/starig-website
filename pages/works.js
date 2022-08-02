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
import {BioSkill} from "../components/bio";
import Layout from "../components/layouts/article";

const Works = () => {
    const works = [
        {
            id: 'react-pizza',
            demoUrl: `http://react-pizza.edelen.ru/`,
            title: 'React Pizza',
            thumbnail: pizzaThumbnail,
            desc: 'React Pizza курс по ReactJS.',
            skills: [
                'React',
                'TypeScript',
                'Redux-Toolkit',
            ]
        },
        {
            id: 'tellsy',
            demoUrl: `https://mozlabtreki.ru/galereya-marafonov/`,
            title: 'Tellsy',
            thumbnail: tellsyThumbnail,
            desc: 'Коммерческий проект в веб-студии Tellsy.',
            skills: [
                'Wordpress',
                'CSS',
                'Elementor',
            ]
        },
        {
            id: 'react-agency',
            demoUrl: `http://agency-test-task.edelen.ru/`,
            title: 'React Agency',
            thumbnail: agencyThumbnail,
            desc: 'Тестовое задание Agency.',
            skills: [
                'React',
                'Lazy loading',
                'Redux-Toolkit',
            ]
        },
        {
            id: 'react-beer',
            demoUrl: `https://starig.github.io/react-beer/`,
            title: 'React Beer',
            thumbnail: beerThumbnail,
            desc: 'Тестовое задание React Beer.',
            skills: [
                'React',
                'GitHub Pages',
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
                'React',
                'Google Books API',
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
                'React',
                'React Charts',
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
                'React',
                'Lazy Loading',
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
                            <WorkGridItem id={item.id} demoUrl={item.demoUrl}
                                          title={item.title}
                                          thumbnail={item.thumbnail}>{item.desc}<br />
                                {
                                    item.skills.map(skill => <BioSkill key={skill}> {skill},</BioSkill>)
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
