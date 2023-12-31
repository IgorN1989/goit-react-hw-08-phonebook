import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import { Box, Button, TextField } from '@mui/material';

// ================================================================

export const NewContactForm = ({ onClose }) => {
  const [isNumber, setIsNumber] = useState(true);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const checkNewContact = name => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const checkNumber = e => {
    const value = e.target.value;
    if (value.length === 0) {
      setIsNumber(true);
      return;
    }

    if (isNaN(value)) {
      setIsNumber(false);
      return;
    }

    setIsNumber(true);
  };

  const onAddContact = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (checkNewContact(name)) {
      toast.error(`${name} is already in contacts.`);
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
        fullWidth
        required
        onChange={checkNumber}
        error={!isNumber}
        helperText="Please enter only numbers"
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
