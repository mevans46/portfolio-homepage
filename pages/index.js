import { Container, Box, Heading, Link, Button, List, ListItem, Icon } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import NextLink from 'next/link'
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection,BioYear } from "../components/bio"
import {IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'

const Page = () => {
    return (
        <Container>
            <br/>
            <Section delay={0.1}>
                <Box flexGrow={1} align="center">
                    <Heading as="h2" variant={"page-title"}>
                        Matt Evans
                    </Heading>
                    <p>Artificial Intelligence Major</p>
                </Box>
            <br/>
            </Section>
            <Section delay={0.2}>
                <Heading as={"h3"} variant="section-title">
                    About me
                </Heading>
                <Paragraph>
                    Currently working on a crypto site called <NextLink href={"/projects/qrypt"}><Link>Qrypt</Link></NextLink>.
                </Paragraph>
                <Box align={"center"} my={4}>
                    <NextLink href={"/projects"}>
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme={"teal"}>
                            Projects
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <br/>
            <Section delay={0.3}>
                <Heading as={"h3"} variant={"section-title"}>
                    Timeline
                </Heading>
                <BioSection>
                    <BioYear>2000</BioYear>
                 Born in Chicago, Illinois.
                </BioSection>
                <BioSection>
                    <BioYear>2016</BioYear>
                    Moved to Arizona.
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Graduated High School.
                </BioSection>
                
                <BioSection>
                    <BioYear>2019 - Present</BioYear>
                    Working on B.S in Artificial Intelligence from University of Advancing Technology.
                </BioSection>
                <BioSection>
                    <BioYear>2022 - Present</BioYear>
                    Working on Qrypt.
                </BioSection>
            </Section>
            <br/>
            <Section delay={0.4}>
                <Heading as={"h3"} variant={"section-title"}>
                    Hobbies
                </Heading>
                <Paragraph>
                    Machine Learning, Motorcycles, Music.
                </Paragraph>
            </Section>
        <Section delay={0.5}>
            <Heading as="h3" variant={"section-title"}>
                Links
            </Heading>
            <List>
                <ListItem>
                    <Link href="https://github.com/mevans64" target={"_blank"}>
                        <Button variant={"ghost"} colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>@mevans64</Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.linkedin.com/in/matt-evans-675463194" target={"_blank"}>
                        <Button variant={"ghost"} colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin}/>}>Matt Evans</Button>
                    </Link>
                </ListItem>
            </List>
        </Section>
        </Container>
    )
}

export default Page