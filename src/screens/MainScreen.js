import React, { Component } from "react";
import styled from "styled-components";
import DailyWeather from "../components/DailyWeather";
import CurrentWeather from "../components/CurrentWeather";
import SearchCity from "../components/SearchCity";

class MainScreen extends React.Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <SearchCity />
        <CurrentWeather />
        <DailyWeather />
      </Wrapper>
    );
  }
}

export default MainScreen;

export const Wrapper = styled.div`
  background-color: #282525;
  margin-top: -1.1rem;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;
