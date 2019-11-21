import React, { Component } from "react";
import { BrowserRouter, Redirect, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import FavoritesScreen from "./screens/FavoritesScreen";
import MainScreen from "./screens/MainScreen";

class NavigationRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Bar>
        <BrowserRouter>
          <div>
            <nav style={{ textAlign: "left" }}>
              <NavUl>
                <Tab>
                  <Link to="/">home</Link>
                </Tab>
                <Tab>
                  <Link to="/favorites">favorites</Link>
                </Tab>
              </NavUl>
            </nav>
          </div>
          <Switch>
            <Route exact path="/" component={MainScreen}></Route>
            <Route path="/favorites" component={FavoritesScreen}></Route>
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      </Bar>
    );
  }
}

export default NavigationRouter;

const Bar = styled.div`
  background-color: rgb(83, 71, 103);
  max-height: 55px;
  width: 100%;
`;

const NavUl = styled.ul`
  padding: 5px;
  font-size: 15px;
  margin-left: 1rem;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Tab = styled.li`
  list-style-type: none;
  display: inline-flex;
  flex-direction: row;
  width: 50px;
  margin: 10px;
  justify-content: space-between;
  color: #ffffff;
  text-align: center;
  @media (max-width: 768px) {
    width: 40px;
  }
  & a {
    color: #ffffff;
    text-decoration: none;
    text-align: center;
    width: 100%;
  }
  & button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 30px;
    color: #ffffff;
    font-family: "Arial";
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  & img {
    width: 15px;
    height: auto;
  }
  & span {
    margin: 0px 8px;
    font-size: 15px;
    border: 1px solid #ffffff;
    padding: 5px;
  }
`;
