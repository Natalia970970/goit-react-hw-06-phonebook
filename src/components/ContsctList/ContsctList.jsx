import {List, ListItem} from './ContsctList.styled'
import propTypes from 'prop-types';


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
    contacts: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            number: propTypes.string.isRequired,
        })
    ).isRequired,
};