import { Box, Grid, GridItem, Text, Image, Flex } from "@chakra-ui/react";

interface TopCitiesContinentProps{    
    data:{         
        content:{
            title: string;
            subtitle: string;
            image: string;
            flag: string;
        }[],                   
    }    
}

export function TopCitiesContinent({data} : TopCitiesContinentProps){
    return(
        <Box
             as="section"
             w="1060px"            
             mx="auto"            
             mt="3em"
             
            >
            <Text fontSize="2em" color={'gray.500'}>Top Cidade!!!</Text>

            <Grid templateColumns='repeat(4, 1fr)' mt="3em">

                { 
                    data.content.map(item =>(
                        <GridItem w="250px" mb="2em" key={item.title} mr="5em">
                            <Image src={item.image} alt={item.title} />
                            <Flex 
                                align="center"                                 
                                bg="white"
                            >
                                <Box ml="1em">
                                    <Text fontSize="1.5em" mt="0.75em" pb="0.35em">{item.title}</Text>                    
                                    <Text color={"gray.600"} pb="1em">{item.subtitle}</Text>
                                </Box>
                                <Image 
                                    src={item.flag} 
                                    w="30px" h="30px"                                    
                                    borderRadius="1em"
                                    ml="2em"                                   
                                />
                            </Flex>
                            
                        </GridItem>
                    ))
                }                
                
            </Grid>
                
        </Box>
    )

}
