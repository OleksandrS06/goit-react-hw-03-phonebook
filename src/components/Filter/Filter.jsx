import PropTypes from 'prop-types';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <input
      value={filter}
      type="tel"
      name="filter"
      onChange={handleFilterChange}
    ></input>
  );
};
export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
