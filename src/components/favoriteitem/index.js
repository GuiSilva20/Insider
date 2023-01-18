import React from 'react';
import { View, Text } from 'react-native';
import {Ionicons, Feather} from '@expo/vector-icons'
import { Container, Title, RateContainer, Rate, Buttons, DetailsButton, Trash, BTitle } from './styles';
import { deleteMovie } from '../../ultils/storage';

function FavoriteItem({data, deleteMovie, navigatePage}){

    return (
        <Container>
            <Title>{data.title}</Title>
            <RateContainer>
            <Ionicons name="md-star" size={13} color="#E7A74e" />
            <Rate>{data.vote_average}/10</Rate>
            </RateContainer>
            <Buttons>

                <DetailsButton onPress={() => navigatePage(data.id)}>
                    <BTitle>Ver detalhes</BTitle>
                </DetailsButton>
                <Trash  onPress={() => deleteMovie(data.id)}>
                <Feather name="trash" size={20} color="#FFF"/>
                </Trash>

            </Buttons>
        </Container>
    

    )
}

export default FavoriteItem;