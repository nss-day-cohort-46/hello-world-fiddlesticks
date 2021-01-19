//returns individ city HTML

export const City = (theCity) => {

    return `
    <li class=listElements>
    ${theCity.name}<br>
    Pop: ${theCity.population}<br>
    Desc: ${theCity.description}
    </li>
    `
}

