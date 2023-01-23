import { nanoid } from 'nanoid';

const Filter = ({ value, onChange }) => {
  const filterId = nanoid();
  return (
    <label htmlFor={filterId}>
      Find contacts by name
      <input
        id={filterId}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

export default Filter;
