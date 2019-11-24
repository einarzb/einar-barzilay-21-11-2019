import React from "react";
import styled from "styled-components";

const CitiesFetched = ({ citiesArr }) => {
  let cityComponent = citiesArr.map(function(city, i) {
    return <City key={i}>{city.LocalizedName}</City>;
  });

  return <CitySuggestions>{cityComponent}</CitySuggestions>;
};

export default CitiesFetched;

const CitySuggestions = styled.div`
  display: block;
  width: 225px;
  height: auto;
  margin: 0px auto;
  background-color: black;
`;

const City = styled.div`
  display: block;
  color: #ffffff;
`;
