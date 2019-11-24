import React, { Component } from "react";
import CurrentWeatherCard from "./CurrentWeatherCard";
import styled from "styled-components";
import { tsThisType } from "@babel/types";

class CurrentWeather extends Component {
  state = {
    loading: true,
    currentWeather: null,
    city: null
  };

  componentDidMount() {
    this.fetchCurrentWeatherApi();
    this.fetchLocation();
  }

  fetchLocation = () => {
    let location =
      "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=2OxIxAAbVtWlSTBVlvTONG40GmdTEkAa&q=tel-aviv";
    fetch(location)
      .then(res => res.json())
      .then(json => this.setState({ city: json[0].LocalizedName }))
      .catch(err => console.log(err));
  };

  fetchCurrentWeatherApi = () => {
    let currentWeatherApi =
      "http://dataservice.accuweather.com/currentconditions/v1/215793?apikey=2OxIxAAbVtWlSTBVlvTONG40GmdTEkAa&details=true";
    fetch(currentWeatherApi)
      .then(res => res.json())
      .then(json =>
        this.setState(
          { loading: false, currentWeather: json },
          console.log(json)
        )
      )
      .catch(err => console.log(err));
  };

  render() {
    let { loading, currentWeather, city } = this.state;

    return (
      <div>
        {loading ? (
          <div> loading....</div>
        ) : (
          <Wrapper>
            <h2>{city}</h2>
            <CurrentWeatherCard
              currentWeatherData={currentWeather}
            ></CurrentWeatherCard>
          </Wrapper>
        )}
      </div>
    );
  }
}

export default CurrentWeather;

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
