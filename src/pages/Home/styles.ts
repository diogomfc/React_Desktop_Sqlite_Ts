import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  //background-color: #131016;
  padding: 24px;
  padding-top: 24px;
`;

export const ContainerMenu = styled.View`
    //width: 50%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #FFF;
  font-weight: bold;
  margin: 24px 0;
`;

export const Input = styled.TextInput`
  width: 350px;
  height: 60px;
  font-size: 20px;
  color: #FFFFFF;
  border: 1px solid #131016;
  border-radius: 16px;
  padding: 16px;
  background: #2D2D2D;
  border: .5px solid rgba(255,255,255,.2);
`;

export const Form = styled.View`
  padding: 24px;
`;

export const FormTitle = styled.Text`
  font-size: 24px;
  color: #FFF;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const ContainerPopup = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
   
    background: rgba(5,2,6, .8);
`;

export const ContentPopup = styled.View`
    width: 50%;
    //height:50%;
    //padding: 100px;
    align-items: center;
    background-color: #202020;
    border: .5px solid rgba(255,255,255,.2);
    padding: 24px 10px;
    border-radius: 8px;

`;
