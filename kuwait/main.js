console.log("hello world");

import { City } from "./scripts/cities/City.js";
const testCity = {
  name: "Kuwait City",
  population: 4000000,
  description:
    "83% of the total population resides in the capital, Kuwait City.",
  image: "",
};

console.log("cityHTML", City(testCity));
