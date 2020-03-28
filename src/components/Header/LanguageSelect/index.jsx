import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { changeLanguageAction } from '../../../features/configuration';


const LanguageSelect = () => {
    const dispatch = useDispatch()
    const changeLanguageHandler = (e) => {dispatch(changeLanguageAction(e.target.value))}
    return (
        <select onChange={changeLanguageHandler} className={styles['language_select']}>
        <option className={styles['language_select--option']} value="en">en</option>
        <option className={styles['language_select--option']} value="ru">ru</option>
        <option className={styles['language_select--option']} value="be">be</option>
    </select>
    )
}

export default LanguageSelect
