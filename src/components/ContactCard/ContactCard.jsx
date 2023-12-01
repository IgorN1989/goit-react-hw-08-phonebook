import { useDispatch } from 'react-redux';
import { BsPersonFillX } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { useState } from 'react';

import { UpdateModal } from 'components/Modal/Modal';
import { deleteContact } from 'redux/contacts/operations';

import { ContactContainer, Phone, DeleteBtn } from './ContactCard.styled';

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
    <ContactContainer>
      <div>
        <p>
          {name}: <Phone>{number}</Phone>
        </p>
      </div>
      <button onClick={openModal}>Update</button>
      <DeleteBtn id={id} onClick={() => onDeleteContact(id)}>
        <BsPersonFillX />
        Delete
      </DeleteBtn>
      <UpdateModal
        id={id}
        name={name}
        number={number}
        isOpen={isModalOpen}
        onCloseModal={closeModal}
      />
    </ContactContainer>
  );
};
