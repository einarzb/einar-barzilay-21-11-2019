import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import DailyWeatherCard from "./DailyWeatherCard";
import { cityKeyAction } from "../redux/actions/index.js";

import styled from "styled-components";

class DailyWeather extends Component {
  state = {
    loading: false,
    weather: null,
    apiKey: this.props.apiKey,
    cityKey: this.props.cityKey
  };

  render() {
    let { loading } = this.state;
    let { cityKey, apiKey } = this.props;

    return (
      <Fragment>
        {loading ? (
          <div> loading....</div>
        ) : (
          <Wrapper>
            <h2>5 days forecast</h2>

            <DailyWeatherCard
              cityKey={cityKey}
              apiKey={apiKey}
            ></DailyWeatherCard>
          </Wrapper>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  let props = {
    cityKey: state.cityReducer.cityKey,
    apiKey: state.apiReducer.apiKey
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
    margin-left: 1rem;
  }
`;
