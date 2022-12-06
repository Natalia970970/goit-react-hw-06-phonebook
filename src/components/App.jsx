import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContsctList/ContsctList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContact = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number
    }

    if (this.state.contacts.find(contact => contact.name === name))      
    return alert(
      name + 'is already in contacts.'
    );

    this.setState({
      contacts: [...this.state.contacts, contact],
      name,
      number,
    });
  }


  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };


  render() {
    return (
        <div>
          <h2>Phonebook</h2>
          <ContactForm onSubmit={this.addContact}></ContactForm>
          <h2>Contacts</h2>
          <ContactList contacts={this.getVisibleContacts()} onDelete={this.deleteContact}></ContactList>
          <Filter onChange={this.changeFilter}></Filter>
        </div>
    )
  }
}