import { LandmarksCollection } from "./LandmarksDataProvider.js"
import { useLandmark } from "./Landmarks.js"

export const LandmarkList = () => {
    const contentElement = document.querySelector(".landmarks");
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
