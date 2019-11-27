import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Autocomplete from "react-autocomplete";

const API_KEY = "MH15SyXdJ9cGMQ6CUC9GX68iQ5B2K7nG";
const API_URL =
  "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";

function SearchCity() {
  //init state
  const [data, setData] = useState({
    Key: "215854",
    LocalizedName: "Tel-aviv Port"
  });
  const [query, setQuery] = useState("Tel Aviv"); //set inital state
  const [cityKey, setCityKey] = useState(215854);
  const [loading, setLoading] = useState(true);
  //handlers
  const changeValue = event => setQuery(event.target.value);
  const selectedValue = val => setQuery(val);

  //invoke everytime component finish rendering
  useEffect(() => {
    const fetchMe = async () => {
      const result = await axios(`${API_URL}?apikey=${API_KEY}&q=${query}`);
      setData(result.data);
      setLoading(false);
    };

    const timer = setTimeout(() => {
      matchKey(query, data);
    }, 1000);

    fetchMe();
    return () => clearTimeout(timer);
  }, [query]);

  const matchKey = (query, res) => {
    let duckingKey = 0;
    for (var i = 0; i < res.length; i++) {
      if (res[i].LocalizedName == query) {
        duckingKey = res[i].Key;
        setCityKey(duckingKey);
      }
    }
  };

  return (
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
      {loading ? (
        <div>loading...</div>
      ) : (
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
      )}
    </div>
  );
}

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
