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
  width: 60%;
  height: 100%;
  padding: 0.5em;
  margin-right: 0.5em;
  font-size: 1.2em;
  border-radius: 5px;
  border: none;
  background-color: #f2f2f2;
  max-width: 100px;

  &::placeholder {
    color: #aaa;
  }
`;

export const SBBtn = styled.button`
background-color: #444;
color: #fff;
border: 2px solid #fff; //agregué un borde sólido alrededor del botón
border-radius: 5px;
padding: 10px 20px;
font-size: 16px;
margin-right: 20px;
cursor: pointer;
&:hover {
  background-color: #555;
}
`;