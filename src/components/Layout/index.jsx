import React , { useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {initWeatherApp} from '../../features/configuration'
import Preloader from '../Preloader'

function Layout({children}) {
  const dispatch = useDispatch();
  const loadingState = useSelector(state => state.configuration.firstLaunch)
  useEffect(() => {
    dispatch(initWeatherApp())
  }, [])
  return (
    <div className='wrapper'>
    {loadingState && <Preloader/>}
    {!loadingState && children}
    </div>
  );
}

export default Layout