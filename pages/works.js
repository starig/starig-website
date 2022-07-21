import {Container, Heading, SimpleGrid, Divider} from "@chakra-ui/react";
import Section from "../components/section";
import {WorkGridItem} from "../components/grid-item";
import pizzaThumbnail from '../public/images/react-pizza.PNG'

const Works = () => {
    return (
        <Container>
            <Heading as={"h3"} fontSize={20} mb={4}>
                Портфолио
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id={'react-pizza'} title={'React Pizza'} thumbnail={pizzaThumbnail}>React Pizza курс
                        по ReactJS</WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works;
