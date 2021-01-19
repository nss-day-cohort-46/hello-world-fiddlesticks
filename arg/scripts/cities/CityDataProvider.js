export const cityCollection = [
    {
        name: "Buenos Aires",
        population: 15000000,
        description: "Capital",
        image: ""
    },

    {
        name: "Mendoza",
        population: 1800000,
        description: "Wine Country",
        image: ""
    },

    {
        name: "Mar del Plata",
        population: 600000,
        description: "Beach Town",
        image: ""
    }

]

//returns all cities
export const useCity = () => {
    return cityCollection.slice()
}

