import Link from "next/link";
import Image from "next/image";
import { Text,useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover ico {
        transform: rotate(20deg);
    }
`


const Logo = () => {
    const router = useRouter().pathname === "/"
    //const footPrintImg = `/images/footprint${useColorModeValue('','-dark')}.png`
    return (
        <Link href={"/"}>
            <a>
                <LogoBox>
                    <ChevronRightIcon w={4} h={4}/>
                    {/*<Image src={footPrintImg} width={20} height={20} alt="logo" />*/}
                    <Text 
                        color={useColorModeValue('gray.800','whiteAlpha.900')}
                        fontFamily={"M PLUS Rounded 1c"}
                        fontWeight={"bold"}
                        ml={3}>
                           {router ? <Text>M . E</Text> : <Text>Matt Evans</Text>}
                        </Text>

                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo