import React, { useState, useEffect } from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import Axios from 'axios';

import {
  Container,
  Header,
  Title,
  RestaurantList,
  Item,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemDescription,
  Star,
  Categories,
  Distance,
  Delay,
} from './styles';



export default function Restaurants({ title, display }) {

  return (
    <Container>
      <Header display={display}>
        <Title>{title}</Title>
      </Header>

      <RestaurantList>

          <Item>
            <ItemImage source="" />
            <ItemInfo>
              <ItemTitle></ItemTitle>
              <ItemDescription>
                <MaterialIcons name="star" size={20} color="#ff7b00" />
                <Star> </Star>
                <Categories></Categories>
                <Distance></Distance>
              </ItemDescription>
              <Delay></Delay>
            </ItemInfo>
          </Item>
     
      </RestaurantList>
    </Container>
  );
}
