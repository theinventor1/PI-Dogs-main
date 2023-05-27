import React from 'react';
import Card from "../Card/Card";
import {Conx } from './styled.Cards.js';

export default function Cards(props) {
 const { losperros } = props;
  return (
   <Conx >
      { losperros?.map((perro) => {
        return (
          <Card
              id={perro.id}
              name={perro.name}
              bred_for={perro.bred_for}
              life_span={perro.life_span}
              temperament={perro.temperament}
              image={perro.reference_image_id}             
          />
        );
      }) }
    </Conx>
  )
}
