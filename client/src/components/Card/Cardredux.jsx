import React from 'react';
import { useState, useEffect } from 'react';
import { Cont, Tit2, Boton, BtnCont,Img } from './styled.Card.js';
import { Link } from "react-router-dom";
 function Cardr(props) {
  const { id,name,weight,life_span,temperament, image } = props;
  const [isOpen, setIsOpen] = useState(true);
  const onClose = (id) => {
  console.log('onClose() -> cardredux ');
     setIsOpen(false);
  }
  if(!isOpen){
    return null;
  }

 return (
  <Cont>
    <Tit2>Guau Guau Redux</Tit2>
     <Boton onClick={ onClose }>Xredux</Boton>
    <Link to={`/detail/${id}`}>
       <Tit2>id: {id}</Tit2>
       <Img src={image} alt={name} />
       <Tit2>Nombre: {name}</Tit2>
       <Tit2>Peso: {weight+' [Kg]'}</Tit2>
       <Tit2>Años de vida: {life_span}</Tit2>
       <Tit2>Temperamentos: {temperament}</Tit2>    
    </Link>
  </Cont>
 )
}

export default Cardr ;