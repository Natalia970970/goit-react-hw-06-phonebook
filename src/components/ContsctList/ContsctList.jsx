export const ContactList = ({contacts}) => {
    return (
        <ul>
            {contacts.map(({id, name}) => {
            return (
                <li key={id}>
                    {name}
                </li>
            );
        })}
        </ul>
    );
};