import {Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Section from "../components/section";
import {WorkGridItem} from "../components/grid-item";
import pizzaThumbnail from '../public/images/react-pizza.png';
import tellsyThumbnail from '../public/images/tellsy.png';
import agencyThumbnail from '../public/images/agency.png';
import libraryThumbnail from '../public/images/library.png';
import pinterestThumbnail from '../public/images/pinterest.png';
import justiceThumbnail from '../public/images/justice.png';
import {BioSkill} from "../components/bio";
import Layout from "../components/layouts/article";

const Works = () => {

    return (
        <Layout>
            <Container>
                <Heading as={"h3"} fontSize={20} mb={4}>
                    Портфолио
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id={'react-pizza'} demoUrl={`http://react-pizza.edelen.ru/`} title={'React Pizza'}
                                      thumbnail={pizzaThumbnail}>React Pizza курс по ReactJS.<br />
                            <BioSkill> React</BioSkill>,
                            <BioSkill> TypeScript</BioSkill>,
                            <BioSkill> Redux-Toolkit</BioSkill>.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id={'tellsy'} demoUrl={`https://mozlabtreki.ru/galereya-marafonov/`}
                                      title={'Tellsy'}
                                      thumbnail={tellsyThumbnail}>Коммерческий проект в веб-студии Tellsy.<br />
                            <BioSkill> Wordpress</BioSkill>,
                            <BioSkill> CSS</BioSkill>,
                            <BioSkill> Elementor</BioSkill>.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id={'react-agency'} demoUrl={`http://agency-test-task.edelen.ru/`} title={'React Agency'}
                                      thumbnail={agencyThumbnail}>Тестовое задание Agency.<br />
                            <BioSkill> React</BioSkill>,
                            <BioSkill> Lazy loading</BioSkill>,
                            <BioSkill> Redux-Toolkit</BioSkill>.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id={'react-library'} demoUrl={`http://react-library.edelen.ru/`}
                                      title={'React Library'}
                                      thumbnail={libraryThumbnail}>Тестовое задание React Library.<br />
                            <BioSkill> React</BioSkill>,
                            <BioSkill> Google Books API</BioSkill>,
                            <BioSkill> Sort/Filter</BioSkill>.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id={'react-justice'} demoUrl={`http://justice-crm.edelen.ru/`}
                                      title={'Justice CRM'}
                                      thumbnail={justiceThumbnail}>Тестовое задание Justice CRM.<br />
                            <BioSkill> React</BioSkill>,
                            <BioSkill> React Charts</BioSkill>,
                            <BioSkill> Redux</BioSkill>.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id={'cat-pinterest'} demoUrl={`http://cat-pinterest.edelen.ru//`}
                                      title={'Cat Pinterest'}
                                      thumbnail={pinterestThumbnail}>Тестовое задание Cat Pinterest.<br />
                            <BioSkill> React</BioSkill>,
                            <BioSkill> Lazy loading</BioSkill>,
                            <BioSkill> useContext</BioSkill>.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works;
