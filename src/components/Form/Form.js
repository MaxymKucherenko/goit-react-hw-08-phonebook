import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from '../../redux/contacts/contacts-slice';
import './Form.css';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const found = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (found === undefined) {
      addContact({ name, number });
      toast.success('Contact added');
      reset();
    } else {
      alert(`${name} is already in the Contact List`);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className="submit__form" onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc. "
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor={numberInputId}>
          <h2>Number</h2>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>

        <button className="submit__btn" type="submit" disabled={isLoading}>
          Add contact
        </button>
      </form>
      <div>
        <Toaster />
      </div>
    </>
  );
}
