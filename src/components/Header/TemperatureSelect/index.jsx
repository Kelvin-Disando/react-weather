import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const TemperatureSelect = () => {
    
    return (
      <>
       <button className={styles['celsius']} value='c'>&deg;C</button>
    <button className={styles['fahrenheit']} value='f'>&deg;F</button>
      </>
    )
}

export default TemperatureSelect
