import styled from 'styled-components/native';


export const Container = styled.TouchableOpacity`
 padding-bottom: 7px;
`;


export const Banner = styled.Image`
 width: 100%;
 height: 140px;
 border-radius: 15px;
 padding-bottom: 15px;
`;

export const Title = styled.Text`
 font-size: 18px;
 color: white;
 font-weight: bold;
 padding-left: 5px;

`;

export const RateContainer = styled.View`
 flex-direction: row;
 align-items: center;
 justify-content: flex-start;
 padding-left: 5px;
`;

export const Rate= styled.Text`
 
 color: #FFF;
 font-size: 13px;
 
 `;

 export const Text= styled.Text`
  color : #FFF;
  font-size: 13px;
  padding-bottom: 3px;
  padding-top: 5px;
  padding-left: 5px;
  
 `;

 export const OverviewContainer= styled.View`
  border-radius: 7px;
  justify-content: center;
  background-color: rgba(127, 165, 249, 0.1);
 `;