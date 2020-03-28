import { takeEvery, put, call, select } from "redux-saga/effects";
import { createSlice } from "@reduxjs/toolkit";
import {
  getCurrentUserCoords,
  getAllLangCoords,
  getAllLangWeather,
  getNewBackground,
  getCoordinates
} from "../api/requests";
import {
  degreesExchangeToC,
  degreesExchangeToF,
  convertDegreeToMinute,
  getCurrentStateCoords,
  getCurrentStateTimezone,
  getStateBackgroundData
} from "../helpers/helpers";
import { rusBelConversion } from "../helpers/langBase";

import { initialConfig } from "./initialStates/initialConfiguration";

export const appMainStore = createSlice({
  name: "configuration",
  initialState: initialConfig,
  reducers: {
    initWeatherApp: (state, action) => {
      state.loading = true;
      state.errors = [];
    },
    setCurrentUserCoords: (state, action) => {
      const userCoords = action.payload.loc.split(",");
      state.app.main.forecast.coordinates.latitude.value = userCoords[0];
      state.app.main.forecast.coordinates.longitude.value = userCoords[1];
    },
    setAppLocationInfo: (state, action) => {
      const longDegree = action.payload[0].results[0].geometry.lng;
      state.app.main.forecast.coordinates.longitude.value = longDegree;
      const degreeLongWhole = state.app.main.forecast.coordinates.longitude.value
        .toFixed(2)
        .split(".")[0];
      state.app.main.forecast.coordinates.longitude.separation.degrees = degreeLongWhole;
      state.app.main.forecast.coordinates.longitude.separation.minutes = convertDegreeToMinute(
        Number(longDegree) - Number(degreeLongWhole)
      );

      const latDegree = action.payload[0].results[0].geometry.lat;
      state.app.main.forecast.coordinates.latitude.value = latDegree;
      const degreeLatWhole = state.app.main.forecast.coordinates.latitude.value
        .toFixed(2)
        .split(".")[0];
      state.app.main.forecast.coordinates.latitude.separation.degrees = degreeLatWhole;
      state.app.main.forecast.coordinates.latitude.separation.minutes = convertDegreeToMinute(
        Number(latDegree) - Number(degreeLatWhole)
      );

      state.app.main.country.en =
        action.payload[0].results[0].components.country;
      state.app.main.country.ru =
        action.payload[1].results[0].components.country;
      state.app.main.country.be =
        action.payload[2].results[0].components.country;
      state.app.main.city.en =
        action.payload[0].results[0].components.city !== undefined
          ? action.payload[0].results[0].components.city
          : action.payload[0].results[0].formatted.split(",")[0];
      state.app.main.city.ru =
        action.payload[1].results[0].components.city !== undefined
          ? action.payload[1].results[0].components.city
          : action.payload[1].results[0].formatted.split(",")[0];
      state.app.main.city.be =
        action.payload[2].results[0].components.city !== undefined
          ? action.payload[2].results[0].components.city
          : action.payload[2].results[0].formatted.split(",")[0];
    },

    setTimezone: (state, action) => {
      state.app.main.timezone = action.payload[0].timezone;
    },

    setAppDateInfo: (state, action) => {
      const timeObject = new Date();
      state.app.main.date.figure = timeObject.toLocaleString("en", {
        timeZone: action.payload,
        day: "numeric"
      });
      state.app.main.date.day.en = timeObject.toLocaleString("en", {
        timeZone: action.payload,
        weekday: "short"
      });
      state.app.main.date.day.ru = timeObject.toLocaleString("ru", {
        timeZone: action.payload,
        weekday: "short"
      });
      state.app.main.date.day.be =
        rusBelConversion.weekdays.short[state.app.main.date.day.ru];
      state.app.main.date.month.en = timeObject.toLocaleString("en", {
        timeZone: action.payload,
        month: "long"
      });
      state.app.main.date.month.ru = timeObject.toLocaleString("ru", {
        timeZone: action.payload,
        month: "long"
      });
      state.app.main.date.month.be =
        rusBelConversion.months[state.app.main.date.month.ru];
      switch (state.app.main.date.month.en.toLowerCase()) {
        case "december":
        case "january":
        case "february":
          state.app.main.time.season = "winter";
          break;
        case "march":
        case "april":
        case "may":
          state.app.main.time.season = "spring";
          break;
        case "june":
        case "july":
        case "august":
          state.app.main.time.season = "summer";
          break;
        case "september":
        case "october":
        case "november":
          state.app.main.time.season = "autumn";
          break;
      }

      const minutes =
        timeObject.toLocaleString("ru", {
          timeZone: action.payload,
          minute: "2-digit"
        }).length < 2
          ? `0${timeObject.toLocaleString("ru", {
              timeZone: action.payload,
              minute: "2-digit"
            })}`
          : timeObject.toLocaleString("ru", {
              timeZone: action.payload,
              minute: "2-digit"
            });
      const hours = timeObject.toLocaleString("ru", {
        timeZone: action.payload,
        hour: "2-digit"
      });

      if (Number(hours) >= 0 && Number(hours) <= 4) {
        state.app.main.time.daytime = "night";
      } else if (Number(hours) > 4 && Number(hours) <= 12) {
        state.app.main.time.daytime = "morning";
      } else if (Number(hours) > 12 && Number(hours) <= 16) {
        state.app.main.time.daytime = "noon";
      } else if (Number(hours) > 16 && Number(hours) < 24) {
        state.app.main.time.daytime = "evening";
      }

      state.app.main.date.time = `${timeObject.toLocaleString("ru", {
        timeZone: action.payload,
        hour: "2-digit"
      })}:${minutes}`;
      timeObject.setDate(timeObject.getDate() + 1);
      state.app.main.forecast.week.tomorrow.title.en = timeObject.toLocaleString(
        "en",
        { timeZone: action.payload, weekday: "long" }
      );
      state.app.main.forecast.week.tomorrow.title.ru = timeObject.toLocaleString(
        "ru",
        { timeZone: action.payload, weekday: "long" }
      );
      state.app.main.forecast.week.tomorrow.title.be =
        rusBelConversion.weekdays.long[
          state.app.main.forecast.week.tomorrow.title.ru
        ];
      timeObject.setDate(timeObject.getDate() + 1);
      state.app.main.forecast.week.aftertomorrow.title.en = timeObject.toLocaleString(
        "en",
        { timeZone: action.payload, weekday: "long" }
      );
      state.app.main.forecast.week.aftertomorrow.title.ru = timeObject.toLocaleString(
        "ru",
        { timeZone: action.payload, weekday: "long" }
      );
      state.app.main.forecast.week.aftertomorrow.title.be =
        rusBelConversion.weekdays.long[
          state.app.main.forecast.week.aftertomorrow.title.ru
        ];
      timeObject.setDate(timeObject.getDate() + 1);
      state.app.main.forecast.week.aftertomorrows.title.en = timeObject.toLocaleString(
        "en",
        { timeZone: action.payload, weekday: "long" }
      );
      state.app.main.forecast.week.aftertomorrows.title.ru = timeObject.toLocaleString(
        "ru",
        { timeZone: action.payload, weekday: "long" }
      );
      state.app.main.forecast.week.aftertomorrows.title.be =
        rusBelConversion.weekdays.long[
          state.app.main.forecast.week.aftertomorrows.title.ru
        ];
    },

    setAppWeatherInfo: (state, action) => {
      state.app.main.forecast.today.degrees.f = Math.round(
        action.payload[0].currently.temperature
      );
      state.app.main.forecast.today.degrees.c = degreesExchangeToC(
        state.app.main.forecast.today.degrees.f
      );
      state.app.main.forecast.today.icon = action.payload[0].currently.icon;
      state.app.main.forecast.today.summary.wind.value =
        action.payload[0].currently.windSpeed;
      state.app.main.forecast.today.summary.sensation.value.f = Math.round(
        action.payload[0].currently.apparentTemperature
      );
      state.app.main.forecast.today.summary.sensation.value.c = degreesExchangeToC(
        state.app.main.forecast.today.summary.sensation.value.f
      );
      state.app.main.forecast.today.summary.humidity.value = Math.round(
        action.payload[0].currently.humidity * 100
      );
      state.app.main.forecast.today.summary.clouds.en =
        action.payload[0].currently.summary;
      state.app.main.forecast.today.summary.clouds.ru =
        action.payload[1].currently.summary;
      state.app.main.forecast.today.summary.clouds.be =
        action.payload[2].currently.summary;

      state.app.main.forecast.week.tomorrow.value.f = Math.round(
        (action.payload[0].daily.data[1].temperatureHigh +
          action.payload[0].daily.data[1].temperatureLow) /
          2
      );
      state.app.main.forecast.week.tomorrow.value.c = degreesExchangeToC(
        state.app.main.forecast.week.tomorrow.value.f
      );
      state.app.main.forecast.week.tomorrow.icon =
        action.payload[0].daily.data[1].icon;
      state.app.main.forecast.week.aftertomorrow.value.f = Math.round(
        (action.payload[0].daily.data[2].temperatureHigh +
          action.payload[0].daily.data[2].temperatureLow) /
          2
      );
      state.app.main.forecast.week.aftertomorrow.value.c = degreesExchangeToC(
        state.app.main.forecast.week.aftertomorrow.value.f
      );
      state.app.main.forecast.week.aftertomorrow.icon =
        action.payload[0].daily.data[2].icon;
      state.app.main.forecast.week.aftertomorrows.value.f = Math.round(
        (action.payload[0].daily.data[3].temperatureHigh +
          action.payload[0].daily.data[3].temperatureLow) /
          2
      );
      state.app.main.forecast.week.aftertomorrows.value.c = degreesExchangeToC(
        state.app.main.forecast.week.aftertomorrows.value.f
      );
      state.app.main.forecast.week.aftertomorrows.icon =
        action.payload[0].daily.data[3].icon;
    },

    setAppWeatherBackground: (state, action) => {
      state.app.background = action.payload;
    },

    fetchWeatherDataSuccess: (state, action) => {
      state.loading = false;
      state.errors = [];
    },
    fetchWeatherDataFail: (state, action) => {
      state.loading = false;
      state.errors.push(action);
    },
    initWeatherSuccess: (state, action) => {
      state.firstLaunch = false;
      state.errors = [];
    },
    userSearchWeatherRequest: (state, action) => {
      state.loading = true;
    }
  }
});

