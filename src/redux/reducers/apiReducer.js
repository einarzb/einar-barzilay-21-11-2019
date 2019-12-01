import { API_KEY } from "../actions/index";

let apiKey = "RLUGpDi6NBYG2PvFYh3V5B9Ux5omDADG";

const initState = {
  apiKey: apiKey
};

const cityReducer = (state = initState, action) => {
  switch (action.type) {
    case API_KEY:
      return passApiKey();
    default:
      return state;
  }
};

function passApiKey() {
  initState.apiKey = initState.apiKey;
  return { ...initState };
}

export default cityReducer;
