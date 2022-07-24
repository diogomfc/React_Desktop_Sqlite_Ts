import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { Container, Title } from './styles';

// type Props = TouchableOpacityProps & {
//   title: string;
//   isActive?: boolean;
// }

interface Props extends TouchableOpacityProps {
  title: string;
  isActive?: boolean;
}

export function MenuItem({ title, isActive = false, ...rest }: Props) {
  return (
    <Container
      isActive={isActive}
      {...rest}
    >
      <Icon
        name={
          title === 'Soft Skills' ? 'user'
            :
            title === 'Cadastro' ? 'file-plus'
              :
              title === 'Localizar' ? 'search'
                : 'tool'}
        color="#FFF"
        size={24}
      />

      <Title>{title}</Title>
    </Container>
  );
}
