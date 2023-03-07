import PropTypes from 'prop-types';

import css from './Filter.module.css';

export const Filter = ({ handleChange, value }) => {
  return (
    <div className={css.filter__item}>
      <h3 className={css.filter__title}>Find contacts by name</h3>
      <input
        className={css.filter__input}
        type="text"
        value={value}
        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
        onChange={handleChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
