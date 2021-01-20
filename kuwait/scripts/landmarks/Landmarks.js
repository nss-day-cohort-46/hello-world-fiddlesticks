export const Landmarks = (theLandmark) => {
  return `
    <li class=listElements>
    ${theLandmark.name}<br>
     ${theLandmark.type}<br>
    </li>
    `;
};
