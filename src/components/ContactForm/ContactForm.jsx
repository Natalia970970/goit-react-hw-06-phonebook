import { useState } from 'react';
import { Label, Form } from './ContactForm.styled'

export const ContactForm = ({onSubmit}) => {
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
    
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(name, number);
        resetForm()
    };

    const resetForm = () => {
        setName('');
        setNumber('');
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