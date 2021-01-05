import React, { useState, useEffect } from 'react';
import Axios from 'axios';

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

import api from '../../services/api';

export default function Purchases() {

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
              <Message>Avaliação do pedido</Message>
              <Star>
                <MaterialIcons name="star" color="#ffcc33" size={20} />
                <MaterialIcons name="star" color="#ffcc33" size={20} />
                <MaterialIcons name="star" color="#ffcc33" size={20} />
                <MaterialIcons name="star" color="#ffcc33" size={20} />
                <MaterialIcons name="star" color="#ffcc33" size={20} />
              </Star>
            </Evaluation>
            <Menu>
              <MenuButton>
                <MenuText>Excluir</MenuText>
              </MenuButton>
              <MenuButton>
                <MenuText>Detalhes</MenuText>
              </MenuButton>
            </Menu>
          </Wrapper>
        </Item>

    </Container>
  );
}
