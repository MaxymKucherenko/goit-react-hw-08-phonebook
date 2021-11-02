import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useFetchContactsQuery } from '../redux/contacts/contacts-slice';
import * as authSelectors from '../redux/auth/selectors';
import Form from '../components/Form/Form';
import ContactList from '../components/ContactList/СontactList';
import Filter from '../components/Filter/Filter';

export default function PhonebookView() {
  const [contacts, setContacts] = useState([]);

  const { data, isFetching } = useFetchContactsQuery();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    if (data) {
      setContacts(data);
    }
  }, [data]);

  const onFilterContacts = (filter) => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();

      return setContacts(
        contacts.filter((contact) =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
      );
    } else {
      setContacts(data);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="phonebook">
          <section className="addNew">
            <Form />
          </section>

          <section className="contacts">
            <h2 className="contacts__title">Contacts</h2>
            <Filter filter={onFilterContacts} />
            <ContactList contacts={contacts} isFetching={isFetching} />
          </section>
        </div>
      ) : (
        <div>
          <h1>Please login to access to your phonebook</h1>
        </div>
      )}
    </>
  );
}
