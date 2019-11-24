import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import CitiesFetched from "../components/CitiesFetched";
import styled from "styled-components";

const API_KEY = "2OxIxAAbVtWlSTBVlvTONG40GmdTEkAa";
const API_URL =
  "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";

const INITIAL_CITIES = [
  {
    Key: "215793",
    LocalizedName: "Tel-aviv Port"
  }
];
/*
http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=3NhsptgUxfS7Y2mMnq04QWhMUsfyQYg0&q=new

getInfo = () => {
  axios
    .get(`${API_URL}?apikey=${API_KEY}&q=${this.state.query}`)
    .then(({ data }) => {
      this.setState({
        results: data.data
      });
    });
};
http://dataservice.accuddweather.com/locations/v1/cities/autocomplete?apikey=3NhsptgUxfS7Y2mMnq04QWhMUsfyQYg0&q=tel-aviv
http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=3NhsptgUxfS7Y2mMnq04QWhMUsfyQYg0&q=tel-aviv
*/
function SearchCity() {
  const [data, setData] = useState(INITIAL_CITIES);
  const [query, setQuery] = useState("tel-aviv"); //set inital state
  const [isLoading, setIsLoading] = useState(false);
  const changeValue = event => setQuery(event.target.value);

  useEffect(() => {
    const fetchMe = async () => {
      setIsLoading(true);
      const result = await axios(`${API_URL}?apikey=${API_KEY}&q=${query}`);
      setData(result.data);
      setIsLoading(false);
    };
    /*
    async function getCities() {
      setIsLoading(true);

      axios
        .get(`${API_URL}?apikey=${API_KEY}&q=${query}`)
        .then(res => {
          setData(res.data);
          setIsLoading(false);

        })
        .catch(err => {
          console.log(err);
        });
    }
*/
    console.log(data, [data]);

    /*
    const fetchData = async () => {
      const result = await axios(`${API_URL}?apikey=${API_KEY}&q=${city}`);
      setData(result.data);
    };*/
    fetchMe();
    /* return () => {
      isMounted = false;
    };
    */
  }, [query]);
  return (
    <Fragment>
      <SearchBar
        placeholder=" Get the weather of..."
        value={query}
        onChange={changeValue}
      />
      {isLoading ? (
        <div>Loading.....</div>
      ) : (
        <CitiesFetched citiesArr={data}></CitiesFetched>
      )}
      {/**
        <span>
          
          <ul>
            {data.map(item => (
              <li key={item.Key}>
                <a href="#">{item.LocalizedName}</a>
              </li>
            ))}
          </ul>
        </span>
      <CitiesFetched citiesArr={data.hits}></CitiesFetched>
           <ul>
          {data.hits.map(item => (
            <li key={item.Key}>
              <a href="#">{item.Key}</a>
            </li>
          ))}
        </ul>
       */}
    </Fragment>
  );
}
/*  
  useEffect(() => {
    async function getCities() {
      axios
        .get(`${API_URL}?apikey=${API_KEY}&q=${city}`)
        .then(res => {
          setData(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
    console.log(city, [city]);
    console.log(data, [data]);
  });
*/

export default SearchCity;

const SearchBar = styled.input`
  font-size: 1.2rem;
  jwidth: 40%;
  background-color: rgba(255, 255, 255, 0.1);
  height: 50px;
  border-radius: 0.2em;
  display: block;
  margin: 1rem auto 0;
  color: #ffffff;
  border: none;
  padding: 0px 0rem 0 1rem;
  @media (max-width: 768px) {
    padding: 0 0 0 10px;
    width: 80%;
    height: 40px;
  }
`;
