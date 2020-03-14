import { takeEvery, put, call } from "redux-saga/effects";
import { createSlice } from "@reduxjs/toolkit";

export const projectsFeature = createSlice({
  name: "Configuration",
  initialState: {
    header: {
      search: {
        input: {
          en: "Search city or ZIP",
          ru: "Поиск города или ZIP",
          be: "Пошук горада цi ZIP"
        },
        submit: { en: "SEARCH", ru: "ПОИСК", be: "ПОШУК" }
      }
    },
    main: {
      timezone: "",
      time: { daytime: "", season: "" },
      city: {
        en: "",
        ru: "",
        be: ""
      },
      country: {
        en: "",
        ru: "",
        be: ""
      },
      date: {
        day: {
          en: "",
          ru: "",
          be: ""
        },
        figure: "",
        month: {
          en: "",
          ru: "",
          be: ""
        },
        time: ""
      },
      forecast: {
        today: {
          degrees: { c: "", f: "" },
          icon: "",
          summary: {
            clouds: {
              en: "",
              ru: "",
              be: ""
            },
            sensation: {
              title: {
                en: "Feels like:",
                ru: "Ощущается как:",
                be: "Адчуваецца як:"
              },
              value: { c: "", f: "" }
            },
            wind: {
              title: {
                en: "Wind:",
                ru: "Ветер:",
                be: "Вецер:"
              },
              value: "",
              speed: {
                en: "m/s",
                ru: "м/с",
                be: "м/с"
              }
            },
            humidity: {
              title: {
                en: "Humidity:",
                ru: "Влажность:",
                be: "Вiльгаць:"
              },
              value: ""
            }
          }
        },
        week: {
          tomorrow: {
            title: {
              en: "",
              ru: "",
              be: ""
            },
            value: { c: "", f: "" },
            icon: ""
          },
          aftertomorrow: {
            title: {
              en: "",
              ru: "",
              be: ""
            },
            value: { c: "", f: "" },
            icon: ""
          },
          aftertomorrows: {
            title: {
              en: "",
              ru: "",
              be: ""
            },
            value: { c: "", f: "" },
            icon: ""
          }
        },
        coordinates: {
          longitude: {
            value: "",
            title: { en: "longitude:", ru: "долгота:", be: "даўгата:" },
            separation: { degrees: "", minutes: "" }
          },
          latitude: {
            value: 27.34,
            title: { en: "latitude:", ru: "широта:", be: "шырыня:" },
            separation: { degrees: "", minutes: "" }
          }
        }
      }
    },
    background: ""
  },
  reducers: {
    fetchProjectsRequest: state => {
      state.loading = true;
      state.errors = [];
    },
    fetchProjectsSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
      state.errors = [];
    },
    fetchProjectsFail: (state, action) => {
      state.loading = false;
      state.errors.push(action);
    },
    addProjectRequest: state => {
      state.loading = true;
    },
    addProjectFail: (state, action) => {
      state.loading = false;
      state.errors.push(action);
    },
    addProjectSuccess: (state, action) => {
      state.list.push(action.payload);
    }
  }
});

export const {
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsFail,
  addProjectRequest,
  addProjectFail,
  addProjectSuccess
} = projectsFeature.actions;
export default projectsFeature.reducer;

function* fetchProducts(actions) {
  try {
    const payload = yield call(api.projects.getAll, actions.payload);
    yield put(fetchProjectsSuccess(payload.data));
  } catch (e) {
    yield put(fetchProjectsFail(e.message));
  }
}

function* postProjectsWorker({ payload: { values, resolve, reject } }) {
  try {
    const payload = yield call(api.projects.create, values);
    yield put(addProjectSuccess(payload.data));
    yield call(resolve);
  } catch (e) {
    yield put(addProjectFail(e.message));
    yield call(reject);
  }
}

export function* projectsSaga() {
  yield takeEvery(fetchProjectsRequest().type, fetchProducts);
  yield takeEvery(addProjectRequest().type, postProjectsWorker);
}
