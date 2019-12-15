import {
  CITY_KEY,
  CITY_NAME,
  FETCH_CITY_DATA,
  FETCH_WEEKLY_FORECAST
} from "../actions/index";

let cityKey = "";
let cityName = "";
let cityData = [];
let weeklyForecast = [];
let cityTheme = "";

const initState = {
  cityKey: cityKey,
  cityName: cityName,
  cityData: cityData,
  weeklyForecast: weeklyForecast,
  cityTheme: cityTheme
};

const cityReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CITY_DATA:
      return fethedCityData(action.data);
    case FETCH_WEEKLY_FORECAST:
      return fethedWeeklyForecast(action.data);
    case CITY_KEY:
      return passCityKey(action.data);
    case CITY_NAME:
      return passCityName(action.data);
    default:
      return state;
  }
};

function passCityKey(data) {
  initState.cityKey = data.data;
  return { ...initState };
}

function passCityName(data) {
  initState.cityName = data.data;
  return { ...initState };
}
function fethedCityData(data) {
  initState.cityData = data.data;
  initState.cityTheme = data.data[0].IsDayTime;
  return { ...initState };
}

function fethedWeeklyForecast(data) {
  console.log(data.data);
  console.log("stinky redicer");

  initState.weeklyForecast = data.data;
  console.log(initState);

  return { ...initState };
}

export default cityReducer;
