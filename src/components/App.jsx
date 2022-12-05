import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContsctList/ContsctList';


export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = (name) => {
      const contact = {
        id:1,
        name
      }

    this.setState({
      contact
    })
  }

  render() {
    return (
        <div>
          <ContactForm onSubmit ={this.addContact}></ContactForm>
          <ContactList contacts={this.contacts}></ContactList>
        </div>
    )
  }
}