//returns individual landmarks HTML

export const Landmarks = (theLandmark) => {

    return `
    <li class=listElements>
    ${theLandmark.name}<br>
    Type: ${theLandmark.type}<br>
    </li>
    `
}

