export const City = (theCity) => {
  return;
  `<div class="cityCard">
        <p class="cityCard__name">${theCity.name}</p>
        <p class="cityCard__population">${theCity.population}</p>
        <p class="cityCard__description">${theCity.description}</p>
        <img src="${theCity.image}" alt="city image" class="cityCard__img"></img>
    </div>
    
            `;
};
