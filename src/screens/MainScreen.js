import React, { Component } from "react";
import styled from "styled-components";
import DailyWeather from "../components/DailyWeather";

class MainScreen extends React.Component {
  state = {};

  render() {
    return (
      <div>
        
        <DailyWeather />
      </div>
    );
  }
}

export default MainScreen;