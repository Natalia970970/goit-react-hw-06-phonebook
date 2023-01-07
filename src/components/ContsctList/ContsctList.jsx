import {List, ListItem} from './ContsctList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/ContactsSlice';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filter);

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    const deleteContactById = contactId => {
        dispatch(deleteContact(contactId));
    };

    const visibleContacts = getVisibleContacts();

    return (
        <List>
            {visibleContacts.map(({id, name, number}) => {
            return (
                <ListItem key={id}>
                    {name}: {number}
                    <button type='button' onClick={() => deleteContactById(id)}>Delete</button>
                </ListItem>
            );
        })}
        </List>
    );
};
