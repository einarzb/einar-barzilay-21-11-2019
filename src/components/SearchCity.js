import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import axios from "axios";
import styled from "styled-components";
import Autocomplete from "react-autocomplete";
import {
  cityKeyAction,
  cityNameAction,
  mainThemeAction
} from "../redux/actions/index.js";
import { MOON, SUNRISE } from "../assets/index";
import { placeholder } from "@babel/types";

const API_URL =
  "https://dataservice.accuweather.com/locations/v1/cities/autocomplete";

class SearchCity extends Component {
  state = {
    query: "",
    cities: [],
    selectedCity: "",
    apiKey: this.props.apiKey,
    cityKey: this.props.cityKey,
    cityData: this.props.cityData
  };

  fetchMeCities = () => {
    console.log("hola a search has been called and i eill seatch ");

    axios
      .get(`${API_URL}?apikey=${this.props.apiKey}&q=${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          cities: data
        });
      });
  };

  changeValue = event => {
    this.setState(
      {
        query: event.target.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.fetchMeCities();
          }
        }
      }
    );
  };

  selectedValue = val => {
    this.setState({
      query: val,
      selectedCity: val
    });

    let { cityNameRedux } = this.props;
    this.matchKey(val, this.state.cities);
    cityNameRedux(val);
    //it takes some time so build a buffer
    setTimeout(() => {
      this.buildUrl();
    }, 500);
  };

  matchKey = (val, res) => {
    let duckingKey = 0;
    for (var i = 0; i < res.length; i++) {
      if (res[i].LocalizedName == val) {
        duckingKey = res[i].Key;
        this.setState({ cityKey: duckingKey });
        let { cityKeyRedux } = this.props;
        let cityKey = this.props.cityKey;
        cityKeyRedux(duckingKey);
      }
    }
  };

  buildUrl = () => {
    let url =
      `https://dataservice.accuweather.com/currentconditions/v1/` +
      this.props.cityKey +
      `?apikey=` +
      this.props.apiKey +
      `&details=true`;

    this.fetchCurrentWeatherApi(url);
  };

  fetchCurrentWeatherApi = url => {
    let jsonData = "";
    let { cityRedux } = this.props;

    fetch(url)
      .then(res => res.json())
      .then(function(json) {
        jsonData = json;
        console.log(jsonData);

        cityRedux(jsonData);
      })
      .catch(err => console.log(err));
  };

  render() {
    let { query, cities } = this.state;
    let { cityName, cityTheme } = this.props;
    return (
      <Fragment>
        <Greetings>
          <img
            src={cityTheme ? SUNRISE : MOON}
            style={{ marginRight: "1rem", width: "27px" }}
          />
          {cityTheme ? "Good Morning" : "Good Evening"} {cityName}!{" "}
        </Greetings>

        <SearchBar>
          <Autocomplete
            inputProps={{ placeholder: "Type Here" }}
            getItemValue={item => item.LocalizedName}
            items={cities}
            renderItem={(item, isHighlighted) => (
              <div
                style={{
                  fontSize: "18px",
                  background: isHighlighted ? "lightGrey" : "rgb(100, 186, 199)"
                }}
                key={item.Key}
              >
                {item.LocalizedName}
              </div>
            )}
            value={query}
            onChange={this.changeValue}
            onSelect={this.selectedValue}
            menuStyle={{
              borderRadius: "3px",
              boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgb(0, 0, 0)",
              padding: "0",
              fontSize: "90%",
              position: "fixed",
              overflow: "auto",
              maxHeight: "50%",
              zIndex: "99999"
            }}
          />
        </SearchBar>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  let props = {
    cityName: state.cityReducer.cityName,
    cityKey: state.cityReducer.cityKey,
    apiKey: state.apiReducer.apiKey,
    cityData: state.cityReducer.cityData,
    cityTheme: state.cityReducer.cityTheme
  };
  console.log("search props");
  console.log(props);

  return props;
};

const mapDispatchToProps = dispatch => ({
  cityKeyRedux: cityKey => dispatch(cityKeyAction(cityKey)),
  cityNameRedux: cityName => dispatch(cityNameAction(cityName)),
  cityRedux: cityData => dispatch(mainThemeAction(cityData))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchCity);

const SearchBar = styled.div`
  font-size: 1.2rem;
  width: 600px;
  background-color: rgba(255, 255, 255, 0.1);
  height: 50px;
  border-radius: 0.2em;
  display: block;
  margin: 1rem auto 0;
  color: #ffffff;
  padding: 0px 0rem 0 1rem;
  @media (max-width: 768px) {
    width: 80%;
  }
  & div {
    border: none;
    width: inherit;
    height: auto;
    & input {
      border: none;
      focus: none;
      outline: none;
      color: #ffffff;
      font-size: 1.3rem;
      height: 40px;
      background-color: transparent;
      width: 85%;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;

const Greetings = styled.span`
  display: inline-block;
  font-size: 1.7rem;
  color: #ffffff;
  line-height: 3;
  text-align: center;
`;
