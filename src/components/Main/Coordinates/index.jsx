import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Coordinates = () => {
    return (
      <div className="coordinates_data">
      <div className="coordinates_data--latitude">
        <span className="latitude_title"></span> <span className="latitude--value"><span className='latitude--value-degrees'></span>&#176;<span className='latitude--value-minutes'></span>&#8242;</span>
      </div>
      <div className="coordinates_data--longitude">
        <span className="longitude_title"></span> <span className="longitude--value"><span className='longitude--value-degrees'></span>&#176;<span className='longitude--value-minutes'></span>&#8242;</span>
      </div>
    </div>
    );
};

export default Coordinates
