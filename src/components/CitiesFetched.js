import React from "react";
import styled from "styled-components";

const CitiesFetched = ({ citiesArr }) => {
  console.log(citiesArr);
  let cityComponent = citiesArr.map(function(city, i) {
    return <City key={i}>{city.LocalizedName}</City>;
  });

  return <div>{cityComponent}</div>;
};

export default CitiesFetched;

const City = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 200px;
  height: auto;
  margin: 0px 5px;
`;
