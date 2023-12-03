import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectContacts,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import { Avatar, IconButton, Typography, Box, List } from '@mui/material';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

import { ContactCard } from 'components/ContactCard/ContactCard';
import { BasicModal } from 'components/BasicModal/BasicModal';
import { NewContactForm } from 'components/NewContactForm/NewContactForm';

// ================================================================

export const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {items.length > 0 && visibleContacts.length === 0 && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              color: '#1976d2',
            }}
          >
            <SentimentDissatisfiedOutlinedIcon sx={{ fontSize: 36 }} />
            <Typography
              color="#1976d2"
              component="h3"
              variant="h5"
              fontWeight={700}
            >
              No matches found
            </Typography>
          </Box>
        )}
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <ContactCard contact={contact} />
          </li>
        ))}
      </List>
      {items.length === 0 && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            color="#1976d2"
            component="h3"
            variant="h5"
            fontWeight={700}
          >
            Contacts list is empty
          </Typography>
        </Box>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <IconButton type="button" onClick={openModal}>
          <Avatar
            sx={{
              width: 96,
              height: 96,
              bgcolor: '#1976d2',
              ':hover': { bgcolor: '#42a5f5' },
            }}
          >
            <PersonAddAltOutlinedIcon sx={{ fontSize: 64 }} />
          </Avatar>
        </IconButton>
      </Box>
      <BasicModal
        isOpen={isModalOpen}
        onCloseModal={closeModal}
        children={<NewContactForm onClose={closeModal} />}
      />
    </>
  );
};
