import styled from 'styled-components/native';

interface IColor{
    color?: string;
    textColor?: string;
}

export const Container: any = styled.TouchableOpacity<IColor>`
    width: 100%;
    height: 56px;
    background-color: ${props => props.color};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
`;

export const Title = styled.Text<IColor>`
    color: ${props => props.textColor};
    font-size: 15px;
    font-weight: normal;
`;
