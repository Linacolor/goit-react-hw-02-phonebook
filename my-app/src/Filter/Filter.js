import React from 'react';
import PropTypes from 'prop-types';
import s from './filter.module.css';

function Filter({ value, onChangeFilter }) {
  return (
    // className={s.filter}
    // className={s.label}
    <div className={s.filter}>
      <label htmlFor="name" className={s.label}>
        Find contact by name
        <input
          type="text"
          name="name"
          className={s.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={value}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onInput={e => {
            onChangeFilter(e.target.value);
          }}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onchangeFilter: PropTypes.func.isRequired,
};

export default Filter;
