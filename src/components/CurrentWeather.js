import React, { Fragment, useContext } from "react";
import CurrentWeatherCard from "./CurrentWeatherCard";
import styled from "styled-components";
import CityNameContext from "../context/CityNameContext";

export function CurrentWeather() {
  const msg = useContext(CityNameContext);

  /*
  state = {
    loading: true,
    curWeather: null,
    city: null,
    key: "waav5j72O6VxiKy9ZokbywHChijTHTiD"
  };

  componentDidMount() {
    this.fetchCurrentWeatherApi();
    //  this.fetchLocation();
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
      `http://dataservice.accuweather.com/currentconditions/v1/215793?apikey=` +
      this.state.key +
      `&details=true`;
    fetch(currentWeatherApi)
      .then(res => res.json())
      .then(json =>
        this.setState({ loading: false, curWeather: json }, console.log(json))
      )
      .catch(err => console.log(err));
  };

  render() {
    let { loading, curWeather, city } = this.state;
*/
  return (
    <Fragment>
      <h2>yyyy</h2>
      <div>{msg}</div>
      {/** 
      {loading ? (
        <div> loading....</div>
      ) : (
        <Wrapper>
          <h2>{city}</h2>
          <div>{msg}</div>
          <CurrentWeatherCard
            currentWeatherData={curWeather}
          ></CurrentWeatherCard>
        </Wrapper>
      )}
    */}
    </Fragment>
  );
  /* }*/
}

const Wrapper = styled.div`
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
