//returns individual celebs HTML

export const Celebrities = (theCeleb) => {

    return `
    <li class=listElements>
    ${theCeleb.name}<br>
    Type: ${theCeleb.job}
    </li>
    `
}

