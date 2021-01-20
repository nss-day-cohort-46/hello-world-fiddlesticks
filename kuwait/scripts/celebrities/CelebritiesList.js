import { Celebrities } from "./Celebrities.js";
import { useCelebrities } from "./CelebritiesDataProvider.js";

// loop through the data
// each item gets returned formatted with HTML
// writes out HTML in between the class element via the query selector

export const CelebritiesList = () => {
  const contentElement = document.querySelector(
    ".containerBottom__celebrities"
  );

  const celebritiesArray = useCelebrities();
  let celebHTML = "<h2>Celebs</h2><ul>";
  for (const x of celebritiesArray) {
    celebHTML += Celebrities(x);
  }

  celebHTML += "</ul>";

  contentElement.innerHTML += celebHTML;
};
