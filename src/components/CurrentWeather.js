import React, { Component, Fragment } from "react";
import CurrentWeatherCard from "./CurrentWeatherCard";
import styled from "styled-components";

class CurrentWeather extends Component {
  state = {
    loading: true,
    curWeather: null,
    city: null,
    key:"IFIqv12FwNC7zQWWGTQqMWRhbDGSEnOG"

  };

  componentDidMount() {
    this.fetchCurrentWeatherApi();
    //  this.fetchLocation();
  }
  /*
  fetchLocation = () => {
    let location =
      "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=2OxIxAAbVtWlSTBVlvTONG40GmdTEkAa&q=tel-aviv";
    fetch(location)
      .then(res => res.json())
      .then(json => this.setState({ city: json[0].LocalizedName }))
      .catch(err => console.log(err));
  };
*/

  fetchCurrentWeatherApi = () => {
    let currentWeatherApi =
      `http://dataservice.accuweather.com/currentconditions/v1/215793?apikey=`+this.state.key+`&details=true`;
    fetch(currentWeatherApi)
      .then(res => res.json())
      .then(json =>
        this.setState({ loading: false, curWeather: json }, console.log(json))
      )
      .catch(err => console.log(err));
  };

  render() {
    let { loading, curWeather, city } = this.state;

    return (
      <Fragment>
        {loading ? (
          <div> loading....</div>
        ) : (
          <Wrapper>
            {/**TODO: should be fetched from redux useReducer from citiesFetched */}
            <h2>{city}</h2>
            <CurrentWeatherCard
              currentWeatherData={curWeather}
            ></CurrentWeatherCard>
          </Wrapper>
        )}
      </Fragment>
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
