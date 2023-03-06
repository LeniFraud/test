import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectIsShowModal,
} from 'redux/contacts/selectors';
import {
  ContactForm,
  Filter,
  ContactList,
  Loader,
  Notification,
  AddButton,
  ModalContainer,
} from 'components';
import { Section, Container, Title, Subtitle } from './ContactsPage.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isShowModal = useSelector(selectIsShowModal);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />
        <Subtitle>Contacts</Subtitle>
        {!!contacts?.length && <Filter />}
        {isLoading && <Loader />}
        {!error ? (
          <ContactList />
        ) : (
          <Notification message="Ooops! Something went wrong..." />
        )}
        {isLoggedIn && <AddButton />}
        {isShowModal && (
          <ModalContainer>
            <div>SOME MODAL</div>
          </ModalContainer>
        )}
      </Container>
    </Section>
  );
}
