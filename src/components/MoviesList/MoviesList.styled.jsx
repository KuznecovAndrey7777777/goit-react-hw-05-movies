import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  flex-wrap: wrap;
  gap: 15px;
  display: flex;
  padding: 0;
`;

export const Card = styled.li`
  border-radius: 12px;
  width: 300px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.03);
  }
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  margin-top: 10px;
`;

export const Img = styled.img`
  border-radius: 12px;
  width: 300px;
  height: 450px;
`;
