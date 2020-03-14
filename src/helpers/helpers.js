export function degreesExchangeToC(value) {
    return Math.round((value - 32) / 1.8);
  }

  export function degreesExchangeToF(value) {
    return Math.round((value * 1.8) + 32);
  }

  export function convertDegreeToMinute(degree) {
    return Math.round(degree * 60);
  }