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
    })
  }

  render() {
    return (
        <div>
          <ContactForm onSubmit={this.addContact}></ContactForm>
          <ContactList contacts={this.state.contacts}></ContactList>
        </div>
    )
  }
}