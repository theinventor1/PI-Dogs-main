import styled from 'styled-components';
export const Cont = styled.div`
  border-radius: 10px;
  border: 3px solid #c2c2c2;
  background-color: #f9f9f9;
  padding: 20px;
  margin: 25px auto; // Reducir el valor de margin a la mitad
  width: 210px; // Reducir el ancho de la tarjeta en un 30%
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Tit2 = styled.h2`
  font-size: 20px;
  color: #666;
  margin-bottom: 10px;  
  text-align: center;
`;
export const BtnCont = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const Btn = styled.button`
  background-color: #444;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer; 
  flex: 1;
`;
export const Img = styled.img`
  width: 200px;
  height: auto;
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
`;