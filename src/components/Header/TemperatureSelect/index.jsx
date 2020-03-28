import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { changeDegreesType } from '../../../features/configuration';
import { useDispatch } from 'react-redux';

const TemperatureSelect = () => {
  const dispatch = useDispatch()
    const changeDegreesHandler = (type) => {dispatch(changeDegreesType(type))}
    return (
      <>
       <button onClick={() => changeDegreesHandler('c')} className={styles['celsius']} value='c'>&deg;C</button>
    <button onClick={() => changeDegreesHandler('f')} className={styles['fahrenheit']} value='f'>&deg;F</button>
      </>
    )
}

export default TemperatureSelect
