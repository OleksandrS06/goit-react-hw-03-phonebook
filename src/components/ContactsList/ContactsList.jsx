import PropTypes from 'prop-types';
import css from './ContactsList.module.css';
const ContactsList = ({ filtered, deleteBtHandler }) => {
  return (
    <ul className={css.contactList}>
      {filtered.map(el => {
        return (
          <li key={el.id} className={css.contactList__item}>
            <span>{el.name}</span>
            <span className={css.number}>{el.number}</span>
            <button onClick={() => deleteBtHandler(el.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactsList;

ContactsList.propTypes = {
  filtered: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
