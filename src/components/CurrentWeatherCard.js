import React from "react";
import styled from "styled-components";

const fetchCurrentWeatherApi = url => {
  console.log("step 03 - im here in fetch current weather api");
  let val = "";
  fetch(url)
    .then(res => res.json())
    .then(json => (val = json))
    .catch(err => console.log(err));
};

//let currentWeatherData = "";

const CurrentWeatherCard = ({ data, apiKey }) => {
  console.log(
    "step 02 - im CurrentWeatherCard and I got cityKey and apiKey - I will bring back current daily weather"
  );
  let url = "";
  if (data == "") {
    console.log(data);

    console.log("dont have a city yet");
  } else {
    console.log("I have data = cityKey");
    console.log(data);

    url =
      `http://dataservice.accuweather.com/currentconditions/v1/` +
      data +
      `?apikey=` +
      apiKey +
      `&details=true`;
    console.log(url);
    console.log(
      "now that I have url I can fetch and display current weather data"
    );

    fetchCurrentWeatherApi(url);
  }

  //console.log(what);

  /*  {
    return (

      <Card key={i}>
        <WeatherDescription>{item.WeatherText}</WeatherDescription>
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
      </Card>
    );
  });
*/
  let currentForecast = <div>{url}</div>;

  return <CurrentWeather>{currentForecast}</CurrentWeather>;
};

export default CurrentWeatherCard;

const Card = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  width: 50%;
  height: 300px;
  display: inline-flex;
  flex-direction: column;
  height: 300px;
  border-radius: 0.5em;
  padding: 0.5rem;
  @media (max-width: 768px) {
    width: 85%;
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
  width: 60%;
  justify-content: space-between;
  margin-top: 0.3rem;
  padding: 8px;
`;

const WeatherDescription = styled.span`
  color: #ec9e09;
`;
