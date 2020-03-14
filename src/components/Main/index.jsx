import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import LocationData from './LocationData';
import ForecastToday from './ForecastToday';
import ForecastWeek from './ForecastWeek';
import Coordinates from './Coordinates';

const Main = () => {
    return (
        <div className="main">
            <LocationData/>
        <div className="primary_data">
          <div className="primary_data--forecast">
          <ForecastToday/>
            <div className="forecast_week">
             <ForecastWeek/>
             <ForecastWeek/>
             <ForecastWeek/>
            </div>
          </div>
          <div className="primary_data--map">
            <div className="map_wrapper">
            <div id="map">
            </div>
            </div>
            <Coordinates/>
          </div>
        </div>
        </div>
    );
};

export default Main
