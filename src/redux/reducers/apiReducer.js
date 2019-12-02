import { API_KEY, DAY_OR_NIGHT } from "../actions/index";

let apiKey = "k72nklUGxDZEORHBxWPJxEIxEtuDCKEE";

const dayOrNight = () => {
  let hr = new Date().getHours();
  const isDayTime = hr > 6 && hr < 19;
  return isDayTime;
};

const initState = {
  apiKey: apiKey,
  dayOrNight: dayOrNight()
};

console.log(initState);

const apiReducer = (state = initState, action) => {
  switch (action.type) {
    case API_KEY:
      return passApiKey();
    case DAY_OR_NIGHT:
      return passTheme();
    default:
      return state;
  }
};

function passApiKey() {
  initState.apiKey = initState.apiKey;
  return { ...initState };
}

function passTheme() {
  initState.dayOrNight = initState.dayOrNight;
  return { ...initState };
}
export default apiReducer;
