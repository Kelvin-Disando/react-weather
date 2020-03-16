import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const SearchBar = ({inputPlaceholder, submitButton}) => {
    return (
      <>
        <input className={styles['search_input']} type="text" placeholder={inputPlaceholder} required />
    <button className={styles['search_submit']}>{submitButton}</button>
      </>
    )
}

export default SearchBar
