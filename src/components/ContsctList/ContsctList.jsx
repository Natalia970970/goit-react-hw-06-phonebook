import {List, ListItem} from './ContsctList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/ContactsSlice';

import PropTypes from 'prop-types';

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

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
};