export function degreesExchangeToC(value) {
    return Math.round((value - 32) / 1.8);
  }

  export function degreesExchangeToF(value) {
    return Math.round((value * 1.8) + 32);
  }

  export function convertDegreeToMinute(degree) {
    return Math.round(degree * 60);
  }

  export const getCurrentStateCoords = state => state.configuration.app.main.forecast.coordinates;

  export const getCurrentStateTimezone = state => {debugger; return state.configuration.app.main.timezone;}

  export const getStateBackgroundData = state => [state.configuration.app.main.country.en, state.configuration.app.main.time.season, state.configuration.app.main.forecast.today.summary.clouds.en, state.configuration.app.main.time.daytime]