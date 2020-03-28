import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const ForecastToday = ({ language, degreesType, degrees, icon, summary }) => {
  
  return (
    <div className="forecast_today">
      <div className="forecast_today--degrees">
        <span className="forecast_today--degrees_amount">
          {degrees[degreesType]}
        </span>
        <span className="forecast_today--degrees_icon">&deg;</span>
        <img src={require(`../../../assets/weather-icons/big/${icon}.png`)} alt="" className="forecast_today--weather_image" />
      </div>
      <div className="forecast_today--details">
        <span className="forecast_today--sky">{summary.clouds[language]}</span>
        <div className="forecast_today--sensation">
          <span className="forecast_today--sensation_title">
            {summary.sensation.title[language]}
          </span>
          <span className="forecast_today--sensation_intensity">
            {summary.sensation.value[degreesType]}
          </span>
          <span className="forecast_today--sensation_icon">&deg;</span>
        </div>
        <div className="forecast_today--wind">
          <span className="forecast_today--wind_title">
            {summary.wind.title[language]}
          </span>
          <span className="forecast_today--wind_intensity">
            {summary.wind.value}
          </span>
          <span className="forecast_today--wind_icon">
            {summary.wind.speed[language]}
          </span>
        </div>
        <div className="forecast_today--humidity">
          <span className="forecast_today--humidity_title">
            {summary.humidity.title[language]}
          </span>
          <span className="forecast_today--humidity_intensity">
            {summary.humidity.value}
          </span>
          <span className="forecast_today--humidity_icon">%</span>
        </div>
      </div>
    </div>
  );
};

export default ForecastToday;
