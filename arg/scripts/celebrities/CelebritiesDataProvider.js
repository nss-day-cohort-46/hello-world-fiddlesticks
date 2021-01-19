export const celebritiesCollection = [
    {
        name: "Messi",
        age: 33,
        job: "Soccer Player",
        alive: true,
        image: ""
    },

    {
        name: "Gabriela Sabatini",
        age: 50,
        job: "Tennis Player",
        alive: true,
        image: ""
    },

    {
        name: "Evita",
        age: 33,
        job: "Politics",
        alive: false,
        image: ""
    }

]

//returns all celebs
export const useCelebrities = () => {
    return celebritiesCollection.slice()
}

