import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';

export function ContactForm({ onSubmit }) {
  const [contact, setContacts] = useState({ name: '', number: '' });

  const { name, number } = contact;

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    setContacts(prevValue => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(contact.name, contact.number);

    reset();
  };

  const reset = () => {
    setContacts({ name: '', number: '' });
  };

  return (
    <form className={css.contact__form} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>
        Name
        <input
          className={css.input__name}
          placeholder="exemple: Rosie Simpson"
          type="text"
          name="name"
          id={nameInputId}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
        />
      </label>

      <label htmlFor={numberInputId}>
        Number
        <input
          className={css.input__number}
          placeholder="exemple: 123-12-12"
          type="tel"
          name="number"
          id={numberInputId}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
        />
      </label>

      <button type="submit" className={css.input__btn}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
