import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import DailyWeather from "../components/DailyWeather";
import CurrentWeather from "../components/CurrentWeather";
import SearchCity from "../components/SearchCity";

class MainScreen extends React.Component {
  render() {
    let { cityTheme } = this.props;

    return (
      <Fragment>
        <Wrapper
          style={
            cityTheme
              ? { backgroundColor: "rgb(62, 101, 160)" }
              : { backgroundColor: "#16001E" }
          }
        >
          <SearchCity />
          <CurrentWeather />
          <DailyWeather />
        </Wrapper>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  let props = {
    cityTheme: state.cityReducer.cityTheme
  };

  return props;
};

export default connect(mapStateToProps, null)(MainScreen);

const Wrapper = styled.div`
  background-color: #222831;
  margin-top: -1.1rem;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
