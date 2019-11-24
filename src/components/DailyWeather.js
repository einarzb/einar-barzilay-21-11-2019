import React, { Component } from "react";
import DailyWeatherCard from "./DailyWeatherCard";
import styled from "styled-components";

class DailyWeather extends React.Component {
  state = {
    loading: true,
    weather: null
  };

  componentDidMount() {
    this.fetchDailyWeatherApi();
  }

  fetchDailyWeatherApi = () => {
    let dailyWeatherApi =
      "http://dataservice.accuweather.com/forecasts/v1/daily/5day/215793?apikey=2OxIxAAbVtWlSTBVlvTONG40GmdTEkAas";

    fetch(dailyWeatherApi)
      .then(res => res.json())
      .then(json =>
        this.setState({ loading: false, weather: json }, console.log(json))
      )
      .catch(err => console.log(err));
  };

  render() {
    let { loading, weather } = this.state;
    return (
      <div>
        {loading ? (
          <div> loading....</div>
        ) : (
          <Wrapper>
            <h2>5 days forecast</h2>
            <DailyWeatherCard weatherData={weather}> </DailyWeatherCard>
          </Wrapper>
        )}
      </div>
    );
  }
}

export default DailyWeather;

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
