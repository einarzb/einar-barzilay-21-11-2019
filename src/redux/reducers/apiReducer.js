import { API_KEY } from "../actions/index";

let apiKey = "qwCPX3ATWgnNFHYXbToTSLVTQYgTCY3B";

const initState = {
  apiKey: apiKey
};

const apiReducer = (state = initState, action) => {
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

export default apiReducer;
