import styled from 'styled-components';

export const Contenedor = styled.div`
  border-radius: 10px;
  border: 3px solid #c2c2c2;
  background-color: #f9f9f9;
  padding: 20px;
  margin: 50px auto;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Cont = styled.div`
  border-radius: 6px;
  border: 2px solid #555;
  background-color: #f9f9f9;
  padding: 12px;
  margin: 15px auto;
  width: 126px;
  height: 80%; // Reducir el alto del contenedor en un 20%
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Tit = styled.h2`
  font-size: 24px;
  color: #666;
  margin-bottom: 10px;
  text-align: center;
`;
export const Btn = styled.button`
  background-color: #444;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  align-self: center;
`;
export const Img = styled.img`
  width: 400px;
  height: auto;
  display: block;
  margin: 20px 0;
  border: 1px solid black;
  border-radius: 5px;
`;