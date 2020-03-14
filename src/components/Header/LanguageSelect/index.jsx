import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const LanguageSelect = () => {
    return (
        <select className={styles['language_select']}>
        <option className={styles['language_select--option']} value="en">en</option>
        <option className={styles['language_select--option']} value="ru">ru</option>
        <option className={styles['language_select--option']} value="be">be</option>
    </select>
    )
}

export default LanguageSelect
