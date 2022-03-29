import { Container, Badge, Link,List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage,Meta } from "../../components/project";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";


const Project = () => {
    return (
        <Layout title="Gradient Descent Implementation">
            <Container>
                <Title>
                    Gradient Descent Implementation <Badge>2021</Badge>
                </Title>
                <Paragraph>
                    A simple gradient descent implementation in python using the numpy library.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platforms</Meta>
                        <span>Universal - Python 3.8</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Tech Stack</Meta>
                        <span>Python</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href="https://github.com/mevans64/gradient-descent">
                            Gradient Descent <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                </List>

                <ProjectImage src={"/thumbGradientDescent.png"} alt="Gradient Descent"/>
            </Container>
        </Layout>
    )
}

export default Project