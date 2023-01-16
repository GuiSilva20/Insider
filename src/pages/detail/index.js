import React, {useState, useEffect} from 'react';
import {
    Container,
    Header,
    HeaderButton,
    Banner,
    ButtonLink,
    Title,
    ContentArea,
    Rate,
    Desc,
    DescTitle,
    ListGenres,
    ODesc,
    DescContainer,
    OTitle
} from './styles';
import {Feather, Ionicons} from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import api, {key} from '../../services/api';
import Stars from 'react-native-stars'
import Genres from '../../components/Genres';
import { ScrollView, Modal } from 'react-native';

function Detail(){
    const navigation = useNavigation();
    const route = useRoute();
    const [originalDesc, setOriginalDesc] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        let isActive = true;
        async function getMovie(){
            const response = await api.get(`movie/${route.params?.id}`, {
                params:{
                    api_key: key,
                    language:'pt-BR'
                }
                
            })
            .catch((err) => {
                console.log(err)
            })

            if(isActive){
                setMovie(response.data);
                //console.log(response.data)
            }
        }

        if(isActive){
            getMovie();
        }

        return() => {
            isActive = false;

        }
    }, [])

    return(
        
        <Container>
            <Header>
                <HeaderButton activeOpacity={0.7} onPress={ () => navigation.goBack()}>
                    <Feather
                     name="arrow-left"
                     size={28}
                     color="#FFF"
                    />
                </HeaderButton>
                <HeaderButton>
                    <Ionicons
                     name="bookmark"
                     size={28}
                     color="#FFF"
                    />
                         
                </HeaderButton>
            </Header>

            <Banner
            resizeMethod="resize"
            source={{uri:`https://image.tmdb.org/t/p/original/${movie.poster_path}`}}
            />

            <Title numberOfLines={2}>{movie.title}</Title>

            <ContentArea>
                <Stars
                default={movie.vote_average}
                count={10}
                half={true}
                size={20}
                fullStar={ <Ionicons name="md-star" size={24} color="#E7A74e"/>}
                emptyStar={ <Ionicons name="md-star-outline" size={24} color="#E7A474e"/>}
                halfStar={ <Ionicons name="md-star-half" size={24} color="#E7A74e"/>}
                disable={true}
                />
                <Rate>{movie.vote_average}/10</Rate>
            </ContentArea>
            <ListGenres
             data={movie?.genres}
             horizontal={true}
             showsHorizontalScrollIndicator={false}
             keyExtractor={(item)=> String(item.id)}
             renderItem={({item}) => <Genres data={item}/>}

            />
            <ScrollView>
            
            <DescTitle>Descrição</DescTitle>
            <Desc>{movie.overview}</Desc>
            <DescContainer>
            <OTitle>Título original </OTitle>
            <ODesc>{movie.original_title}</ODesc>
            <OTitle>Popularidade</OTitle>
            <ODesc>{movie.popularity}</ODesc>
            <OTitle>Votações</OTitle>
            <ODesc>{movie.vote_count}</ODesc>
            <ODesc></ODesc>
            </DescContainer>
            </ScrollView>
        </Container>
    )

   
}


export default Detail