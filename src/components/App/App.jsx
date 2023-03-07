import { useSelector, useDispatch } from 'react-redux';

import { addContact, deleteContact } from 'Redux/contacts/contacts-actions';
import { setFilter } from 'Redux/filter/filter-actions';
import {
  getContacts,
  getFilteredContacts,
} from 'Redux/contacts/contacts-selectors';
import { getFilter } from 'Redux/filter/filter-selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import css from './App.module.css';

export function App() {
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleAddContact = (name, number) => {
    const newContactItem = { name, number };

    if (
      contacts.find(
        item => item.name.toLowerCase() === newContactItem.name.toLowerCase()
      )
    ) {
      return alert(`${newContactItem.name} is already in contacts!`);
    }

    dispatch(addContact(newContactItem));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <div className={css.phonebook}>
      <h1 className={css.main__title}>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <div>
        <h2 className={css.main__title}>Contacts</h2>
        <Filter handleChange={handleFilter} value={filter} />
        <ContactList
          deleteBtn={handleDeleteContact}
          contact={filteredContacts}
        />
      </div>
    </div>
  );
}
