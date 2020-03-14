import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ForecastToday = () => {
    return (
      <div className="forecast_today">
      <div className="forecast_today--degrees">
        <span className="forecast_today--degrees_amount"></span> <span className="forecast_today--degrees_icon">&deg;</span> <img src="" alt="" className="forecast_today--weather_image"/>
      </div>
      <div className="forecast_today--details">
        <span className="forecast_today--sky"></span>
        <div className="forecast_today--sensation">
            <span className="forecast_today--sensation_title"></span> <span className="forecast_today--sensation_intensity"></span> <span className="forecast_today--sensation_icon">&deg;</span>
          </div>
          <div className="forecast_today--wind">
              <span className="forecast_today--wind_title"></span> <span className="forecast_today--wind_intensity"></span> <span className="forecast_today--wind_icon"></span>
            </div>
            <div className="forecast_today--humidity">
                <span className="forecast_today--humidity_title"></span> <span className="forecast_today--humidity_intensity"></span> <span className="forecast_today--humidity_icon">%</span>
            </div>
      </div>
    </div>
    );
};

export default ForecastToday
