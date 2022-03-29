import { Box, Grid, GridItem, Text } from "@chakra-ui/react";


interface BodyContinentProps{    
    data:{ 
        uid: string;       
        title: string;
        subtitle: string;
        image: string;        
        description: string;
        contry: number;
        language: number;
        city: number;
                   
    }    
}

export function BodyContinent({data}: BodyContinentProps){
    return(
        <Box
             as="section"
             maxW="1090px"
             mx="auto"            
             mt="5em"
             
            >
                <Grid templateColumns='repeat(4, 1fr)' gap={4} alignItems="center">
                    <GridItem w="600px">
                        <Text textAlign="justify">
                            {data.description}
                        </Text>
                    </GridItem>
                    <GridItem textAlign="center">
                        <Text 
                            fontSize="3em" 
                            color={'yellow.500'}
                            fontWeight="bold"
                            >
                                {data.contry}
                        </Text>
                        <Text>países</Text>
                    </GridItem> 

                    <GridItem textAlign="center">
                        <Text 
                            fontSize="3em" 
                            color={'yellow.500'}
                            fontWeight="bold"
                            >
                                {data.language}
                        </Text>
                        <Text>línguas</Text>
                    </GridItem>             

                    <GridItem textAlign="center">
                        <Text 
                            fontSize="3em" 
                            color={'yellow.500'}
                            fontWeight="bold"
                            >
                                {data.city}
                        </Text>
                        <Text>cidades</Text>
                    </GridItem>

                </Grid>              

            </Box>
    )
}