import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import "./styles.scss";
import LocationData from "./LocationData";
import ForecastToday from "./ForecastToday";
import ForecastWeek from "./ForecastWeek";
import Coordinates from "./Coordinates";
import Map from "./MapBox";


const Main = () => {
  const mainState = useSelector(state => state.configuration.app.main);
  const language = useSelector(state => state.configuration.language);
  const degreesType = useSelector(state => state.configuration.degreesType);

  return (
    <div className="main">
      <LocationData
        city={mainState.city[language]}
        country={mainState.country[language]}
        day={mainState.date.day[language]}
        figure={mainState.date.figure}
        month={mainState.date.month[language]}
        time={mainState.date.time}
      />
      <div className="primary_data">
        <div className="primary_data--forecast">
          <ForecastToday
            degreesType={degreesType}
            language={language}
            {...mainState.forecast.today}
          />
          <div className="forecast_week">
            {Object.entries(mainState.forecast.week).map(([, dayweekProps]) => (
              <ForecastWeek
                language={language}
                degreesType={degreesType}
                {...dayweekProps}
              />
            ))}
          </div>
        </div>
        <div className="primary_data--map">
          <div className="map_wrapper">
           <Map longitude={mainState.forecast.coordinates.longitude.value} latitude={mainState.forecast.coordinates.latitude.value}/>
          </div>
          <Coordinates
            language={language}
            {...mainState.forecast.coordinates}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
