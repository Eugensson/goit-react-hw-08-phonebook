import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  ContactInfo,
  InfoWrapper,
  ContactsList,
  ContactsItem,
  DeleteBtn,
} from './Contacts.styled';

import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import { useSelectors } from '../../hooks/UseSelector';
import Notification from '../notafication/Notafication';

const Contact = () => {
  const dispatch = useDispatch();

  const { contacts, filter, isLoggedIn } = useSelectors();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter ? filter.toLowerCase() : '';

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ContactsList>
      {isLoggedIn && visibleContacts.length > 0 ? (
        visibleContacts.map(({ id, name, number }) => (
          <ContactsItem key={id}>
            <InfoWrapper>
              <ContactInfo>{name}:</ContactInfo>
              <ContactInfo>{number}</ContactInfo>
            </InfoWrapper>
            <DeleteBtn onClick={e => dispatch(deleteContact(id))}>
              Delete
            </DeleteBtn>
          </ContactsItem>
        ))
      ) : (
        <Notification />
      )}
    </ContactsList>
  );
};

export default Contact;
