//render city list

import { City } from "./City.js";
import { useCity } from "./CityDataProvider.js";

// loop through the city data
// each city gets returned formatted with HTML via the City function
// writes out HTML in between the class element via the query selector

export const CityList = () => {

    const contentElement = document.querySelector(".containerBottom__cities");

    const cities = useCity()
    let cityHTML = "<h2>Cities</h2><ul>"
    for (const x of cities){
        cityHTML += City(x)
    }

    cityHTML += "</ul>"

    contentElement.innerHTML += cityHTML;

}

