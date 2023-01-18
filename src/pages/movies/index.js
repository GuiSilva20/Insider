import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/header';
import {
    Container,
    ListMovies

} from './styles'
import { getMoviesSave, deleteMovie } from '../../ultils/storage';
import FavoriteItem from '../../components/favoriteitem'
import {useNavigation, useRoute, useIsFocused} from '@react-navigation/native'

function Movies() {
    const [movies, setMovies] = useState([]);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    function navigateDetailsPage(item){
        navigation.navigate('Detail', {id: item.id})
    }

    useEffect(() => {

        let isActive = true;
        async function getFavoriteMovies() {
            const result = await getMoviesSave('@primereact');
            if (isActive) {
                setMovies(result);
                console.log(movies)
            }

        }

        if (isActive) {
            getFavoriteMovies();
        }

        return () => {
            isActive = false;
        }


    },


        [isFocused]);

        async function handleDelete(id){
            const result = await deleteMovie(id)
            setMovies(result)
        }

    return (
        <Container>
            <Header title="Meus filmes" />
            <ListMovies
                showsVerticalScrollIndicator={false}
                data={movies}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <FavoriteItem
                        data={item}
                        deleteMovie={handleDelete}
                        navigatePage={() => navigateDetailsPage(item)}
                    />

                )}

            />

        </Container>
    )
}

export default Movies;
