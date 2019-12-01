import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "axios";
import styled from "styled-components";
import Autocomplete from "react-autocomplete";
import { cityKeyAction, cityNameAction } from "../redux/actions/index.js";

const API_URL =
  "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";

class SearchCity extends Component {
  state = {
    query: "",
    results: [],
    selectedCity: "",
    cityKey: "",
    apiKey: this.props.apiKey
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
    let { query, results } = this.state;
    return (
      <SearchBar>
        <Autocomplete
          getItemValue={item => item.LocalizedName}
          items={results}
          renderItem={(item, isHighlighted) => (
            <div
              style={{
                fontSize: "18px",
                background: isHighlighted ? "lightGrey" : "black"
              }}
              key={item.Key}
            >
              {item.LocalizedName}
            </div>
          )}
          value={query}
          onChange={this.changeValue}
          onSelect={this.selectedValue}
        />
      </SearchBar>
    );
  }
}

const mapStateToProps = state => {
  let props = {
    cityName: state.cityReducer.cityName,
    cityKey: state.cityReducer.cityKey,
    apiKey: state.apiReducer.apiKey
  };

  return props;
};

const mapDispatchToProps = dispatch => ({
  cityKeyRedux: cityKey => dispatch(cityKeyAction(cityKey)),
  cityNameRedux: cityName => dispatch(cityNameAction(cityName))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchCity);

const SearchBar = styled.div`
  font-size: 1.8rem;
  width: 600px;
  background-color: rgba(255, 255, 255, 0.1);
  height: 50px;
  border-radius: 0.2em;
  display: block;
  margin: 1rem auto 0;
  color: #ffffff;
  padding: 0px 0rem 0 1rem;
  & div {
    border: none;
    width: inherit;
    height: auto;
    & input {
      border: none;
      focus: none;
      outline: none;
      color: #ffffff;
      font-size: 1.7rem;
      height: 40px;
      background-color: transparent;
      width: 85%;
    }
  }
`;
