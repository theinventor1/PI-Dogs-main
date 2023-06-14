import styled from 'styled-components';
export const AppCont = styled.div`
background-color: #f0f0f0;
padding: 15px;
border: 2px solid #000;
border-radius: 10px;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;
export const Cont = styled.div`
  border-radius: 6px;
  border: 2px solid #555;
  background-color: #f9f9f9;
  padding: 8px;
  margin: 15px auto;
  width: 130px;
  height: 60%; // Reducir el alto del contenedor en un 20%
  //display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
`;

export const Conx = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: space-between;
`;