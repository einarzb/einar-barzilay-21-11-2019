import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import axios from "axios";
import styled from "styled-components";
import Autocomplete from "react-autocomplete";
import { cityKeyAction, cityNameAction } from "../redux/actions/index.js";
import { MOON, SUNRISE } from "../assets/index";
import { placeholder } from "@babel/types";

const API_URL =
  "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";

class SearchCity extends Component {
  state = {
    query: "",
    results: [],
    selectedCity: "",
    cityKey: "",
    apiKey: this.props.apiKey,
    isDayTime: this.props.dayOrNight
  };

  fetchMeCities = () => {
    axios
      .get(`${API_URL}?apikey=${this.state.apiKey}&q=${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data
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
    this.matchKey(val, this.state.results);
    cityNameRedux(val);
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

  render() {
    let { query, results, isDayTime } = this.state;
    let { cityName } = this.props;
    return (
      <Fragment>
        <Greetings>
          <img
            src={isDayTime ? SUNRISE : MOON}
            style={{ marginRight: "1rem", width: "27px" }}
          />
          {isDayTime ? "Good Morning" : "Good Night"} {cityName}!{" "}
        </Greetings>

        <SearchBar>
          <Autocomplete
            inputProps={{ placeholder: "Type Here" }}
            getItemValue={item => item.LocalizedName}
            items={results}
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
    dayOrNight: state.apiReducer.dayOrNight
  };

  return props;
};

const mapDispatchToProps = dispatch => ({
  cityKeyRedux: cityKey => dispatch(cityKeyAction(cityKey)),
  cityNameRedux: cityName => dispatch(cityNameAction(cityName))
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
