import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  max-width: 300px;
  background-color: #ecf0f1;
  border-radius: 4px;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 18px;
`;

export const FormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: #3498db;

  :hover {
    opacity: 1;
  }
`;

export const FormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  border: none;
  outline: none;
  padding: 10px;
  ::placeholder {
    font: inherit;
    font-size: 14px;
  }
`;
