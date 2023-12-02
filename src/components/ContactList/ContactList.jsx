import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectContacts,
  selectVisibleContacts,
} from 'redux/contacts/selectors';

import { List, ContactListMessage } from './ContactList.styled';
import { ContactCard } from 'components/ContactCard/ContactCard';

import { fetchContacts } from 'redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {items.length > 0 && visibleContacts.length === 0 && (
        <ContactListMessage>No matches found</ContactListMessage>
      )}
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <ContactCard contact={contact} />
        </li>
      ))}
    </List>
  );
};
