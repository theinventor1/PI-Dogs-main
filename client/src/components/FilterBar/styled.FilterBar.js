import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  width: 140px; /* Reducir el ancho en un 30% */
  height: 21px; /* Reducir la altura en un 30% */
  margin-right: 7px; /* Reducir el margin-right en un 30% */
  padding: 3.5px; /* Reducir el padding en un 30% */
  border-radius: 3.5px;
`;

export const Button = styled.button`
  background-color: #444;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 3.5px;
  padding: 4.9px 9.8px; /* Reducir el padding en un 30% */
  font-size: 9.8px; /* Reducir el tamaño de fuente en un 30% */
  margin-right: 14px; /* Reducir el margin-right en un 30% */
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

export const LoadingText = styled.div`
  margin-right: 7px; /* Reducir el margin-right en un 30% */
`;
export const Input = styled.input`
  width: 20%;
  height: 15px;
  padding: 0.5em;
  margin-right: 0.5em;
  font-size: 0.8em;
  border-radius: 3.5px;
  border: none;
  background-color: #f2f2f2;
  max-width: 120px;
  &::placeholder {
    color: #aaa;
  }
`;
