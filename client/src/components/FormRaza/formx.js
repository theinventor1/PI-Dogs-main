import styled from 'styled-components';
const FormContainer = styled.div`
  border-radius: 10px;
  border: 3px solid #c2c2c2;
  background-color: #f9f9f9;
  padding: 20px;
  margin: 25px auto;
  width: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const FormTitle = styled.h2`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
  text-align: center;
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
const Label = styled.label`
  margin-bottom: 5px;
`;
const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
const Button = styled.button`
  background-color: #444;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;