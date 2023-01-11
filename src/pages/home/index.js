import React from 'react';
import { View, Text } from 'react-native';
import { Container } from './styles'
import Header from '../../components/header';

function Home() {
    return(
        <Container>
            <Header title="React TESTE"/>
            <Text>TELA HOME</Text>
        </Container>
    )
}

export default Home;
