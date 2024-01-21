import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 36px;
`;

export const Poster = styled.img`
  border-radius: 12px;
`;

export const Text = styled.p`
  > span {
    display: block;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 500;
    color: #34495e;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #e74c3c;
`;

export const WrapperInfo = styled.div`
  padding-left: 336px;
  margin-bottom: 35px;
`;

export const List = styled.ul`
  display: flex;
  gap: 71px;
`;
