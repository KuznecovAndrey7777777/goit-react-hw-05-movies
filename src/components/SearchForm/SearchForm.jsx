import { FormButton, Form, FormInput } from './SearchForm.styled';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

const SearchForm = ({ setParams }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value.trim().toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();

    setParams(query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput type="text" name="search" onChange={handleChange} />
      <FormButton type="submit">
        <FaSearch size="30" />
      </FormButton>
    </Form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  setParams: PropTypes.func.isRequired,
};
