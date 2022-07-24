import styled from 'styled-components/native';

type Props = {
    isActive?: boolean;
}

export const Container: any = styled.TouchableOpacity<Props>`
    align-items: center;
    background-color: ${({ isActive }) => isActive ? '#2D2D2D' : 'transparent'};
    border: ${({ isActive }) => isActive ? '.5px solid rgba(255,255,255,.2)' : 'transparent'};
    padding: 24px 10px;
    border-radius: 8px;
`;

export const Title = styled.Text`
    color: #FFF;
    font-weight: normal;
    margin: 7px 24px 0;
`;
