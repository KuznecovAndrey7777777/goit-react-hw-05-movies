import React from 'react';
import { CgArrowLeftR } from 'react-icons/cg';
import { StyledLink } from './BackLink.styled';

const BackLink = ({ to }) => {
  return (
    <StyledLink to={to}>
      <CgArrowLeftR /> <span>Go Back</span>
    </StyledLink>
  );
};

export default BackLink;
