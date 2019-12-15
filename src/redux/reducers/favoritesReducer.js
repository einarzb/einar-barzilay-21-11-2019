import { UPDATE_FAVORITES } from "../actions/index";

let favoriteCities = [];

const initState = {
  favoriteCities: favoriteCities
};

const favoritesReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_FAVORITES:
      return updateFavorites(action.data);

    default:
      return state;
  }
};

function updateFavorites(data) {
  initState.favoriteCities = [...initState.favoriteCities, data.data];
  return { ...initState };
}

export default favoritesReducer;
