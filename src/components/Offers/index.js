import React, { useState, useEffect } from 'react';


import { withNavigation } from 'react-navigation';

import { MaterialIcons } from '@expo/vector-icons';
import api from '../../services/api';

import { formatNumber } from '../../utils/formatNumber';

import {
  Container,
  Header,
  Info,
  Title,
  SubTitle,
  SeeMoreButton,
  SeeMoreText,
  OfferList,
  ItemInfo,
  Item,
  ItemImage,
  ItemTitle,
  ItemPrice,
  OldPrice,
  Price,
} from './styles';

function Offers({ navigation }) {

  function handleNavigate(item) {
    navigation.navigate('Item', { item });
  }

  return (
    <Container>
      <Header>
        <Info>
          <Title>Esta com fome?</Title>
          <SubTitle>Pratos com entrega grátis</SubTitle>
          
        </Info>
        <SeeMoreButton onPress="">
          <SeeMoreText>Ver mais</SeeMoreText>
        </SeeMoreButton>
      </Header>
  
        <OfferList horizontal>
        
            <Item  onPress="">
              <ItemImage source="" />
              <ItemInfo>
                <ItemTitle></ItemTitle>
                <ItemPrice>
                  <Price>$</Price>
                  <OldPrice>$</OldPrice>
                  <MaterialIcons name="local-offer" size={15} color="#000" />
                </ItemPrice>
              </ItemInfo>
            </Item>
          {/* ))} */}
        </OfferList>
    
    </Container>
  );
}

export default withNavigation(Offers);
