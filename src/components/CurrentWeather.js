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

  componentDidMount() {
    // let nb = this.state.apiStringToFetchCurrent;
    //   this.fetchCurrentWeatherApi(nb);
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


  fetchCurrentWeatherApi = nb => {
    //  console.log(nb);

    fetch(nb)
      .then(res => res.json())
      .then(json =>
        this.setState({ loading: false, curWeather: json }, console.log(json))
      )
      .catch(err => console.log(err));
  };
*/
  render() {
    let { loading } = this.state;
    let { cityName, cityKey, apiKey } = this.props;
    //console.log("current weather - step 01");

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

  //  console.log("----im props current weather:----");
  // console.log(props);
  //console.log("--------------");

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
