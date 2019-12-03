import {
  CITY_KEY,
  CITY_NAME,
  // UPDATE_FAVORITES,
  FETCH_CITY_DATA,
  FETCH_WEEKLY_FORECAST
} from "../actions/index";

let cityKey = "";
let cityName = "";
//let favorites = [];
let cityData = [];
let weeklyForecast = [];
let cityTheme = "";

const initState = {
  cityKey: cityKey,
  cityName: cityName,
  cityData: cityData,
  weeklyForecast: weeklyForecast,
  cityTheme: cityTheme
  //favorites: favorites
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
    /*
    case UPDATE_FAVORITES:
      return updateFavorites(action.data);
      */
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
/*
function updateFavorites(data) {
  console.log("im data hello");
  console.log(data);
  initState.favorites = data.data;
  return { ...initState };
}
*/
export default cityReducer;
