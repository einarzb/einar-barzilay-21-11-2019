import React from "react";
import styled from "styled-components";

const toggleTempType = temp => {
  console.log(temp);
  let convertedTemp = Math.round((temp - 32) / 1.8);
  console.log(convertedTemp);
};

const DailyWeatherCard = ({ weatherData, convertedTemp }) => {
  let dailyForecast = weatherData.DailyForecasts.map(function(item, i) {
    return (
      <Card key={i}>
        <span> {item.Date}</span>
        <WeatherDescription>{item.Day.IconPhrase}</WeatherDescription>
        <WeatherIcon
          src={
            "https://www.accuweather.com/images/weathericons/" +
            item.Day.Icon +
            ".svg"
          }
        />
        <DataRow>
          <Temp onClick={() => toggleTempType(item.Temperature.Maximum.Value)}>
            <div>Maximum</div>
            {item.Temperature.Maximum.Value}
            <sup>{item.Temperature.Maximum.Unit}</sup>
            {convertedTemp}
          </Temp>
          <Temp onClick={() => toggleTempType(item.Temperature.Minimum.Value)}>
            <div>Minimum</div>
            {item.Temperature.Minimum.Value}
            <sup>{item.Temperature.Minimum.Unit}</sup>
            {convertedTemp}
          </Temp>
        </DataRow>
      </Card>
    );
  });

  return <WeatherCardsRow>{dailyForecast}</WeatherCardsRow>;
};

export default DailyWeatherCard;

const Card = styled.div`
  background-color: rgba(33, 48, 81, 0.4);
  color: #ffffff;
  width: 200px;
  height: 220px;
  display: inline-flex;
  flex-direction: column;
  border-radius: 0.5em;
  padding: 0.5rem;
  margin: 0 0 1rem 0;
  @media (max-width: 768px) {
    width: 85%;
    margin: 1rem 0;
    height: auto;
  }
`;

const WeatherIcon = styled.img`
  width: 5rem;
  height: auto;
`;

const WeatherCardsRow = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 94%;
  justify-content: space-evenly;
  margin-top: 3rem;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
    width: 98%;
  }
`;

const Temp = styled.span`
  font-size: 1.3rem;
  & div {
    font-size: 0.7rem;
  }
  & sup {
    font-size: 0.6rem;
    margin-left: 5px;
  }
`;

const DataRow = styled.div`
  display: inline-flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  margin-top: 0.3rem;
  padding: 8px;
`;

const WeatherDescription = styled.span`
  color: #ec9e09;
`;