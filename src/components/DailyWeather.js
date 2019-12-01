import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import DailyWeatherCard from "./DailyWeatherCard";
import { cityKeyAction, cityNameAction } from "../redux/actions/index.js";

import styled from "styled-components";

class DailyWeather extends Component {
  state = {
    loading: true,
    weather: null,
    apiKey: this.props.apiKey,
    cityKey: this.props.cityKey
  };

  componentDidMount() {
    // console.log(this.state.citykey);
  }

  componentDidUpdate() {
    if (this.props.cityName) {
      console.log("go");
      console.log(this.props.cityName);

      this.state.loading = false;
      //move this from component didupdate 
     // this.fetchDailyWeatherApi();
    } else {
      console.log("loading...");
      this.state.loading = true;
    }
  }

  fetchDailyWeatherApi = () => {
    let dailyWeatherApi =
      "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" +
      this.props.cityKey +
      "?apikey=" +
      this.state.apiKey +
      "&details=true&metric=true";

    fetch(dailyWeatherApi)
      .then(res => res.json())
      .then(json =>
        this.setState(
          { loading: false, weather: json },
          console.log(json),
          console.log(dailyWeatherApi)
        )
      )
      .catch(err => console.log(err));
  };

  render() {
    let { loading } = this.state;

    return (
      <Fragment>
        {loading ? (
          <div> loading....</div>
        ) : (
          <Wrapper>
            <h2>5 days forecast</h2>
            {/**
            <DailyWeatherCard weatherData={weather}> </DailyWeatherCard> */}
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

  console.log("----im props daily weather:----");
  console.log(props);
  console.log("--------------");

  return props;
};

const mapDispatchToProps = dispatch => ({
  cityKeyRedux: cityKey => dispatch(cityKeyAction(cityKey)),
  cityNameRedux: cityName => dispatch(cityNameAction(cityName))
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
