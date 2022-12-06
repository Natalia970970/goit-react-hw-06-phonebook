import {List, ListItem} from './ContsctList.styled'

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