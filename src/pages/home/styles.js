import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';


export const Container = styled.SafeAreaView`
 background-color: #141a29 ;
 flex:1;
 padding:4px 0;
`;

export const SearchContainer = styled.View`
 flex-direction: row;
 width: 100%;
 height: 50px;
 align-items: center;
 padding: 0 14px;
 margin-bottom: 8px;
`;
export const ShadowBox = StyleSheet.create({
    shadowProp: {
        shadowColor: "#FFF",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        
        elevation: 5,
    },
});

export const Input = styled.TextInput`
 background-color: rgba(255,255,255,0.4);
 width: 85%;
 height: 50px;
 border-radius: 50px;
 padding: 8px 15px;
 font-size: 18px;
 color: #FFF;
 
`;

export const SearchButton = styled.TouchableOpacity`
 width: 15%;
 height: 50px;
 justify-content: center;
 align-items: center;


`;

export const Title = styled.Text`
 padding-left: 5px;
 padding-bottom: 5px;
 font-size: 24px;
 font-weight: bold;
 color: #FFF;
 

 
`;

export const BannerButton = styled.TouchableOpacity`
 padding-top: 5px;
 padding-bottom: 8px;
`;

export const Banner = styled.Image`

height: 150px;
 border-radius: 6px;
 margin: 0 14px;
 padding-top: 5px;
`;

export const SliderMovie = styled.FlatList`
 height: 250px;
 padding: 0 14px;
 padding-top: 5px;

`;

export const ShowTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f64247;
  width: 100%;
  border-radius: 8px;
`;
