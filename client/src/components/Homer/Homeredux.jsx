import Cardsredux from '../Cards/Cardsredux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPerros } from '../../redux/actions';
import React from 'react';
import { AppCont } from '../../styledCompApp';


const  Homeredux = (onClose) => {
   const dispatch = useDispatch();
    
   useEffect(() => {
      dispatch(getPerros());
   },[])

  return (
    <AppCont>
       <Cardsredux onClose={onClose}/>
    </AppCont>
  )
}
export default Homeredux;