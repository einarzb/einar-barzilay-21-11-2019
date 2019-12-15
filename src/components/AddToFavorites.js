import React, { Component } from "react";
import { connect } from "react-redux";
import {
  cityKeyAction,
  pushToFavoritesAction
} from "../redux/actions/index.js";

import styled from "styled-components";

import { HEART } from "../assets/index";

class addToFavorites extends Component {
  state = {
    cityKey: this.props.cityKey,
    favoriteCities: this.props.favoritesCities
  };

  addToFavorites = cityKey => {
    let { pushToFavoritesRedux } = this.props;
    pushToFavoritesRedux(cityKey);
  };

  render() {
    let { cityKey } = this.props;
    return (
      <FavoriteButton
        src={HEART}
        onClick={() => this.addToFavorites(cityKey)}
      ></FavoriteButton>
    );
  }
}

const mapStateToProps = state => {
  let props = {
    cityKey: state.cityReducer.cityKey,
    favoriteCities: state.favoritesReducer.favoriteCities
  };
  console.log("fav btn props");
  console.log(props);

  return props;
};

const mapDispatchToProps = dispatch => ({
  cityKeyRedux: cityKey => dispatch(cityKeyAction(cityKey)),
  pushToFavoritesRedux: favoriteCities =>
    dispatch(pushToFavoritesAction(favoriteCities))
});

export default connect(mapStateToProps, mapDispatchToProps)(addToFavorites);
const FavoriteButton = styled.img`
  width: 20px;
`;
