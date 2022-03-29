import { Box, Image, Text, Center } from '@chakra-ui/react';
import { Banner } from "../components/Banner";
import { ContientsSlide } from '../components/ContinentsSlide';
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";


//prismic
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../services/prismic';
import { GetStaticProps } from 'next';


interface PostsProps{    
  data:{ 
      uid: string;       
      title: string;
      subtitle: string;
      slider: string
  }[],
}



//    PRISMIC_API_ENDPOINT = https://appchakra.prismic.io/api/v2
//   PRISMIC_ACCESS_TOKEN = MC5Za0k0OUJBQUFDTUFfQnlv.77-977-9W1UK77-9Pe-_vWNWUu-_ve-_ve-_ve-_vU7vv73vv71pE2Qw77-9JUnvv73vv70F77-977-9W0I


export default function Home({data}:PostsProps) {

  return (
    <Box
      maxW={["375px", "1440px"]}
      mx="auto"      
    >

      <Header />
      <Banner />
      <TravelTypes/>

      <Box as="section" maxW={["300px","839px"]} mx="auto" mt="4em">

        <Image src='/image/Divider.svg' maxW="90px" mx="auto" alt="divisoria de paginas" />
        <Text mt='2em' textAlign="center" fontSize="2em" fontWeight="bold">Vamos nessa?</Text>
        <Text textAlign="center" fontSize="2em" fontWeight="bold">Então escolha seu continente</Text>

      </Box>

      
      <ContientsSlide data={data} />
      
      

           
    </Box>
  )
}

export const getStaticProps : GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query<any>([
    Prismic.Predicates.at('document.type', 'appchakra')
],{
    fetch: [],
    pageSize: 6,
});

const data = response.results.map(post => {
  return {
    uid: post.uid,
    title: post.data.title, 
    subtitle: post.data.subtitle,  
    slider: post.data.slider.url, 
  };
});

console.log(JSON.stringify(response, null, 2))

return {
    props: {data},
    revalidate: 60 * 30 * 24, // 1day  
  }
}





