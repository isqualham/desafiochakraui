import { Box, Text } from "@chakra-ui/react";

interface HeaderContinentProps{    
    data:{       
        title: string;
        image: string; 
    } 
} 

export function HeaderContinent({data}: HeaderContinentProps){
    return(
        <Box
                w="1440px"
                h="500px"
                as="section"
                no-repeat
                backgroundImage={data.image}
                mx="auto"
            >
                <Text 
                    fontSize="2rem" 
                    fontWeight="bold"
                    pt="13em"
                    pl="2em"
                    color="white"
                >
                    {data.title}
                </Text>
            </Box>
    )
}