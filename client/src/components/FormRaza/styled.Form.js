import styled from 'styled-components';

export const Cont = styled.div`
  border-radius: 10px;
  border: 2px solid #c2c2c2;
  background-color: #f9f9f9;
  padding: 20px;
  margin: 15px auto; // Reducir el valor de margin a la mitad
  width: 300px; // Reducir el ancho de la tarjeta en un 30%
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Tit1 = styled.h1`
  font-size: 20px;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
  color: #666;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  margin-top: 5px;
  outline: none;
`;

export const Select = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: #444;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    background-color: #222;
  }
`;
