import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContsctList/ContsctList';
import { Filter } from './Filter/Filter';


export const App = () => {
  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm ></ContactForm>
      <h2>Contacts</h2>
      <ContactList></ContactList>
      <Filter></Filter>
    </div>
  )
}