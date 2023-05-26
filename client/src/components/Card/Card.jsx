import React from 'react'
import { Cont, Tit2, Btn, BtnCont,Img } from './styled.Card.js';

export default function Card(props) {
 const { id,name,bred_for,life_span,temperament, image } = props;
 return (
  <Cont>
    <BtnCont>
      <Btn>Boton1</Btn>
      <Btn>Boton2</Btn>
    </BtnCont>
      <Tit2> Perritos Guau Guau</Tit2>
      <Tit2> {id}</Tit2>
      <Tit2> {name}</Tit2>
      <Tit2> {bred_for}</Tit2>
      <Tit2> {life_span}</Tit2>
      <Tit2> {temperament}</Tit2>
      <Img src={image} alt={name} />
  </Cont>
 )
}
