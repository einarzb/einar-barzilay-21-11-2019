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
    //let cityName = this.props.cityKey;
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
      <div
        style={{
          fontize: "1.2rem",
          width: "40%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          height: "50px",
          borderRadius: "0.2em",
          display: "block",
          margin: "1rem auto 0",
          color: "#ffffff",
          padding: "0px 0rem 0 1rem"
        }}
      >
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  let props = {
    cityName: state.cityReducer.cityName,
    cityKey: state.cityReducer.cityKey,
    apiKey: state.apiReducer.apiKey
  };

  // console.log("----im props search city:----");
  //console.log(props);
  //console.log("--------------");

  return props;
};

const mapDispatchToProps = dispatch => ({
  cityKeyRedux: cityKey => dispatch(cityKeyAction(cityKey)),
  cityNameRedux: cityName => dispatch(cityNameAction(cityName))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchCity);

const SearchBar = styled.input`
  font-size: 1.2rem;
  width: 40%;
  background-color: rgba(255, 255, 255, 0.1);
  height: 50px;
  border-radius: 0.2em;
  display: block;
  margin: 1rem auto 0;
  color: #ffffff;
  border: none;
  padding: 0px 0rem 0 1rem;
  @media (max-width: 768px) {
    padding: 0 0 0 10px;
    width: 80%;
    height: 40px;
  }
`;
