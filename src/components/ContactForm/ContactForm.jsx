import { useState } from 'react';
import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/ContactsSlice';
import { Label, Form } from './ContactForm.styled'

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.contacts);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = event => {
        switch (event.currentTarget.name) {
            case 'name':
                setName(event.currentTarget.value);
                break;
            case 'number':
                setNumber(event.currentTarget.value);
                break;
        
            default:
                break;
        }
    };
    
    const handleSubmit = e => {
        e.preventDefault();

    const name = e.currentTarget.elements[0].value;
    const number = e.currentTarget.elements[1].value;

    if (contacts.some(contact => contact.name === name)) {
        window.alert(`${name} is already in contacts`);
        e.currentTarget.reset();
        return;
    }
    dispatch(
        addContact({
            name: name,
            id: nanoid(),
            number: number,
        })
    );
    e.currentTarget.reset();
    };

        return (
            <Form onSubmit={handleSubmit}>
                <Label>
                    Name
                    <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        value={name}
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        required
                    />
                </Label>
                <Label htmlFor="">
                    Number
                    <input
                        onChange={handleChange}
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
                <button type="submit">Add contact</button>
            </Form>
        )
}