import React from "react";
import { 
    Container,
    Banner,
    Title,
    Rate,
    RateContainer,
    Text,
    OverviewContainer
} from "./styles";

import {Ionicons} from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';



 function SearchItem({data}){

    const navigation = useNavigation();

    function navigateDetailsPage(item){
        navigation.navigate('Detail', {id: item.id})
    }
    return(
        <Container activeOpacity={0.7} onPress={() => navigateDetailsPage(data)}>

            { data?.poster_path ? (
                <Banner
                resizeMethod="resize"
                source={{uri: `https://image.tmdb.org/t/p/w500/${data?.poster_path}`}}
               />
            ) : (
                <Banner
                resizeMethod="resize"
                source={require('../img/no-image.png')}
               />
            

            )}

            <Title numberOfLines={2}>{data.title}
                </Title>
                <RateContainer>
                <Ionicons name="md-star" size={12} color="#E7A74e"/>
                <Rate>{data.vote_average}/10</Rate>
                </RateContainer>
                    <OverviewContainer>
                    {data?.overview ? (
                        <Text numberOfLines={3}>{data.overview}</Text>

                    ) : (
                        <Text> Este filme não possui sinopse. </Text>
                    )
                
                }
                </OverviewContainer>

                


        

        
        </Container>
  


 )
}

export default SearchItem;