import PropTypes from 'prop-types';

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

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
