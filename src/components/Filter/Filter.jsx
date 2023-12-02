import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/contacts/filterSlice';

import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';
import { Box, TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = e => dispatch(setFilter(e.target.value));

  return (
    <FilterContainer>
      <SearchTwoToneIcon fontSize="large" />
      <TextField
        sx={{ display: 'flex' }}
        label="Find contact"
        onChange={onChangeFilter}
      />
    </FilterContainer>
  );

  // return (
  //   <FilterContainer>
  //     <FilterLabel htmlFor="filter">
  //       Find contact by name
  //       <FilterInput
  //         type="text"
  //         name="filter"
  //         placeholder="Search"
  //         onChange={onChangeFilter}
  //       />
  //     </FilterLabel>
  //   </FilterContainer>
  // );
};
