import {List, ListItem} from './ContsctList.styled'

export const ContactList = ({contacts}) => {
    return (
        <List>
            {contacts.map(({id, name, number}) => {
            return (
                <ListItem key={id}>
                    {name}: {number}
                </ListItem>
            );
        })}
        </List>
    );
};