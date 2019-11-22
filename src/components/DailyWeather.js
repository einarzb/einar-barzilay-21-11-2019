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
      "http://dataservice.accuweather.com/forecasts/v1/daily/5day/215793?apikey=3NhsptgUxfS7Y2mMnq04QWhMUsfyQYg0";

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
            <DailyWeatherCard weatherData={weather}> </DailyWeatherCard>
          </Wrapper>
        )}
      </div>
    );
  }
}

export default DailyWeather;

export const Wrapper = styled.div``;
