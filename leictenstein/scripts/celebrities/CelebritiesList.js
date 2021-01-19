import { Celeberty } from "./Celebrity.js"
import { useCeleberty } from "./CelebritiesDataProvider.js"

export const CelebertyList = () => {
    const contentElement = document.querySelector("people")
    const celeberties = useCeleberty()

    let celebertiesHTMLRepresentation = ""
    for (const celeb of celerties) {
        celebertiesHTMLRepresentation += Celeberty(celeb)
    }

    contentElement.innerHTML += `
    <h3>Famous People</h3>
    <ul class="ulCard">
        ${celebertiesHTMLRepresentation}
    </ul>
    `

}
