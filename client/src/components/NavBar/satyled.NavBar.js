import styled from 'styled-components';

export const NavCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333; //cambié el color de fondo a un tono más oscuro
  height: 60px;
  padding: 0 20px;
`;
export const Tit1 = styled.h1`
  font-size: 20px;
  color: #666;
  margin-bottom: 10px;  
  text-align: center;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBtn = styled.button`
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
