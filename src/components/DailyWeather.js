import React, { Fragment, useContext } from "react";
import DailyWeatherCard from "./DailyWeatherCard";
import CityNameContext from "../context/CityNameContext";

import styled from "styled-components";

export function DailyWeather() {
  const msg = useContext(CityNameContext);
  const loading = true;
  const weather = null;

  /*
  state = {
    loading: true,
    weather: null,
    cityKey: 215793
  };

  componentDidMount() {
    this.fetchDailyWeatherApi();
  }

  fetchDailyWeatherApi = () => {
    let dailyWeatherApi =
      "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" +
      this.state.cityKey +
      "?apikey=waav5j72O6VxiKy9ZokbywHChijTHTiD&details=true&metric=true";

    fetch(dailyWeatherApi)
      .then(res => res.json())
      .then(json =>
        this.setState({ loading: false, weather: json }, console.log(json))
      )
      .catch(err => console.log(err));
  };
  render() {
    let { loading, weather } = this.state;
    */

  return (
    <Fragment>
      <div>{msg}</div>

      {loading ? (
        <div> loading....</div>
      ) : (
        <Wrapper>
          <h2>5 days forecast</h2>
          <DailyWeatherCard weatherData={weather}> </DailyWeatherCard>
        </Wrapper>
      )}
    </Fragment>
  );
}

const Wrapper = styled.div`
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
