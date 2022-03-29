import { Container, Badge, Link,List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage,Meta } from "../../components/project";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";


const Project = () => {
    return (
        <Layout title="Premium Gas Predict">
            <Container>
                <Title>
                    Premium Gas Predict <Badge>2021</Badge>
                </Title>
                <Paragraph>
                    Linear regression prediction of premium gas price of given regular gas price.
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
                        <Link href="https://github.com/mevans64/gas-predictions-linear">
                            Premium Gas Prediction <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                </List>

                <ProjectImage src={"/thumbGasPredict.png"} alt="Gas Price Predict"/>
            </Container>
        </Layout>
    )
}

export default Project