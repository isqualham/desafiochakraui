// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

import {Box, Text} from "@chakra-ui/react";

import styles from "./sliders.module.css"
import Link from "next/link";

interface ContientsSlideProps{    
    data:{ 
        uid: string;       
        title: string;
        subtitle: string;
        slider: string
    }[],
}
  

export function ContientsSlide({data}:ContientsSlideProps){
    return(
        <Box mt={["1em","2rem"]} mb={["1em","2rem"]} w={["300pz","1240px"]} mx="auto">
            <Swiper navigation={true} modules={[Navigation]} className={styles.swiper}>
                {
                    data.map(post => (
                        <SwiperSlide key={post.uid}>
                            <Link href={`/post/${post.uid}`}>
                                <a href="#">
                                    <Box
                                        w={["375px","1240px"]} 
                                        h={["200px","450px"]}
                                        as="section"                                        
                                        backgroundImage={post.slider}                                        
                                    >
                                        <Text 
                                            fontSize={["2em","7rem"]} 
                                            fontWeight="bold" 
                                            textAlign="center"
                                            pt={["1.5em","8rem"]}
                                            color="white"
                                        >
                                            {post.title}
                                        </Text>
                                        <Text 
                                            fontSize={["1.5em","3rem"]} textAlign="center"
                                            color="white"
                                        >
                                            {post.subtitle}
                                        </Text>
                                    </Box>
                                </a> 
                            </Link>                                          
                        </SwiperSlide>
                    ))
                }                             
            </Swiper>
        </Box>
    )    
}


        

