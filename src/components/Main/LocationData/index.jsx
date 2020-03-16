import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const LocationData = ({city, country, day, figure, month, time}) => {
    return (
        <div className="destination_date">
          <div className="destination">
    <span className="destination--town">{city}</span>, <span className="destination--country">{country}</span>
          </div>
          <div className="date">
    <span className="date--weekday">{day}</span>, <span className="date--number">{figure}</span> <span className="date--month">{month}</span> <span className="date--time">{time}</span>
          </div>
        </div> 
    );
};

export default LocationData
