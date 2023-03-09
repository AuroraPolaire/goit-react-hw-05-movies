import React from 'react';
import { StyledForm } from './Form';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

const Form = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name') ?? '';

  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.input.value.trim();

    if (query === '') {
      toast.error('The input is empty!');
      return;
    }
    onSubmit(event.target.input.value);
  };
  return (
    <div>
      <StyledForm>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Enter a movie"
              name="input"
              value={name}
              onChange={e => setSearchParams({ name: e.target.value.trim() })}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </StyledForm>
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
