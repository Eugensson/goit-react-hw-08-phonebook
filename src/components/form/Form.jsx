import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';

import { PhoneBookForm, PhoneBookLabel, PhoneBookBtn } from './Form.styled';

import { addContact } from 'redux/contacts/operations';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };
    dispatch(addContact(contact));
    e.target.reset();
  };

  return (
    <div>
      <PhoneBookForm onSubmit={handleSubmit}>
        <PhoneBookLabel>
          Name
          <TextField
            onChange={onInputChange}
            required
            type="text"
            name="name"
            label="Leandro Kaplan"
            variant="filled"
            InputLabelProps={{
              style: { color: '#000' },
            }}
            fullWidth
          />
        </PhoneBookLabel>
        <PhoneBookLabel>
          Number
          <TextField
            onChange={onInputChange}
            InputLabelProps={{
              style: {
                color: '#000',
              },
            }}
            fullWidth
            required
            type="text"
            name="number"
            label="+38-000-000-00-00"
            variant="filled"
          />
        </PhoneBookLabel>
        <PhoneBookBtn type="submit">Add Contact</PhoneBookBtn>
      </PhoneBookForm>
    </div>
  );
};

export default Form;
