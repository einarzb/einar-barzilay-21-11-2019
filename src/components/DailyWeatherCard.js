import React from "react";
import styled from "styled-components";

const toggleTempType = temp => {
  let convertedTemp = Math.round((temp - 32) / 1.8);
  return convertedTemp;
};
const DateParser = date => {
  let str = date.date;
  let res = str.slice(5, 10);
  let swap = res.replace("-", "/");

  date = swap;

  return date;
};

const DailyWeatherCard = ({ weeklyData, convertedTemp }) => {
  let dailyForecast = "";

  dailyForecast = weeklyData.map(function(item, i) {
    return (
      <Card key={i}>
        <DateParser date={item.Date}></DateParser>
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
    width: 89%;
    margin: 1rem 0;
    height: auto;
  }
`;

const WeatherIcon = styled.img`
  width: 5rem;
  height: auto;
  margin-top: 1rem;
`;

const WeatherCardsRow = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 87%;
  justify-content: space-between;
  margin-top: 1rem;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0rem;
    width: 100%;
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
  color: #f7b267;
  margin-top: 0.5rem;
`;
