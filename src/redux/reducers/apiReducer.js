import { API_KEY } from "../actions/index";

let apiKey = "AjdC0LSBo2hv9YijaCEgQgGceuGTBkIe";

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
