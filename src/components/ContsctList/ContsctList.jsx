import {List, ListItem} from './ContsctList.styled'
import PropTypes from 'prop-types';

export const ContactList = ({contacts, onDelete}) => {
    return (
        <List>
            {contacts.map(({id, name, number}) => {
            return (
                <ListItem key={id}>
                    {name}: {number}
                    <button type='button' onClick={() => onDelete(id)}>Delete</button>
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