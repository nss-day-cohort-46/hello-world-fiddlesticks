import { City } from "./scripts/cities/City.js";
import { largeCity } from "./CityDataProvider.js";

export const CityList = () => {
  const contentElement = document.querySelector(".contentContainer");
  const theCity = largeCity();

  let cityyyHTMLRepresentations = "";
  for (const cityyy of theCity) {
    cityyyHTMLRepresentations += City(cityyy);
  }

  // Putting onto the dom
};

City();
