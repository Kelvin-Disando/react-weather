import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.scss';
import LocationData from './LocationData';
import ForecastToday from './ForecastToday';
import ForecastWeek from './ForecastWeek';
import Coordinates from './Coordinates';

const Main = () => {

  const mainState = useSelector(state => state.configuration.app.main);
  const language = useSelector(state => state.configuration.language);
  
  return (
    <div className="main">
      <LocationData city={mainState.city[language]} country={mainState.country[language]} day={mainState.date.day[language]} figure={mainState.date.figure} month={mainState.date.month[language]} time={mainState.date.time} />
      <div className="primary_data">
        <div className="primary_data--forecast">
          <ForecastToday />
          <div className="forecast_week">
            <ForecastWeek />
            <ForecastWeek />
            <ForecastWeek />
          </div>
        </div>
        <div className="primary_data--map">
          <div className="map_wrapper">
            <div id="map">
            </div>
          </div>
          <Coordinates />
        </div>
      </div>
    </div>
  );
};

export default Main
