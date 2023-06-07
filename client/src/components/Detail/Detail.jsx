import React, { useState, useEffect }  from 'react';
import { Contenedor, Tit, Img, Btn } from './styled.Detail.js';
import { useParams , useNavigate } from 'react-router-dom';
import axios from 'axios';

function Detail() {
  const [perro, setPerro] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios(`http://localhost:3001/dogs/${id}`)
      .then(({ data }) => {
        if (data.id) {  
          setPerro(data);
          window.scrollTo({ top:0, behavior:'smooth'}); // Desplazarse hacia arriba de la página
        } else {  window.alert('No hay Perro con ese ID'); }
      })
      .catch(() => {  window.alert('No hay Perro con ese ID');  });
    return () => {  setPerro({});   };
  }, [id]);

  let handleGoBack = () => { navigate(-1); };
  return (
  <div>
     <Contenedor>
        <Btn onClick={handleGoBack}>Volver</Btn>
        <Img src={perro.urlimagen} />
        <Tit>id: {perro.id}</Tit>
        <Tit>Nombre: {perro.name}</Tit>
        {perro.height && (
          <Tit>
            Altura: {perro.height.metric} cm ({perro.height.imperial} in)
          </Tit>
        )}
        {perro.weight && (
          <Tit>
            Peso: {perro.weight.metric} kg ({perro.weight.imperial} lbs)
          </Tit>
        )}
        <Tit>Temperamentos: {perro.temperament}</Tit>
        <Tit>Años de Vida: {perro.life_span}</Tit>
     </Contenedor>
  </div>
 );
}

export default Detail;
