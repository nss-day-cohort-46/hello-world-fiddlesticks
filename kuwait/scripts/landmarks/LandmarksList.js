//render city list

import { Landmarks } from "./Landmarks.js";
import { useLandmarks } from "./LandmarksDataProvider.js";

// loop through the data
// each item gets returned formatted with HTML
// writes out HTML in between the class element via the query selector

export const LandmarksList = () => {
  const contentElement = document.querySelector(".containerBottom__landmarks");

  const landmarksArray = useLandmarks();
  let landHTML = "<h2>Landmarks</h2><ul>";
  for (const x of landmarksArray) {
    landHTML += Landmarks(x);
  }

  landHTML += "</ul>";

  contentElement.innerHTML += landHTML;
};
