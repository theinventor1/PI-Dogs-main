import styled from 'styled-components';

export const NavCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333; //cambié el color de fondo a un tono más oscuro
  height: 60px;
  padding: 0 20px;
`;

export const NavFilter = styled.div`
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
