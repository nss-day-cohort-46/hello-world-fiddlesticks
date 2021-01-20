import { City } from "./City.js"
import { useCity } from "./CityDataProvider.js"

export const CityList = () => {
    const contentElement = document.querySelector(".cities")
    const cities = useCity()

    let citiesHTMLRepresentations = ""
    for(const city of cities) {
        citiesHTMLRepresentations += City(city)
    }

    contentElement.innerHTML += `
        <h3>Cities to Visit</h3>
        <ul class="ulCard">
            ${citiesHTMLRepresentations}
        </ul>
    `
}
