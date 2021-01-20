export const Link = ( link ) => {
    return `
    <div class="header__nav ${link.element_arributes}"><a href="${link.href}">${link.location}</a></div>
    `
}
