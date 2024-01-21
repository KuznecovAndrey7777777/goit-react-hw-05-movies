import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #3498db;
  font-weight: 600;
  gap: 7px;
  margin-bottom: 20px;

  &:hover {
    color: #2980b9;
  }
`;
