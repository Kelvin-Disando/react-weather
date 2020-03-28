import React , { useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {initWeatherApp} from '../../features/configuration'
import Preloader from '../Preloader'
import styles from './styles.module.scss'

function Layout({children}) {

  const dispatch = useDispatch();
  const backgroundImg = useSelector(state => state.configuration.app.background)
  const additionStyles = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  const loadingState = useSelector(state => state.configuration.firstLaunch)
  useEffect(() => {
    dispatch(initWeatherApp())
  }, [])
  debugger
  return (
    <div className={styles.wrapper} style={additionStyles}>
    {loadingState && <Preloader/>}
    {!loadingState && children}
    </div>
  );
}

export default Layout