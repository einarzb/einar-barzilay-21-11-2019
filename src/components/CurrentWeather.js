import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { cityKeyAction, cityNameAction } from "../redux/actions/index.js";

import CurrentWeatherCard from "./CurrentWeatherCard";
import styled from "styled-components";

class CurrentWeather extends Component {
  state = {
    loading: false,
    curWeather: null,
    apiKey: this.props.apiKey,
    cityKey: this.props.cityKey
  };

  render() {
    let { loading } = this.state;
    let { cityName, cityKey, apiKey } = this.props;

    return (
      <Fragment>
        {loading ? (
          <div> loading....</div>
        ) : (
          <Wrapper>
            <h2>{cityName}</h2>
            <CurrentWeatherCard
              cityKey={cityKey}
              apiKey={apiKey}
            ></CurrentWeatherCard>
          </Wrapper>
        )}
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  let props = {
    cityName: state.cityReducer.cityName,
    cityKey: state.cityReducer.cityKey,
    apiKey: state.apiReducer.apiKey
  };

  return props;
};

const mapDispatchToProps = dispatch => ({
  cityKeyRedux: cityKey => dispatch(cityKeyAction(cityKey)),
  cityNameRedux: cityName => dispatch(cityNameAction(cityName))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);

export const Wrapper = styled.div`
  padding: 0 1rem;
  margin-left: 2rem;
  & h2 {
    color: #ffffff;
    margin-bottom: 0;
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`;
