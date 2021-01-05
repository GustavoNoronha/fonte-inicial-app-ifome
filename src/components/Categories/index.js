import React, { useState, useEffect } from 'react';

import {
  Container,
  Header,
  Title,
  CategoriesList,
  Item,
  ItemImage,
  ItemTitle,
} from './styles';

export default function Categories({ navigation }) {
  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
      </Header>

      <CategoriesList horizontal>

          <Item>
            <ItemImage source="" />
            <ItemTitle></ItemTitle>
          </Item>

      </CategoriesList>
    </Container>
  );
}
