import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import {
  StyledContactForm,
  StyledLabelForm,
  StyledInputForm,
  StyledButtonForm,
} from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <StyledContactForm onSubmit={this.handleSubmit}>
        <StyledLabelForm htmlFor={this.nameInputId}>
          Name
          <StyledInputForm
            id={this.nameInputId}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </StyledLabelForm>
        <StyledLabelForm htmlFor={this.numberInputId}>
          Number
          <StyledInputForm
            id={this.numberInputId}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </StyledLabelForm>
        <StyledButtonForm type="submit">Add contact</StyledButtonForm>
      </StyledContactForm>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
