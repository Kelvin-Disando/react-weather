export async function getCoordinates (query, lang) {
    const response = await fetch('https://sheltered-woodland-51519.herokuapp.com/' + `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=f5f57c660c53410989934259fcbc9f22&language=${lang}&pretty=1`);
    const locationData = await response.json();
    return locationData;
  }

  export async function getAllLangCoords (query) {
    const result = await Promise.all([getCoordinates(query, 'en'), getCoordinates(query, 'ru'), getCoordinates(query, 'be')]);
    return result;
  }

  export async function getWeather (latitude, longitude, lang) {
    const response = await fetch('https://sheltered-woodland-51519.herokuapp.com/' + `https://api.darksky.net/forecast/2bf27985f5a6844febcdc43c99cc81ce/${latitude},${longitude}?lang=${lang}`);
    const weatherRespond = await response.json();
    return weatherRespond;
  }

  export async function getAllLangWeather (latitude, longitude) {
    const result = await Promise.all([getWeather(latitude, longitude, 'en'), getWeather(latitude, longitude, 'ru'), getWeather(latitude, longitude, 'be')]);
    return result;
  }

  export async function getCurrentUserCoords () {
    const response = await fetch('https://sheltered-woodland-51519.herokuapp.com/' + 'https://ipinfo.io/json?token=48ad9dbb1ad5a6');
    const locationData = await response.json();
    return locationData;
  }

  export async function getNewBackground(country, season, weather, daytime) {
    try {
      const response = await fetch('https://sheltered-woodland-51519.herokuapp.com/' + `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${season}+${daytime}+${weather}+weather+${country}&client_id=9d3fa57b4a20b2dae667e7018978315b46962e882095e9db58254e05bb08160c`);
      const data = await response.json();
      const path = data.urls.regular;
      return path;
    } catch (error) {
      return 'https://images.unsplash.com/photo-1489864983806-4d0d07e2d37d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMjE5OH0';
    }
  }