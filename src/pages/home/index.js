import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import {
    Container,
    SearchContainer,
    Input,
    SearchButton,
    Title,
    Banner,
    BannerButton,
    SliderMovie,
    ShadowBox,
    ShowTitle
} from './styles'
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import Header from '../../components/header';
import { useAnimation } from 'react-native-animatable'
import { SearchBar } from 'react-native-screens';
import { Feather } from '@expo/vector-icons'
import SliderItem from '../../components/SliderItem';
import api, { key } from '../../services/api'
import { getListMovies, randomBanner } from '../../ultils/movie'
import { useNavigation } from '@react-navigation/native';
function Home() {

    const [nowMovies, setNowMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const [bannerMovie, setBannerMovie] = useState({});
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    useEffect(() => {
        let isActive = true;
        const ac = new AbortController();

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

            if (isActive) {

                const nowList = getListMovies(10, nowData.data.results);
                const popularList = getListMovies(5, popularData.data.results);
                const topList = getListMovies(5, topData.data.results);

                setBannerMovie(nowData.data.results[randomBanner(nowData.data.results)])
                setNowMovies(nowList);
                setPopularMovies(popularList);
                setTopMovies(topList);
                setLoading(false);

            }


        }

        getMovies();

        return () => {
            isActive = false;
            ac.abort();
        }
    }, [])

    function navigateDetailsPage(item) {
        navigation.navigate('Detail', { id: item.id })
    }

    function handleSearchMovie() {

        if (input === '') return;

        navigation.navigate('Search', { name: input })
        setInput('');
    }

    if (loading) {
        return (
            <Container>
                <ActivityIndicator size="large" color="#FFF" />
            </Container>
        )
    }

    //function handleSearchButton() {
    //setSearchButton(true);

    //if (SearchButton(true)) 
    //return (
    // )
    //   }

    return (
        <Container>
            <Header />
            <SearchContainer>
                <Input
                    placeholder="Ex Vingadores"
                    placeholderTextColor="#ddd"
                    value={Input}
                    onChangeText={(text) => setInput(text)}
                    style={[ShadowBox.shadowProp]}

                />

                <SearchButton onPress={handleSearchMovie} >
                    <Feather name="search" size={30} color="#FFF" />
                </SearchButton>
            </SearchContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <BannerButton activeOpacity={0.9} onPress={() => navigateDetailsPage(bannerMovie)} >
                    <Banner

                        source={{ uri: `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}` }}
                        resizeMethod="resize"
                    />
                </BannerButton>
                <ShowTitle>
                    <Feather name="play-circle" size={24} color="#FFF" />
                    <Title> Em cartaz </Title>
                </ShowTitle>
                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={nowMovies}
                    renderItem={({ item }) => <SliderItem data={item} navigatePage={() => navigateDetailsPage(item)} />}
                    keyExtractor={(item) => String(item.id)}

                />

                <ShowTitle>
                    <Feather name="thumbs-up" size={24} color="#FFF" />
                    <Title> Populares </Title>
                </ShowTitle>
                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={popularMovies}
                    renderItem={({ item }) => <SliderItem data={item} navigatePage={() => navigateDetailsPage(item)} />}
                    keyExtractor={(item) => String(item.id)}
                />

                <ShowTitle>
                    <Feather name="star" size={24} color="#FFF" />
                    <Title> Mais votados </Title>
                </ShowTitle>
                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={topMovies}
                    renderItem={({ item }) => <SliderItem data={item} navigatePage={() => navigateDetailsPage(item)} />}
                    keyExtractor={(item) => String(item.id)}

                />
            </ScrollView>
        </Container>
    )
}

export default Home;
