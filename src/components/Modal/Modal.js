import Modal from 'react-modal';
import { UpdateForm } from 'components/UpdateForm/UpdateForm';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(4px)',
    zIndex: 1200,
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const UpdateModal = ({ id, name, number, isOpen, onCloseModal }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onCloseModal} style={customStyles}>
      <UpdateForm
        id={id}
        currentName={name}
        currentNumber={number}
        onClose={onCloseModal}
      />
    </Modal>
  );
};
