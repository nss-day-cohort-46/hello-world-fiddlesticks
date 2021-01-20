import { City } from "./City.js";
import { useCity } from "./CityDataProvider.js";

export const CityList = () => {
  const contentElement = document.querySelector(".containerBottomArg");

  const cities = useCity();
  console.log(cities);
  let cityHTML = "<h2>Cities</h2>";
  for (const x of cities) {
    cityHTML += City(x);
  }
  cityHTML += "</ul>";

  contentElement.innerHTML += cityHTML;
  // console.log(cityHTML);
};

// City();
// largeCity();
