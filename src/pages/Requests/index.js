import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import {
  Container,
  Wrapper,
  Warning,
  Suggestion,
  Image,
  Message,
} from './styles';
import PurchasesAnd from '../../components/PurcharseAnd';
import api from '../../services/api';

export default function Requests() {


  return (
    <Container>
    {/* {purcharseList != "" ? (
      <PurchasesAnd />
    ) : ( */}
      <Wrapper>
        <Image />
        <Warning>Nenhum pedido em andamento</Warning>
        <Message>
          <Suggestion>Que tal experimentar um lugar novo?</Suggestion>
          <Suggestion>É só selecionar Início</Suggestion>
        </Message>
      </Wrapper>
    {/* )} */}
    </Container>
    
  

  );

}

Requests.navigationOptions = {
  title: 'ANDAMENTO',
};
