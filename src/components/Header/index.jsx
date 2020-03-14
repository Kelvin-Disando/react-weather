import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import LanguageSelect from './LanguageSelect'
import TemperatureSelect from './TemperatureSelect'
import SearchBar from './SearchBar'
import img from '../../assets/images/refresh-icon.svg'

const Header = () => {
    return (
        <header className={styles['header']}>
             <div className={styles['header--operations']}>
                <button className={styles['header--operations_refresh']}><img src={img} alt="" /></button>
                <div className={styles['header--wrapper']}>
                  <LanguageSelect/>
                </div>
                <div className={styles['header--temperature']}>
                <TemperatureSelect styles={'header--temperature'}/>
                </div>
            </div>
            <div className={styles['header--search']}>
               <SearchBar/>
        </div>
        </header>
    );
};

export default Header
