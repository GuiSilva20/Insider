import { exp } from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled.View`
 flex: 1;
 background-color: #191a30;

`;

export const Header = styled.View`
 z-index: 99;
 position: absolute;
 top: 35px;
 width: 100%;
 display: flex;
 justify-content: space-between;
 flex-direction: row;

`;

export const HeaderButton = styled.TouchableOpacity`
 width: 46px;
 height: 46px;
 background-color: rgba(25, 26, 48, 0.8);
 border-radius: 23px;
 justify-content: center;
 align-items: center;
`;

export const Banner = styled.Image`
 width: 100%;
 height: 350px;
 border-bottom-right-radius:50px;
 border-bottom-left-radius: 50px;
`;

export const ButtonLink = styled.TouchableOpacity`
 background-color: #E70f49;
 width: 63px;
 height: 63px;
 border-radius: 50px;
 position: absolute;
 top: 300px;
 right: 20px;
 justify-content: center;
 align-items: center;
 z-index: 99;
`;

export const Title = styled.Text`
 color: white;
 font-size: 22px;
 font-weight: bold;
 padding: 8px 4px;
 padding-left: 14px;
 margin-top: 8px;
`;

export const ContentArea = styled.View`
 flex-direction: row;
 align-items: center;
 padding: 0 14px;
 justify-content: space-between;
`

export const Rate = styled.Text`
 font-size: 18px;
 font-weight: bold;
 color: white;

`
export const Desc = styled.Text`
 font-size: 14px;
 color: white;
 align-items: center;
 padding-left: 14px;

`

export const DescTitle = styled.Text`
 font-size: 20px;
 color: white;
 font-weight: bold;
 align-items: center;
 padding-left: 14px;
 padding-top: 22px;
 padding-bottom: 5px;

`
export const ListGenres = styled.FlatList`
 padding-left: 14px;
 margin: 8px 0;
 max-height: 35px;
 min-height: 35px;
`;
