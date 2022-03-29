import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button } from '@chakra-ui/react'
import VoxelModel from '../components/voxel-model'
import NoSsr from '../components/no-ssr'
import Section from '../components/section'

const NotFound= () => {
    return (
        <Container>
            <Section delay={0.2}>
            <NoSsr>
                    <VoxelModel/>
                </NoSsr>
            <Heading as={"h1"}>Not Found</Heading>
            <Text>The page you are trying to reach was not found.</Text>
            <Divider my={6}/>
            <Box my={6} align="center">
                <NextLink href={'/'}>
                    <Button colorScheme={"teal"}>Return Home</Button>
                </NextLink>
            </Box>
            </Section>
        </Container>
    )
}

export default NotFound