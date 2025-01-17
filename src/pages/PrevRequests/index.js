import React, { useEffect, useState } from 'react';

import {
  Container,
  Wrapper,
  Warning,
  Suggestion,
  Image,
  Message,
} from './styles';

import Purchases from '../../components/Purchases';
import Axios from 'axios';
import api from '../../services/api';

export default function PrevRequests() {
 
  return (
    <Container>
      {/* {purcharseList != "" ? (
      <Purchases />
    ) : ( */}
      <Wrapper>
        <Image />
        <Warning>Nenhum pedido anterior</Warning>
        <Message>
          <Suggestion>Que tal experimentar um lugar novo?</Suggestion>
          <Suggestion>É só selecionar Início</Suggestion>
        </Message>
      </Wrapper>
    {/* )} */}
    </Container>
  );
}

PrevRequests.navigationOptions = {
  title: 'ANTERIORES',
};
