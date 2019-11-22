import React, { Component } from "react";
import styled from "styled-components";
import DailyWeather from "../components/DailyWeather";

class MainScreen extends React.Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <DailyWeather />
      </Wrapper>
    );
  }
}

export default MainScreen;

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #282525;
  margin-top: -1.1rem;
`;
