import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const SearchBar = () => {
    return (
      <>
        <input className={styles['search_input']} type="text" placeholder="" required />
        <button className={styles['search_submit']}></button>
      </>
    )
}

export default SearchBar
