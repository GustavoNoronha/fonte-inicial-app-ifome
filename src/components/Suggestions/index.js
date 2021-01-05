import React, { useState, useEffect } from 'react';


import { SuggestionList, Item, SuggestionImage, Title } from './styles';


export default function Suggestions() {


  return (
    <SuggestionList horizontal>
    
        <Item>
          <SuggestionImage source="" />
          <Title></Title>
        </Item>
   
    </SuggestionList>
  );
}
