import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { cityKeyAction } from "../redux/actions/index.js";

import DailyWeatherCard from "./DailyWeatherCard";

import styled from "styled-components";

class DailyWeather extends Component {
  state = {
    loading: false,
    weeklyForecast: this.props.weeklyForecast
  };

  render() {
    let { loading } = this.state;
    let { weeklyForecast } = this.props;

    return (
      <Fragment>
        {loading ? (
          <div> loading....</div>
        ) : (
          <Wrapper>
            <h2>5 days forecast</h2>

            <DailyWeatherCard weeklyData={weeklyForecast}></DailyWeatherCard>
          </Wrapper>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  let props = {
    weeklyForecast: state.cityReducer.weeklyForecast
  };

  return props;
};

const mapDispatchToProps = dispatch => ({
  cityKeyRedux: cityKey => dispatch(cityKeyAction(cityKey))
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyWeather);

export const Wrapper = styled.div`
  padding: 0 1rem;
  margin-left: 2rem;

  & h2 {
    color: #ffffff;
    margin-bottom: 0;
  }
  @media (max-width: 768px) {
    padding: 0;
    margin: 0px auto;
    width: 90%;
    display: block;
    background-color: #222831;
  }
`;
