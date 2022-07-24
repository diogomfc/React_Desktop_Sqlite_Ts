import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { Container, IconContent, Name, Options, Option } from './styles';

import { ITypesProps } from '../../types'

// export type SkillProps = {
//   id: number;
//   title: string;
//   type: string;
// }

type Props = {
  data: ITypesProps;
  onRemove: () => void;
  onEdit: () => void;
}

export function Skill({ data, onRemove, onEdit }: Props) {
  return (
    <Container>
      <IconContent type={data.type}>
        <Icon
          name={data.type === 'soft' ? 'user' : 'tool'}
          color="#FFF"
          size={20}
        />
      </IconContent>

      <Name>{data.title}</Name>

      <Options>
        <Option onPress={onEdit}>
          <Icon
            name="edit"
            color="#1A75FF"
            size={20}
          />
        </Option>

        <Option onPress={onRemove}>
          <Icon
            name="trash"
            color="#F84F6B"
            size={20}
          />
        </Option>
      </Options>
    </Container>
  );
}
