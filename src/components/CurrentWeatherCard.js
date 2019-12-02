import React from "react";
import styled from "styled-components";

let jsonData = "";

const fetchCurrentWeatherApi = url => {
  fetch(url)
    .then(res => res.json())
    .then(function(json) {
      jsonData = json;
    })
    .catch(err => console.log(err));
};

const CurrentWeatherCard = ({ cityKey, apiKey }) => {
  let currentForecast = "";

  let url = "";

  if (cityKey == "") {
  } else {
    url =
      `https://dataservice.accuweather.com/currentconditions/v1/` +
      cityKey +
      `?apikey=` +
      apiKey +
      `&details=true`;
    fetchCurrentWeatherApi(url);

    if (jsonData != "") {
      console.log(jsonData);

      currentForecast = jsonData.map(function(item, i) {
        return (
          <Card key={i}>
            <Main>
              <Intro>IT IS </Intro>
              <WeatherDescription>{item.WeatherText}</WeatherDescription>
            </Main>

            <WeatherIcon
              src={
                "https://www.accuweather.com/images/weathericons/" +
                item.WeatherIcon +
                ".svg"
              }
            />
            <DataRow>
              <Temp>
                {item.Temperature.Metric.Value}
                <sup>{item.Temperature.Metric.Unit}</sup>
              </Temp>
              <Temp>
                {item.Temperature.Imperial.Value}
                <sup>{item.Temperature.Imperial.Unit}</sup>
              </Temp>
            </DataRow>
            <span>Feels like {item.ApparentTemperature.Metric.Value}</span>
            <span>Humidity {item.RelativeHumidity}%</span>
          </Card>
        );
      });
    }
  }

  return <CurrentWeather>{currentForecast}</CurrentWeather>;
};

export default CurrentWeatherCard;

const Card = styled.div`
  /*background-image: url("https://live.staticflickr.com/8730/28527438302_4f5cd0ed97_n.jpg");*/
  background-color: rgba(0, 0, 0, 0.3);
  background-repeat: no-repeat;
  background-position: center;
  /*opacity: 0.6;*/
  background-size: cover;
  color: #ffffff;
  width: 40%;
  height: 300px;
  display: inline-flex;
  flex-direction: column;
  height: 300px;
  border-radius: 0.5em;
  padding: 0.5rem;
  @media (max-width: 768px) {
    width: 81%;
    margin: 0;
    height: auto;
  }
`;

const WeatherIcon = styled.img`
  width: 5rem;
  height: auto;
`;

const CurrentWeather = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: end;
  margin-top: 1rem;
  padding: 0rem;
  @media (max-width: 768px) {
    padding: 0;
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
  justify-content: space-between;
  margin-top: 0.3rem;
  padding: 8px;
  align-items: center;
  width: 100px;
`;

const WeatherDescription = styled.span`
  color: #ffffff;
  font-size: 5rem;
`;

const Intro = styled.span`
  width: 20px;
  height: auto;
  font-size: 1.3rem;
  line-height: 1;
  margin-top: 2.3rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

const Main = styled.div`
  display: inline-flex;
  flex-direction: row;
`;
