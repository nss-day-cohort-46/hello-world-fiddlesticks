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
        <div class="header__navItems">
            ${linkskHTMLRepresentation}
        </div>
    `
};
