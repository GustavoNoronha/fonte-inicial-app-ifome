import React, { useState, useEffect } from 'react';

import {
  Container,
  SearchBar,
  CategoriesList,
  Title,
  Item,
  ItemImage,
  ItemTitle,
} from './styles';

import Input from '../../components/Input';
import Axios from 'axios';

import api from '../../services/api';

export default function Search() {

  return (
    <Container>
      <Input header placeholder="item ou loja" />

      <Title>Categorias</Title>
      <CategoriesList
        renderItem={() => (
          <Item>
            <ItemImage source="" />
            <ItemTitle></ItemTitle>
          </Item>
        )}
      />
    </Container>
  );
}

Search.navigationOptions = {
  headerShown: false,
};
