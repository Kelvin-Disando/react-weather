import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import LanguageSelect from './LanguageSelect'
import TemperatureSelect from './TemperatureSelect'
import SearchBar from './SearchBar'
import img from '../../assets/images/refresh-icon.svg'
import { refreshApp } from '../../features/configuration';


const Header = () => {
    
    const headerState = useSelector(state => state.configuration.app.header)
    const language = useSelector(state => state.configuration.language);
    const dispatch = useDispatch()
    const changeBackgroundHandler = () => {dispatch(refreshApp())} 

    return (
        <header className={styles['header']}>
             <div className={styles['header--operations']}>
                <button onClick={changeBackgroundHandler} className={styles['header--operations_refresh']}><img src={img} alt="" /></button>
                <div className={styles['header--wrapper']}>
                  <LanguageSelect/>
                </div>
                <div className={styles['header--temperature']}>
                <TemperatureSelect styles={'header--temperature'}/>
                </div>
            </div>
            <div className={styles['header--search']}>
               <SearchBar inputPlaceholder={headerState.search.input[language]} submitButton={headerState.search.submit[language]}/>
        </div>
        </header>
    );
};

export default Header
