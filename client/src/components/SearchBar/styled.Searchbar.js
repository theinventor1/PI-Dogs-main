import styled from 'styled-components';

export const SBCont = styled.div`
  display: flex;
  align-items: center;
  background-color: #333;
  border-radius: 3.5px;
  height: 28px;
  padding: 0 14px;
  margin-right: 14px;
`;

export const SBInput = styled.input`
  width: 40%; /* Cambia el ancho según tus necesidades */
  height: 30px; /* Cambia la altura según tus necesidades */
  padding: 0.5em; /* Cambia el padding según tus necesidades */
  font-size: 0.8em; /* Cambia el tamaño de fuente según tus necesidades */
  border-radius: 3.5px;
  border: none;
  background-color: #f2f2f2;
  margin-right: 8px;
  &::placeholder {
    color: #aaa;
  }
`;

export const SBBtn = styled.button`
  background-color: #444;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 3.5px;
  padding: 4.9px 9.8px;
  font-size: 9.8px;
  margin-right: 14px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;