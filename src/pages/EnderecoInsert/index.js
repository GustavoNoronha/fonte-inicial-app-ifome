import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Axios from 'axios';
// importação da estilização
// import './styles.css';
import { Container, BackButton, Title } from './styles';
// import styles from './styles.css';
import api from '../../services/api';
import { TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Button } from 'react-native';


const EnderecoInsert = () => {
    return (
    <Container>
      <Title>Insira os dados do novo Endereço</Title>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <TextInput
          style={styles.inputbairro}
         
        />
        <TextInput
          style={styles.input_rua}
         
        />
        <TextInput
          style={styles.input_numero}
         
        />
        <Button title="Cadastrar" style={styles.button_cadastra} color="#F00000" onPress={submitPurcharse}>
        </Button>
      </View>


    </Container>

  )
}



export default EnderecoInsert;

const styles = StyleSheet.create({
  inputbairro: {
    borderWidth: 1,
    borderColor: "gray",
    height: 50,
    width: 350,
    marginTop: 10,
    marginLeft: 20,
    borderColor: "white",
    borderBottomColor: "gray"

  },
  input_rua: {
    borderWidth: 1,
    borderColor: "gray",
    height: 50,
    width: 350,
    marginTop: 10,
    marginLeft: 20,
    borderColor: "white",
    borderBottomColor: "gray"
  },
  input_numero: {
    borderWidth: 1,
    borderColor: "gray",
    height: 50,
    width: 350,
    marginTop: 10,
    marginLeft: 20,
    borderColor: "white",
    borderBottomColor: "gray",
    marginBottom: 30
  },
  button_cadastra: {
    width: 320,
  }



});

EnderecoInsert.navigationOptions = ({ navigation }) => ({
  headerBackTitleVisible: false,
  title: 'Insirir um Novo Endereço',
  headerTitleAlign: 'center',
  headerStyle: {
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  headerLeft: () => (
    <BackButton onPress={() => navigation.goBack()}>
      <MaterialIcons name="keyboard-arrow-left" color="#f00" size={35} />
    </BackButton>
  ),
});