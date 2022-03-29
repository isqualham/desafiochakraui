//prismic
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic';

import { GetStaticPaths, GetStaticProps } from 'next';

//interface chakraUI
import { Box} from '@chakra-ui/react';

//compomentes 
import { HeaderContinent } from '../../components/HeaderContinent';
import { BodyContinent } from '../../components/BodyContinent';
import { TopCitiesContinent } from '../../components/TopCitiesContinent';


interface PostProps{    
    data:{ 
        uid: string;       
        title: string;
        subtitle: string;
        image: string;        
        description: string;
        contry: number;
        language: number;
        city: number;
        content:{
            title: string;
            subtitle: string;
            image: string;
            flag: string;
        }[],                   
    }    
}

export default function Post ({data}: PostProps){
    return(
        <Box
            maxW={["375px", "1440px"]}
            mx="auto"
            
        >
            <HeaderContinent data={data} />

            <BodyContinent data={data} />

            <TopCitiesContinent data={data}  />                            

        </Box>
        

    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const prismic = getPrismicClient();
    const postsResponse = await prismic.query(
      [Prismic.predicates.at('document.type', 'appchakra')],
      {
        fetch: ['appchakra.uid'],
        pageSize: 1,
      }
    );
    const paths = postsResponse.results.map(post => {
      return {
        params: { slug: post.uid },
      };
    });
  
    return {
      paths,
      fallback: true,
    };
  };
  
  export const getStaticProps : GetStaticProps = async ({params,}) => {    
    const {slug} = params;
    const prismic = getPrismicClient()
  
    const response = await prismic.getByUID<any>('appchakra', String(slug),{}) 

    //console.log(JSON.stringify(response, null, 2))

    const data = {
        title: response.data.title,
        image: response.data.image.url,
        description: response.data.description.find(description => description.type === 'paragraph')?.text ?? '',
        contry: response.data.contry,
        language: response.data.language,
        city: response.data.city,
        content: response.data.content.map(item => {
            return {
                title: item.title,
                subtitle: item.subtitle,
                image: item.image.url,
                flag:item.flag.url,
            }
          })
       
        
    }    
  
    return {
        props: {data},
        revalidate: 60 * 30 * 24, // 1day
    }
  }
  