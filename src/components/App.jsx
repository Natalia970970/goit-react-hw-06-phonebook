import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContsctList/ContsctList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';


export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number
    }

    if (contacts.find(contact => contact.name === name))      
    return alert(
      name + 'is already in contacts.'
    );

    setContacts(prevState => [contact, ...prevState]);
  }
  
  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = id => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== id)
    );
  };


  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={addContact}></ContactForm>
      <h2>Contacts</h2>
      <ContactList contacts={getVisibleContacts()} onDelete={deleteContact}></ContactList>
      <Filter onChange={changeFilter}></Filter>
    </div>
  )
}