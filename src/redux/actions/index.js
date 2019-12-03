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

export const FETCH_CITY_DATA = "FETCH_CITY_DATA";
export const mainThemeAction = data => ({
  type: FETCH_CITY_DATA,
  data: {
    data
  }
});

export const UPDATE_FAVORITES = "UPDATE_FAVORITES";
export const updateFavoriteAction = data => ({
  type: UPDATE_FAVORITES,
  data: {
    data
  }
});
