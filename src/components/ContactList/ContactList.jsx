import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectContactsOffset,
  selectContactsPerPage,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { ContactListItem, Notification, Pagination } from 'components';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const contactOffset = useSelector(selectContactsOffset);
  const contactsPerPage = useSelector(selectContactsPerPage);
  const endOffset = contactOffset + contactsPerPage;
  const visibleContacts = useSelector(selectVisibleContacts);
  const currentContacts = visibleContacts?.slice(contactOffset, endOffset);

  return (
    <>
      <List>
        {currentContacts?.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </List>
      {!isLoading && contacts?.length === 0 && (
        <Notification message="There are no contacts yet. Please, add someone!" />
      )}
      {!!contacts?.length && !visibleContacts.length && (
        <Notification message="No contacts found..." />
      )}
      <Pagination />
    </>
  );
};
