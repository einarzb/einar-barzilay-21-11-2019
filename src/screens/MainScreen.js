import React, { Component } from "react";
import styled from "styled-components";
import { DailyWeather } from "../components/DailyWeather";
import { CurrentWeather } from "../components/CurrentWeather";
import SearchCity from "../components/SearchCity";

import CityNameContext from "../context/CityNameContext";

function MainScreen() {
  return (
    <Wrapper>
      <SearchCity />
      <CityNameContext.Provider value="hello freaking world">
        <CurrentWeather />
        <DailyWeather />
      </CityNameContext.Provider>
    </Wrapper>
  );
}

export default MainScreen;

export const Wrapper = styled.div`
  background-color: #222831;
  margin-top: -1.1rem;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
