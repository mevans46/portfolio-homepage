import { Container, Badge, Link,List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage,Meta } from "../../components/project";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";


const Project = () => {
    return (
        <Layout title="Qrypt">
            <Container>
                <Title>
                    Qrypt <Badge>2022</Badge>
                </Title>
                <Paragraph>
                    A crypto app with many tools to help you.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="/projects/qrypt">
                            Qrypt - Coming Soon <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platforms</Meta>
                        <span>Any platorm - Based on the web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Tech Stack</Meta>
                        <span>Python, ReactJS</span>
                    </ListItem>
                </List>

                <ProjectImage src={"/thumbQrypt.png"} alt="Qrypt"/>
            </Container>
        </Layout>
    )
}

export default Project