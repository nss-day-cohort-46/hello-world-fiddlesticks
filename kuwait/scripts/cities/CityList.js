import { City } from "./City.js";
import { useCity } from "./CityDataProvider.js";



export const CityList = () => {
  const contentElement = document.querySelector(".cityCard");

  const cities = useCity();
  let cityHTML = 
  for (const x of cities) {
    cityHTML = City(x)
  }
  cityHTML += "</ul>"

    contentElement.innerHTML += cityHTML;
};

// City();
// largeCity();
