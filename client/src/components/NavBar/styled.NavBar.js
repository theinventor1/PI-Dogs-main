import styled from 'styled-components';

export const NavCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  height: 42px; // Reducir la altura en un 30%
  padding: 0 14px; // Reducir el padding en un 30%
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
  border-radius: 3.5px; // Reducir el border-radius en un 30%
  padding: 4.9px 9.8px; // Reducir el padding en un 30%
  font-size: 9.8px; // Reducir el font-size en un 30%
  margin-right: 14px; // Reducir el margin-right en un 30%
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;
