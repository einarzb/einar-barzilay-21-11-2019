import { CITY_KEY, CITY_NAME } from "../actions/index";

let cityKey = "215854";
let cityName = "Tel Aviv";

const initState = {
  cityKey: cityKey,
  cityName: cityName
};

const cityReducer = (state = initState, action) => {
  switch (action.type) {
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

export default cityReducer;
