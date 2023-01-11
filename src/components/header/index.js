import React from 'react';
import {Container, Title, MenuButton} from './styles'
import {Feather} from '@expo/vector-icons'
import {useNavigation } from '@react-navigation/native';

function Header({title}){

    const Navigation = useNavigation();

    return(
        <Container>
            <MenuButton onPress={ () => Navigation.openDrawer()}>
                <Feather
                name='menu'
                size={36}
                color="#FFF"
                />
                
            </MenuButton>

            <Title>{title}</Title>
        </Container>
    )
}

export default Header