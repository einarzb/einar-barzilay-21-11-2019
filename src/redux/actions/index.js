export const CITY_KEY = "CITY_KEY";
export const cityKeyAction = data => ({
  type: CITY_KEY,
  data: {
    data
  }
});

export const CITY_NAME = "CITY_NAME";
export const cityNameAction = data => ({
  type: CITY_NAME,
  data: {
    data
  }
});

export const API_KEY = "API_KEY";
export const apiKeyAction = data => ({
  type: API_KEY,
  data: {
    data
  }
});

export const DAY_OR_NIGHT = "DAY_OR_NIGHT";
export const mainThemeAction = data => ({
  type: DAY_OR_NIGHT,
  data: {
    data
  }
});
