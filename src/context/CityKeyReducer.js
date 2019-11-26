import { ADD_CITY_KEY } from "./types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CITY_KEY:
      return addCityKey(action.payload, state);
      break;
    default:
      return state;
      break;
  }
};

console.log("im reducer");

const addCityKey = (cityKey, state) => {
  console.log("yp im here");
  console.log(cityKey);

  const newCityKey = [...state.cityKey, cityKey];
  return {
    ...state,
    cityKey: newCityKey
  };
};
/*
const spreadApiSettings = (api, state) => {
  return;
};
*/
