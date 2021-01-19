//returns individ city HTML

export const City = (theCity) => {

    return `
    <p class="cityCard__name">${theCity.name}</p>
    <p class="cityCard__population">${theCity.population}</p>
    <p class="cityCard__description">${theCity.description}</p>
    `
}

