const ContactItem = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <li key={id}>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => deleteContact(id)} type="button">
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
