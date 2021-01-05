import React, { useEffect, useState } from 'react';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import Axios from 'axios';
import api from '../../services/api';
const fetch = require('node-fetch');
import {
  Container,
  ItemImage,
  ItemTitle,
  ItemIngredient,
  ItemPrice,
  OldPrice,
  Info,
  Details,
  Delivery,
  DeliveryTitle,
  DeliveryDelay,
  Wrapper,
  BackButton,
  LeftHeader,
  DrinkHeader,
  Message,
  SubMessage,
  DrinkItem,
  DrinkTitle,
  DrinkPrice,
  Warning,
  WarningText,
  Buy,
  BuyWrapper,
  BuyTitle,
  BuyIcon,
  Options,
  Option,
  MessageItem,

} from './styles';
import { Alert, Picker } from 'react-native';

export default function Item({ navigation }) {
  
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  //// fim - pedido

  function handleNavigate(item) {
    navigation.navigate('Item', { item });
  }

  return (

    <Container>
      {/* modal - inicio */}
      <View style={{ flex: 1 }}>

        <Modal isVisible={isModalVisible}>
          <View style={styles.view_modal}>
            <Text style={styles.texto_confirmacao}>Deseja Confirmar o Pedido?</Text>
            <Options horizontal>

              <Option>
                <MaterialIcons name="credit-card" size={35} color="red" />
                <MessageItem>Selecione a forma de pagamento</MessageItem>
                <Picker
                  selectedValue={selectedValueCartao}
                  style={styles.select}
                  
                >
                  </Picker>
              </Option>

            </Options>
            <Options horizontal>

              <Option>

                <MaterialCommunityIcons name="map-marker" size={35} color="red" />
                <MessageItem>Selecione o endereço</MessageItem>
                <Picker
                  selectedValue={selectedValueEndereco}
                  style={styles.select}
                  >
                 

                </Picker>
              </Option>

            </Options>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
              <View style={styles.view_botao_confirma}>
                <Button color="#F00000" title="Confirmar" onPress={submitPurcharse} />
              </View>
              <View style={styles.view_botao_cancelar}>
                <Button style={styles.botao_cancelar} color="gray" title="Fechar" onPress={toggleModal} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
      {/* modal - fim */}
      <Details>

        <ItemImage source="" />
        <ItemTitle></ItemTitle>
        <ItemIngredient></ItemIngredient>
        <Info>
          <ItemPrice>$</ItemPrice>
          <OldPrice>$</OldPrice>
        </Info>
        <Delivery>
          <Wrapper>
            <MaterialIcons name="" size={22} color="#F00000" />
            <DeliveryTitle></DeliveryTitle>

          </Wrapper>
          <DeliveryDelay></DeliveryDelay>
        </Delivery>


      </Details>

      <DrinkHeader>
        <LeftHeader>
          <Message>Escola sua bebida</Message>
          <SubMessage>Escolha 1 opção</SubMessage>
        </LeftHeader>
        <Warning>
          <WarningText>OPCIONAL</WarningText>
        </Warning>
      </DrinkHeader>
      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Coca-cola 2lt</DrinkTitle>
          <DrinkPrice>+ R$ 11,00</DrinkPrice>
        </LeftHeader>
        <MaterialIcons name="add" size={22} color="#000" />
      </DrinkItem>
      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Fanta uva 2lt</DrinkTitle>
          <DrinkPrice>+ R$ 11,00</DrinkPrice>
        </LeftHeader>
        <MaterialIcons name="add" size={22} color="#000" />
      </DrinkItem>
      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Suco de Maracujá 300ml</DrinkTitle>
          <DrinkPrice>+ R$ 9,50</DrinkPrice>
        </LeftHeader>
        <MaterialIcons name="add" size={22} color="#000" />
      </DrinkItem>
      <DrinkItem>
        <LeftHeader>
          <DrinkTitle>Dolly Guaraná</DrinkTitle>
          <DrinkPrice>+ R$ 10,00</DrinkPrice>
        </LeftHeader>
        <MaterialIcons name="add" size={22} color="#000" />
      </DrinkItem>

      <Details>
        <Button title="Fazer Pedido" color="#F00000" onPress={toggleModal}>
        </Button>

      </Details>

    </Container>


  );
}
const styles = StyleSheet.create({
  select: {
    borderWidth: 1,
    borderColor: "#eee",
    height: 50,
    width: 460
  },
  texto_confirmacao: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: "bold",
    color: 'black',
    marginTop: 20
  },
  view_modal: {
    backgroundColor: 'white',
    borderRadius: 8
  },
  view_botao_confirma: {
    flex: 0,
    width: 150,
    marginLeft: 20,

  },
  view_botao_cancelar: {
    width: 150,
    marginLeft: 10,
  }

});


Item.navigationOptions = ({ navigation }) => ({
  headerBackTitleVisible: false,
  title: 'DETALHES DO ITEM',
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
