import { Box, Image } from '@chakra-ui/react';
import Link from 'next/link';

export function Header(){
    return(

        <Box as="header" maxW={["375px", "1440px"]} h={["50px", "100px"]}>
            <Link href="/">
                <a href="#">
                <Image src='/image/Header.svg' alt="logomarca" />
                </a>
            </Link>
        </Box>
    )    
}