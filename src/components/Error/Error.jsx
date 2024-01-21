import React from 'react';
import PropTypes from 'prop-types';
import { ErrorText } from './Error.styled';

const Error = ({ errorText }) => {
  return <ErrorText>{errorText}</ErrorText>;
};

Error.propTypes = {
  errorText: PropTypes.string,
};

export default Error;
