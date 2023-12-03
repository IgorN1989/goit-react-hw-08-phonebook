import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { deleteContact } from 'redux/contacts/operations';

import { Avatar, Box, Paper, Typography, IconButton } from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

import { BasicModal } from 'components/BasicModal/BasicModal';
import { EditForm } from 'components/EditForm/EditForm';

// ================================================================

export const ContactCard = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    toast.success('Contact was deleted!');
  };

  return (
    <Paper
      elevation={12}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 2,
        pl: { xs: 2, md: 4 },
        pr: { xs: 1, md: 2 },
        background:
          'linear-gradient(90deg, rgba(21,101,192,1) 33%, rgba(25,118,210,1) 66%, rgba(66,165,245,1) 100%)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'start', sm: 'center' },
          gap: 1,
          color: 'white',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontSize: { xs: 0, sm: 20, md: 24 },
          }}
        >
          <Avatar sx={{ bgcolor: 'white', color: '#1565c0', mr: 1 }} />
          <Typography
            component="p"
            variant="h6"
            sx={{ fontSize: { xs: 16, sm: 20, md: 24 }, mr: 1 }}
          >
            {name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontSize: { xs: 16, sm: 20, md: 24 },
          }}
        >
          <LocalPhoneOutlinedIcon />
          <Typography
            component="p"
            variant="h6"
            sx={{ fontSize: { xs: 16, sm: 20, md: 24 } }}
          >
            {number}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: 0.5,
          alignItems: 'center',
        }}
      >
        <IconButton type="button" onClick={openModal}>
          <Avatar
            sx={{
              bgcolor: 'white',
              color: '#1565c0',
              ':hover': { bgcolor: '#1565c0', color: 'white' },
            }}
          >
            <EditOutlinedIcon />
          </Avatar>
        </IconButton>
        <IconButton type="button" id={id} onClick={() => onDeleteContact(id)}>
          <Avatar
            sx={{
              bgcolor: 'white',
              color: '#1565c0',
              ':hover': { bgcolor: '#1565c0', color: 'white' },
            }}
          >
            <ClearOutlinedIcon />
          </Avatar>
        </IconButton>
      </Box>

      <BasicModal
        isOpen={isModalOpen}
        onCloseModal={closeModal}
        children={
          <EditForm
            id={id}
            currentName={name}
            currentNumber={number}
            onClose={closeModal}
          />
        }
      />
    </Paper>
  );
};
