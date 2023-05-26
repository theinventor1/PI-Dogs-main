import React from 'react';
import Card from "../Card/Card";
import {Conx } from './styled.Cards.js';

export default function Cards(props) {
 const { perritos } = props;
  return (
   <div >
      { perritos?.map((perrin) => {
        return (
          <Card
              id={perrin.id}
              name={perrin.name}
              bred_for={perrin.bred_for}
              life_span={perrin.life_span}
              temperament={perrin.temperament}
              image={perrin.reference_image_id}             
          />
        );
      }) }
    </div>
  )
}
