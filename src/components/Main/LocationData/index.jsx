import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const LocationData = () => {
    return (
        <div className="destination_date">
          <div className="destination">
            <span className="destination--town"></span>, <span className="destination--country"></span>
          </div>
          <div className="date">
            <span className="date--weekday"></span>, <span className="date--number"></span> <span className="date--month"></span> <span className="date--time"></span>
          </div>
        </div> 
    );
};

export default LocationData
