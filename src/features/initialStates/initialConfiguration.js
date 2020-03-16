 export const initialConfig = {
    app: {
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
loading: false,
firstLaunch: true,
errors: [],
language: 'en'
  }


