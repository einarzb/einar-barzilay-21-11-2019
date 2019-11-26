import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  Fragment
} from "react";
import axios from "axios";
import CitiesFetched from "../components/CitiesFetched";
import styled from "styled-components";
import Autocomplete from "react-autocomplete";
import CityKeyContext from "../context/CityKeyContext";
import cityKeyReducer from "../context/CityKeyReducer";
import { ADD_CITY_KEY } from "../context/types";
const API_KEY = "IFIqv12FwNC7zQWWGTQqMWRhbDGSEnOG";
const API_URL =
  "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";

const INITIAL_CITIES = [
  {
    Key: "215793",
    LocalizedName: "Tel-aviv Port"
  }
];

function SearchCity() {
  const [data, setData] = useState(INITIAL_CITIES);
  const [query, setQuery] = useState("tel-aviv"); //set inital state
  const [cityKey, setCityKey] = useState(12345);
  const [state, dispatch] = useReducer(cityKeyReducer, cityKey);
  const changeValue = event => setQuery(event.target.value);
  const selectedValue = val => setQuery(val);

  useEffect(() => {
    const fetchMe = async () => {
      const result = await axios(`${API_URL}?apikey=${API_KEY}&q=${query}`);
      setData(result.data);
    };

    const timer = setTimeout(() => {
      matchKey(query, data);
    }, 5000);

    fetchMe();
    return () => clearTimeout(timer);
  }, [query]);

  const matchKey = (query, res) => {
    let duckingKey = 0;
    for (var i = 0; i < res.length; i++) {
      if (res[i].LocalizedName == query) {
        duckingKey = res[i].Key;
        dispatch({
          type: ADD_CITY_KEY,
          payload: duckingKey
        });
        //setCityKey(duckingKey);
      }
    }
  };

  return (
    <CityKeyContext.Provider value={{ cityKeys: state.cityKeys, matchKey }}>
      <div
        style={{
          fontize: "1.2rem",
          width: "40%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          height: "50px",
          borderRadius: "0.2em",
          display: "block",
          margin: "1rem auto 0",
          color: "#ffffff",
          padding: "0px 0rem 0 1rem"
        }}
      >
        <Autocomplete
          getItemValue={item => item.LocalizedName}
          items={data}
          renderItem={(item, isHighlighted) => (
            <div
              style={{
                fontSize: "18px",
                background: isHighlighted ? "lightGrey" : "black"
              }}
              key={item.Key}
            >
              {item.LocalizedName}
            </div>
          )}
          value={query}
          onChange={changeValue}
          onSelect={selectedValue}
        />
      </div>
    </CityKeyContext.Provider>
  );
}

/*  
   <Fragment>

      <SearchBar
        placeholder=" Get the weather of..."
        value={query}
        onChange={changeValue}
      />
      {isLoading || data.length < 1 ? (
        <div></div>
      ) : (
        <CitiesFetched citiesArr={data}></CitiesFetched>
      )}
    </Fragment>
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
  width: 40%;
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
