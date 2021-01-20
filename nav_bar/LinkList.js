import { useLink } from "./LinkDataProvider.js"
import { Link } from "./Link.js"

export const LinkList = () => {
    const contentElement = document.querySelector("header");
    const links = useLink()

    let linkskHTMLRepresentation = "";
    for (const link of links) {
        linkskHTMLRepresentation += Link(link)
    }

    contentElement.innerHTML += `
        <h3>Landmarks To See</h3>
        <ul class="ulCard">
            ${landmarkHTMLRepresentation}
        </ul> 
    
    `

    TODO: finish from line 13.
};
