import React from "react";
import {View, Text} from 'react-native';
import { Container } from "./styles";


function SearchItem({data}){
    return(
        <Container activeOpacity={0.7}>

            {data?.poster_path (
                <Banner
                 resizeMethod="resize"
                 source={{uri: `https://image.tmdb.org/t/p/w500/${data?.poster_path}`}}
                />
            )} : (
                
            )

        </Container>
    )
}

export default SearchItem