import styled from 'styled-components';

export const SBCont = styled.div`
  display: flex;
  align-items: center;
  background-color: #333; //cambié el color de fondo a un tono más oscuro
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  margin-right: 20px;
`;

export const SBInput = styled.input`
  width: 42%; /* Achicar el ancho en un 30% */
  height: 70%; /* Achicar la altura en un 30% */
  padding: 0.35em; /* Achicar el padding en un 30% */
  margin-right: 0.35em; /* Achicar el margen derecho en un 30% */
  font-size: 0.84em; /* Achicar el tamaño de fuente en un 30% */
  border-radius: 5px;
  border: none;
  background-color: #f2f2f2;
  max-width: 70px; /* Achicar el ancho máximo en un 30% */
  &::placeholder {
    color: #aaa;
  }
`;

export const SBBtn = styled.button`
background-color: #444;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 7px 14px; /* Achicar el padding en un 30% */
  font-size: 14px; /* Achicar el tamaño de fuente en un 30% */
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;