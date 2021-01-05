import React, { useState, useEffect } from 'react';

import { withNavigation } from 'react-navigation';
import { PromoList, Item, PromoImage } from './styles';
import api from '../../services/api';

function Promotions({ navigation }) {
  
 
  function handleNavigate(promo) {
    navigation.navigate('Trending', { promo });
  }

  return (
    <PromoList horizontal>
    
        <Item  >
          <PromoImage source="" />
        </Item>
   
    </PromoList>
  );
}

export default withNavigation(Promotions);
