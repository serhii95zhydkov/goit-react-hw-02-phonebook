import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          ></ContactItem>
        );
      })}
    </ul>
  );
};

export default ContactList;
