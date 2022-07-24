import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  color: string;
  textColor: string;
}

export function Button({ textColor, color, title, ...rest }: Props) {
  return (
    <Container color={color}  {...rest}>
      <Title textColor={textColor}>
        {title}
      </Title>
    </Container>
  );
}
