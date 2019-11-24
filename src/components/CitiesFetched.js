import React from "react";
import styled from "styled-components";

const CitiesFetched = ({ citiesArr }) => {
  let cityComponent = citiesArr.map(function(city, i) {
    return (
      <City key={i}>
        {city.LocalizedName} | {city.Key}{" "}
      </City>
    );
  });

  return <CitySuggestions>{cityComponent}</CitySuggestions>;
};

export default CitiesFetched;

const CitySuggestions = styled.div`
  display: block;
  width: 41%;
  height: auto;
  background-color: black;
  position: absolute;
  top: 67px;
  left: 29.5%;
`;

const City = styled.div`
  display: block;
  color: #ffffff;
`;
