import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {browserHistory} from "react-router";

import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Item,
  Date,
  Wrapper,
  Restaurant,
  RestaurantImage,
  Info,
  Name,
  OrderDetails,
  OrderNumber,
  Order,
  Evaluation,
  Message,
  Star,
  Menu,
  MenuButton,
  MenuText,
} from './styles';



export default function PurchasesAnd({ navigation }) {
 

  return (
    <Container>
   
        <Item>
          <Date></Date>

          <Wrapper>
            <Restaurant>
              <RestaurantImage source="" />
              <Info>
                <Name></Name>
                <OrderNumber>Pedido entregue </OrderNumber>
              </Info>
            </Restaurant>
            <OrderDetails>
              <Order></Order>
            </OrderDetails>
            <Evaluation>
              <Message></Message>
            </Evaluation>
            <Menu>
              
            
              <MenuButton>
                <MenuText onClick="">Entregue</MenuText>
              </MenuButton>
            </Menu>
          </Wrapper>
        </Item>

    </Container>
  );
}
