import { ContactForm } from 'components/ContactForm/ContactForm';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { ContactListMessage } from 'components/ContactList/ContactList.styled';
import { Loader } from 'components/Loader/Loader';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export default function Contacts() {
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <ContactForm />
      {isLoading && <Loader />}
      <h2>CONTACTS</h2>
      {error ? (
        <ContactListMessage>
          {error}! Please reload this page!
        </ContactListMessage>
      ) : (
        <div>
          <Filter />
          <ContactList />
          {items.length === 0 && (
            <ContactListMessage>Contacts list is empty</ContactListMessage>
          )}
        </div>
      )}
    </div>
  );
}
