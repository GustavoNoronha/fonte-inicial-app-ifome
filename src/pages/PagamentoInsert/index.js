import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Axios from 'axios';
// importação da estilização
// import './styles.css';
import { Container, BackButton, Title } from './styles';

import api from '../../services/api';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';


// CAMPOS DO FORM: ID, DATA, NOME DO RESAURANTE, URL DA IMAGEM DO RESTAURANTE, NUMERO DE PEDIDO E PEDIDO
const PagamentoInsert = () => {
  
    return (
    <Container>
      <Title>Insira os dados do novo Pagamento</Title>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <TextInput
          style={styles.input_numero}
       
      
        />
        <TextInput
          style={styles.input_expiracao}
          
         
        />
        <TextInput
          style={styles.input_codigo}
         
     
        />
        <Button title="Cadastrar" style={styles.button_cadastra} color="#F00000" >
        </Button>
      </View>         
    </Container>

  )
}


const styles = StyleSheet.create({
  input_numero: {
    borderWidth: 1,
    borderColor: "gray",
    height: 50,
    width: 350,
    marginTop: 10,
    marginLeft: 20,
    borderColor: "white",
    borderBottomColor: "gray"

  },
  input_expiracao: {
    borderWidth: 1,
    borderColor: "gray",
    height: 50,
    width: 350,
    marginTop: 10,
    marginLeft: 20,
    borderColor: "white",
    borderBottomColor: "gray"
  },
  input_codigo: {
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
  button_cadastra:{
    width: 320,
  }
  
});

export default PagamentoInsert;


PagamentoInsert.navigationOptions = ({ navigation }) => ({
  headerBackTitleVisible: false,
  title: 'Insirir um Novo Pagamento',
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