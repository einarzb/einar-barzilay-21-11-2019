import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { cityKeyAction, cityNameAction } from "../redux/actions/index.js";

import CurrentWeatherCard from "./CurrentWeatherCard";
import styled from "styled-components";

class CurrentWeather extends Component {
  state = {
    loading: false,
    apiKey: this.props.apiKey,
    cityKey: this.props.cityKey,
    cityData: this.props.cityData
  };

  render() {
    let { loading } = this.state;
    let { cityData, cityName } = this.props;

    return (
      <Fragment>
        {loading ? (
          <div> loading....</div>
        ) : (
          <Wrapper>
            <CurrentWeatherCard
              cityData={cityData}
              cityName={cityName}
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
    apiKey: state.apiReducer.apiKey,
    cityData: state.cityReducer.cityData
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
