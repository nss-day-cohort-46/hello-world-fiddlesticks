import { LandmarksCollection } from "./LandmarksDataProvider.js"
import { useLandmark } from "./Landmarks.js"

export const LandmarkList = () => {
    const contentElement = document.querySelector(".countryList__card");
    const landmarks = LandmarksCollection()

    let landmarkHTMLRepresentation = "";
    console.log("landmarks: ", landmarks)
    for (const lm of landmarks) {
        landmarkHTMLRepresentation += useLandmark(lm)
    }

    contentElement.innerHTML += `
        <h3>Landmarks To See</h3>
        <ul class="ulCard">
            ${landmarkHTMLRepresentation}
        </ul> 
    
    `
};

/* <h3>Landmarks To See</h3>
    <ul class="ulCard">
        <li class="ulCard_li">Landmark 1</li>
        <li class="ulCard_li">Landmark 2</li>
        <li class="ulCard_li">Landmark 3</li>
</ul> */