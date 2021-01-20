export const City = (theCity) => {
  return `  
       <li class=listElements>
       
      ${theCity.name}<br>
      population: ${theCity.population}<br>
      description: ${theCity.description}
      
  </li>
    
            `;
};
