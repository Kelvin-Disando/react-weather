import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import mapboxgl from "mapbox-gl";

export default function Map({ longitude, latitude }) {
  const [viewport, setViewport] = useState({
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "375px",
    height: "375px",
    latitude: latitude,
    longitude: longitude,
    zoom: 9,
  });

  useEffect(() => {
    setViewport({...viewport, latitude, longitude})
  }, [longitude, latitude])

  return (
    <ReactMapGL
    mapStyle='mapbox://styles/mapbox/streets-v11'
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1IjoiZG9kaW5zYSIsImEiOiJjazRiZ2dweDcwZGdlM2tuem9tYmQ1c2xxIn0.__iIMqnKXIpRND_TeBOlJw"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
    ></ReactMapGL>
  );
}

// class Map extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       viewport: {
//         position: "absolute",
//       top: 0,
//       bottom: 0,
//       width: "100%",
//         latitude: this.props.latitude,
//         longitude: this.props.longitude,
//         zoom: 9
//       }
//     };
//     }

//   render() {

//     return <ReactMapGL {...this.state.viewport} mapboxApiAccessToken='pk.eyJ1IjoiZG9kaW5zYSIsImEiOiJjazRiZ2dweDcwZGdlM2tuem9tYmQ1c2xxIn0.__iIMqnKXIpRND_TeBOlJw'  onViewportChange={(viewport => this.setState(viewport))}></ReactMapGL>
//   }
// }

// class Map extends React.Component {
//   componentDidMount() {
//     this.map = new mapboxgl.Map({
//       container: 'map',
//         style: 'mapbox://styles/mapbox/streets-v11',
//       center: [lng, lat],
//       zoom: 9,
//     });
//   }

//   componentWillUnmount() {
//     this.map.remove();
//   }

//   render() {
//     const style = {
//       position: 'absolute',
//       top: 0,
//       bottom: 0,
//       width: '100%'
//     };

//     return <div style={style} ref={el => this.mapContainer = el} />;
//   }
// }
