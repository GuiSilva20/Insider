import React, {useState, useEffect}from 'react';
import { ScrollView } from 'react-native';
import { Container,
     SearchContainer, 
     Input, 
     SearchButton, 
     Title, 
     Banner, 
     BannerButton,
     SliderMovie
    } from './styles'
import Header from '../../components/header';
import { SearchBar } from 'react-native-screens';
import {Feather} from '@expo/vector-icons'
import SliderItem from '../../components/SliderItem';
import api, {key} from '../../services/api'

function Home() {

    const [nowMovies, setNowMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    useEffect(() => {
        let isActive = true;
        async function getMovies() {

            const [nowData, popularData, topData] = await Promise.all([
                api.get('/movie/now_playing', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                }),
                api.get('/movie/popular', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                }),
                api.get('/movie/top_rated', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                }),
            ])
            
            
   
        }

        getMovies();
        
    },[])

    return(
        <Container>
            <Header title="React Prime"/>
            <SearchContainer>
                <Input
                placeholder="Ex Vingadores"
                placeholderTextColor="#ddd"
                />
                <SearchButton>
                    <Feather name="search" size={30} color="#FFF"/>
                </SearchButton>
            </SearchContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Title> Em cartaz </Title>
                <BannerButton activeOpacity={0.9} onPress={() => alert('Test')}>
                    <Banner
                    resizeMethod="resize"
                    source={{uri: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80"}}
                    />
                </BannerButton>
                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4]}
                    renderItem={ ({item}) => <SliderItem/>}
                    
                />

                <Title>Populares</Title>
                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4]}
                    renderItem={ ({item}) => <SliderItem/>}
                    
                />

                <Title>Mais votados</Title>
                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4]}
                    renderItem={ ({item}) => <SliderItem/>}
                    
                />
            </ScrollView>
        </Container>
    )
}

export default Home;
