import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/contacts/filterSlice';

import { Box, TextField } from '@mui/material';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';

// ================================================================

export const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = e => dispatch(setFilter(e.target.value));

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 4,
        color: '#1565c0',
      }}
      onChange={onChangeFilter}
    >
      <PersonSearchOutlinedIcon fontSize="large" />
      <TextField
        sx={{ display: 'flex' }}
        label="Find contact"
        fullWidth
      ></TextField>
    </Box>
  );
};
