import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Coordinates = ({ language, longitude, latitude }) => {
  return (
    <div className="coordinates_data">
      <div className="coordinates_data--latitude">
        <span className="latitude_title">{longitude.title[language]}</span>
        <span className="latitude--value">
          <span className="latitude--value-degrees">
            {longitude.separation.degrees}
          </span>
          &#176;
          <span className="latitude--value-minutes">
            {longitude.separation.minutes}
          </span>
          &#8242;
        </span>
      </div>
      <div className="coordinates_data--longitude">
        <span className="longitude_title">{latitude.title[language]}</span>
        <span className="longitude--value">
          <span className="longitude--value-degrees">
            {latitude.separation.degrees}
          </span>
          &#176;
          <span className="longitude--value-minutes">
            {latitude.separation.minutes}
          </span>
          &#8242;
        </span>
      </div>
    </div>
  );
};

export default Coordinates;
