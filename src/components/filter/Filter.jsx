import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';

import { FilterTitle, FilterContainer } from './Filter.styled';

import { filterSlice } from '../../redux/filter/slice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterContainer>
      <FilterTitle>Find contacts by Name</FilterTitle>
      <TextField
        onChange={e => dispatch(filterSlice(e.target.value))}
        required
        type="text"
        name="name"
        label="Enter contact name"
        variant="filled"
        InputLabelProps={{
          style: { color: '#000' },
        }}
      />
    </FilterContainer>
  );
};

export default Filter;
