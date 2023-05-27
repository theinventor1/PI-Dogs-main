import React from 'react'
import { Cont, Tit2, Btn, BtnCont,Img } from './styled.Card.js';

export default function Card(props) {
 const { id,name,bred_for,life_span,temperament, image } = props;
 return (
  <Cont>
    <Tit2>Guau Guau</Tit2>
    <BtnCont>
      <Btn>Boton1</Btn>
      <Btn>Boton2</Btn>
    </BtnCont>     
      <Tit2>id: {id}</Tit2>
      <Tit2>nombre: {name}</Tit2>
      <Tit2>hace bien: {bred_for}</Tit2>
      <Tit2>periodo vida: {life_span}</Tit2>
      <Tit2>temperamentos: {temperament}</Tit2>
      <Img src={image} alt={name} />
  </Cont>
 )
}
