import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import styled from "styled-components";

class FavoritesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.history.listen(() => {
      // view new URL
      console.log("New URL", this.props.history.location.pathname);
    });
  }
  render() {
    return <div>favorites</div>;
  }
}

export default withRouter(FavoritesScreen);
