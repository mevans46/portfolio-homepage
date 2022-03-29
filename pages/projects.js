import { Container,Box,Heading, SimpleGrid,Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { ProjectGridItem } from "../components/grid-item";
import thumbQrypt from '../public/thumbQrypt.png'
import thumbGradientDescent from '../public/thumbGradientDescent.png'
import thumbGasPredict from '../public/thumbGasPredict.png'

const Projects = () => {
    return(
        <Container>
            <Heading as={"h3"} fontSize={20} mb={4}>
                Projects
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.2}>
                    <ProjectGridItem id={"qrypt"} title={"Qrypt"} thumbnail={thumbQrypt}>
                        Crypto prediction app with tools to allow you to decide on your next investment.
                    </ProjectGridItem>
                </Section>
                <Section delay={0.2}>
                <ProjectGridItem id={"gradientdescent"} title={"Gradient Descent Implementation"} thumbnail={thumbGradientDescent}>
                        Gradient descent function / implementation in python using the numpy library.
                    </ProjectGridItem>
                </Section>
                <Section delay={0.2}>
                <ProjectGridItem id={"gaspricepredict"} title={"Premium Gas Predict"} thumbnail={thumbGasPredict}>
                        Predict the premium gas price based on what the price of regular gas is.
                    </ProjectGridItem>
                </Section>
                
            </SimpleGrid>
        </Container>
    )
}


export default Projects