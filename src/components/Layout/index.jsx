import React , { useEffect }from 'react';
import { useDispatch } from 'react-redux';
import {initWeatherApp} from '../../features/configuration'

function Layout({children}) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initWeatherApp())
  }, [])
  return (
    <div className='wrapper'>
    {children}
    </div>
  );
}

export default Layout