export const {
  initWeatherApp,
  fetchWeatherDataSuccess,
  fetchWeatherDataFail,
  setCurrentUserCoords,
  setAppLocationInfo,
  setTimezone,
  setAppDateInfo,
  setAppWeatherInfo,
  setAppWeatherBackground,
  initWeatherSuccess,
  userSearchWeatherRequest
} = appMainStore.actions;
export default appMainStore.reducer;

function* initWeatherAppWorker(actions) {
  try {
    const payload = yield call(getCurrentUserCoords);
    yield put(setCurrentUserCoords(payload));
    const coords = yield select(getCurrentStateCoords);
    const userLocationInfo = yield call(
      getAllLangCoords,
      `${coords.latitude.value}+${coords.longitude.value}`
    );
    yield put(setAppLocationInfo(userLocationInfo));
    const weatherData = yield call(getAllLangWeather, [
      coords.latitude.value,
      coords.longitude.value
    ]);
    yield put(setTimezone(weatherData));
    const currentTimezone = yield select(getCurrentStateTimezone);
    yield put(setAppDateInfo(currentTimezone));
    yield put(setAppWeatherInfo(weatherData));
    const backgroundRequestArgs = yield select(getStateBackgroundData);
    const background = yield getNewBackground([backgroundRequestArgs]);
    yield put(setAppWeatherBackground(background));
    yield put(fetchWeatherDataSuccess());
    yield put(initWeatherSuccess());
  } catch (e) {
    yield put(fetchWeatherDataFail(e.message));
  }
}

function* userSearchWeatherWorker({ payload }) {
  try {
    const data = yield call(getAllLangCoords, payload);
    yield put(setAppLocationInfo(data));
    const coords = yield select(getCurrentStateCoords);
    const weatherData = yield call(getAllLangWeather, [
      coords.latitude.value,
      coords.longitude.value
    ]);
    yield put(setTimezone(weatherData));
    const currentTimezone = yield select(getCurrentStateTimezone);
    yield put(setAppDateInfo(currentTimezone));
    yield put(setAppWeatherInfo(weatherData));
    const backgroundRequestArgs = yield select(getStateBackgroundData);
    const background = yield getNewBackground([backgroundRequestArgs]);
    yield put(setAppWeatherBackground(background));
    yield put(fetchWeatherDataSuccess());
  } catch (e) {
    yield put(fetchWeatherDataFail(e.message));
  }
}

export function* weatherSaga() {
  yield takeEvery(initWeatherApp().type, initWeatherAppWorker);
  yield takeEvery(userSearchWeatherRequest().type, userSearchWeatherWorker);
}
