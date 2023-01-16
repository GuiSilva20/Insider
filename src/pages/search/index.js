import React, {useState, useEffect} from 'react'
import {
    Container,
    ListMovies
} from './styles'

import { useNavigation, useRoute } from '@react-navigation/native';
import api, {key} from '../../services/api';
import SearchItem from '../../components/SearchItem';
function Search(){
    const [movie, setMovie] = useState(['']);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const route = useRoute();

    useEffect(()=>{
        let isActive = true;

        async function getSearchMovie(){

            const response = await api.get('/search/movie',
            {params:{
                query: route?.params?.name,
                api_key: key,
                language: 'pt-BR',
                page: 1
            }

            })

            if(isActive){
                setMovie(response.data.results)
                setLoading(false)
                //console.log(response.data.results)
            }

        }

        if(isActive){
            getSearchMovie();
        }

        return() => {
            isActive = false;
        }
    }, [])

    if(loading){
        return(
            <Container></Container>
        )
    }

    return(
        <Container>
            <ListMovies
            data={movie}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <SearchItem data={item}/>}
            />
        </Container>
    )
}

export default Search