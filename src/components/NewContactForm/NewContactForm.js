import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import { Box, Button, TextField } from '@mui/material';

// ================================================================

export const NewContactForm = ({ onClose }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const checkNewContact = name => {
    console.log(name);
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const onAddContact = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (checkNewContact(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
    toast.success(`Contact ${name} was added!`);
    onClose();
  };

  return (
    <Box component="form" autoComplete="off" onSubmit={onAddContact}>
      <TextField
        margin="normal"
        label="Name"
        name="name"
        fullWidth
        autoFocus
        required
      />
      <TextField
        margin="normal"
        label="Number"
        name="number"
        type="tel"
        fullWidth
        required
      />

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
        Add contact
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
