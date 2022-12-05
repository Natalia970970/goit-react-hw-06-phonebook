import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContsctList/ContsctList';
import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number
    }

    this.setState({
      contacts: [...this.state.contacts, contact],
      name,
      number,
    })
  }

  render() {
    return (
        <div>
          <h2>Phonebook</h2>
          <ContactForm onSubmit={this.addContact}></ContactForm>
          <h2>Contacts</h2>
          <ContactList contacts={this.state.contacts}></ContactList>
        </div>
    )
  }
}