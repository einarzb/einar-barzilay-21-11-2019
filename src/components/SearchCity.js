import React, { Component } from "react";
import styled from "styled-components";

class SearchCity extends Component {
  state = {
    query: ""
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };

  render() {
    return (
      <form>
        <SearchBar
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
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
