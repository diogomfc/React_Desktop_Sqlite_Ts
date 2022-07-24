import React, { useEffect, useState } from 'react';

import { Alert, FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Menu, MenuTypeProps } from '../../components/Menu';
import { Skill } from '../../components/Skill';
import { Button } from '../../components/Button';

import { Container, Title, Input, Form, FormTitle, ContainerMenu, ContainerPopup, ContentPopup } from './styles';
import { deleteTask, getTask, getTasks, initDatabase, insertTask, updateTask } from '../../services/db_services';

import { ITypesProps } from '../../types';
import { MenuItem } from '../../components/MenuItem';
import { Popup } from 'react-native-windows';

export function Home() {
  const [type, setType] = useState<MenuTypeProps>('soft');
  const [title, setTitle] = useState('');
  const [mySkills, setMySkills] = useState<ITypesProps[]>([]);
  const [skill, setSkill] = useState<ITypesProps>({} as ITypesProps);

  const [modalVisible, setModalVisible] = useState(false);

  //conexão com o banco de dados - Criando db e tabela
  async function initDb() {
    await initDatabase();
  }

  //Salvar uma novo skill
  async function handleSave() {
    if (title === '') {
      Alert.alert('Erro', 'Precisa digitar um nome');
      return;
    }
    if (skill.id) {
      updateTask({
        id: skill.id,
        title: title,
        type: type,
      });
      setModalVisible(false);
      Alert.alert('Update', `Skill alterado para ${title}.`);
      setSkill({} as ITypesProps);
      setTitle('');
    } else {
      try {
        setTitle(title);
        await
          insertTask(title, type);
        setModalVisible(false)
        Alert.alert('Sucesso', `Skill ${title} salva com sucesso`);
        setTitle('');
      } catch (error) {
        Alert.alert('Error', 'Error');
      }
    }
    fetchData();
  }

  //listar skills
  async function fetchData() {
    const dataSkills = getTasks();
    const response = await dataSkills;
    setMySkills(response);
    console.log(mySkills);
  }

  //Deletar skills
  async function handleRemove({ id, title }: ITypesProps) {
    try {
      Alert.alert('Excluir a Skill', `Tem certeza que deseja excluir a skill ${title}?`,
        [
          {
            text: 'Ok',
            onPress: async () => {
              await deleteTask(id),
                fetchData();
            }
          },
          {
            text: 'Cancelar',
            onPress: async () => {
              fetchData();
            }
          },
        ],
      );
    } catch (error) {
      Alert.alert('Error', 'Error');
    }
    console.log(id);
  }

  //Editar skills
  async function handleEdit(item: ITypesProps) {
    setModalVisible(true)
    setSkill(item);
    setTitle(item.title);
  }

  useEffect(() => {
    initDb();
    fetchData();
  }, []);

  //console.log(findSkill)
  //console.log(skillId);

  return (
    <>
      <Container>
        <Title>Minhas Skills</Title>

        <ContainerMenu>
          <MenuItem
            title="Cadastro"
            isActive={true}
            onPress={() => setModalVisible(true)}
          />
          <MenuItem
            style={{ marginLeft: 10 }}
            title="Localizar"
            isActive={true}
            onPress={() => setModalVisible(true)}
          />
        </ContainerMenu>

        <FlatList
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Skill
              data={item}
              onEdit={() => { handleEdit(item); }}
              onRemove={() => {
                handleRemove(item);
              }}
            />
          )}
        />
      </Container>

      <Popup
        style={{ width: '100%', height: '100%' }}
        isOpen={modalVisible}
        isLightDismissEnabled={false}
        onDismiss={() => {
          setModalVisible(false);
        }
        }
      >
        <ContainerPopup>
          <ContentPopup>
            <Menu
              type={type}
              setType={setType}
            />
            <FormTitle>
              {skill.id ? 'Editar skill' : 'Cadastrar nova skill'}
            </FormTitle>
            <Input
              placeholderTextColor="rgba(142,142,142,.2)"
              placeholder="Nova skill"
              onChangeText={setTitle}
              value={title}
            />
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              width: 350,
              alignSelf: 'center',
            }}>
              <Button
                textColor='#1F2D27'
                color="#4CC2FF"
                style={{
                  marginRight: 10,
                  width: 170,
                }}
                title="Salvar"
                onPress={handleSave}
              />
              <Button
                textColor='#737380'
                color="#DBDCDD"
                style={{
                  marginRight: 10,
                  width: 170,
                }}
                title="Cancelar"
                onPress={() => { setModalVisible(false) }}
              />
            </View>

          </ContentPopup>
        </ContainerPopup>
      </Popup>

    </>
  );
}

