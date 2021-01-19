import { useLandmark } from "./LandmarksDataProvider.js"
import { Landmark } from "./Landmarks.js"

export const LandmarkList = () => {
    const contentElement = document.querySelector(".landmarks");
    const landmarks = useLandmark()

    let landmarkHTMLRepresentation = "";
    console.log("landmarks: ", landmarks)
    for (const lm of landmarks) {
        landmarkHTMLRepresentation += Landmark(lm)
    }

    contentElement.innerHTML += `
        <h3>Landmarks To See</h3>
        <ul class="ulCard">
            ${landmarkHTMLRepresentation}
        </ul> 
    
    `
};
