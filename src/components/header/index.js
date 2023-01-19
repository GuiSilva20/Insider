import React from 'react';
import { Container, Title, MenuButton, TitleContainer } from './styles'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

function Header({ title }) {

    const Navigation = useNavigation();

    return (
        <Container>
            <MenuButton onPress={() => Navigation.openDrawer()}>
                <Feather
                    name='menu'
                    size={35}
                    color="#FFF"
                />

            </MenuButton>
            <TitleContainer>
            <Feather 
            name="film" 
            size={26}
            color="#f64247"
            />
            <Title>{title}</Title>
            </TitleContainer>
        </Container>
    )
}

export default Header