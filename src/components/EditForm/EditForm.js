import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { updateContact } from 'redux/contacts/operations';

import { Box, Button, TextField } from '@mui/material';

// ================================================================

export const EditForm = ({ id, currentName, currentNumber, onClose }) => {
  const dispatch = useDispatch();

  const onUpdateContact = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const contactId = form.id;
    const newName = form.elements.name.value;
    const newNumber = form.elements.number.value;
    dispatch(updateContact(contactId, { name: newName, number: newNumber }));
    toast.success(`Contact ${newName} was updated!`);
    onClose();
  };

  return (
    <Box component="form" autoComplete="off" onSubmit={onUpdateContact} id={id}>
      <TextField
        margin="normal"
        label="Current Name"
        name="name"
        defaultValue={currentName}
        fullWidth
        autoFocus
        required
      />
      <TextField
        margin="normal"
        label="Current Number"
        name="number"
        type="tel"
        defaultValue={currentNumber}
        fullWidth
        required
      />

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
        Update contact
      </Button>
      <Button
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 2 }}
        onClick={onClose}
      >
        Cancel
      </Button>
    </Box>
  );
};