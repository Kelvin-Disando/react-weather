import React , {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { userSearchWeatherRequest } from '../../../features/configuration';
import { useDispatch } from 'react-redux';

const SearchBar = ({inputPlaceholder, submitButton}) => {
  const dispatch = useDispatch()
  const [inputData, changeInput] = useState('')
  const inputHandler = (e) => {changeInput(e.target.value)} 
  const searchWeatherAction = () => {dispatch(userSearchWeatherRequest(inputData))}
    return (
      <>
        <input onChange={inputHandler} className={styles['search_input']} type="text" placeholder={inputPlaceholder} required />
    <button onClick={searchWeatherAction} className={styles['search_submit']}>{submitButton}</button>
      </>
    )
}

export default SearchBar
