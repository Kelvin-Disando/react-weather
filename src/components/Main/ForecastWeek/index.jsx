import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ForecastWeek = () => {
  return (
    <div className="forecast_week--days tomorrow">
      <span className="tomorrow--title forecast_week--title"></span>
      <div className="forecast_week--weather_indication">
        <span className="tomorrow--temperature"></span> <span className="tomorrow--icon">&deg;</span> <img className="tomorrow--image" src="" alt="" />
      </div>
    </div>
  );
};

export default ForecastWeek
