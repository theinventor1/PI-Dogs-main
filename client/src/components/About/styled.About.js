import styled from 'styled-components'

export const AboutContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AboutImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
`

export const AboutDescription = styled.p`
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 20px;
`

export const AboutTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`

export const AboutButton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`
