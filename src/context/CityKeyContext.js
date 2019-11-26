import { createContext } from "react";
console.log("im context");

const CityKeyContext = createContext({
  cityKeys: [],
  addCityKey: cityKey => {
    console.log(cityKey);
    console.log(this.cityKeys);
    console.log("yyy");
  }
});

export default CityKeyContext;
