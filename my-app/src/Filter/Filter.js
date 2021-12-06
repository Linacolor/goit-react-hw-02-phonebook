import React from 'react';
import PropTypes from 'prop-types';
import s from './filter.module.css';

function Filter({ value, onChangeFilter }) {
  return (
    <div className={s.filter}>
      <span className={s.label}>Find contacts by name</span>
      <input
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onchangeFilter: PropTypes.func.isRequired,
};

export default Filter;
