import React from 'react';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { Cont, Tit2, Boton, BtnCont,Img } from './styled.Card.js';
import { Link } from "react-router-dom";
 function Card(props) {
 const { id,name,weight,life_span,temperament, image, onClose } = props;
 console.log('onClose:', onClose);
 const [ showCloseButton, setShowCloseButton ] = useState(true);
 return (
  <Cont>
    <Tit2>Guau Guau</Tit2>
     <Boton onClick={ () => onClose(id) }>X2</Boton>
    <Link to={`/detail/${id}`}>
       <Tit2>id: {id}</Tit2>
       <Img src={image} alt={name} />
       <Tit2>Nombre: {name}</Tit2>
       <Tit2>Peso: {weight+' [Kg]'}</Tit2>
       <Tit2>Años de vida: {life_span}</Tit2>
       <Tit2>TemperamentosX: {temperament}</Tit2>    
    </Link>
  </Cont>
 )
}

export default Card ;