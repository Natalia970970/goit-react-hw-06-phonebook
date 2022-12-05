import { Component } from 'react';

export class ContactForm extends Component {
    state = {
        contacts: [],
        name: '',
        number: ''
    }

    handleNameChange = event => {
        this.setState({ [event.currentTarget.name]: event.currentTarget.value });
    };
    
    formReset = () => {
        this.setState({
            name: '',
            number: '',
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.name);
        this.formReset();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        onChange={this.handleNameChange}
                        type="text"
                        name="name"
                        value={this.state.name.value}
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        required
                    />
                </label>
                <button type="submit">Add contact</button>
            </form>
        )
        }
}