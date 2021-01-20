const LinksCollection = [
    {
        href: "./index.html",
        location: "Home",
        element_arributes: "active"
    },
    {
        href: "./argentina.html",
        location: "Argentina",
        element_arributes: ""
    },
    {
        href: "./leictenstein/lp_leictenstein.html",
        location: "Leictenstein",
        element_arributes: ""
    },
    {
        href: "./KW.html",
        location: "Kuwait",
        element_arributes: ""
    },
]

export const useLink = () => {
    return LinksCollection.slice();
}
