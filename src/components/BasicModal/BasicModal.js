import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// ================================================================

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '4px',
  p: 4,
};

export const BasicModal = ({ isOpen, onCloseModal, children }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onCloseModal}
      sx={{
        backdropFilter: 'blur(4px)',
        backgroundColor: 'rgba(25, 118, 210, 0.5)',
      }}
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};
