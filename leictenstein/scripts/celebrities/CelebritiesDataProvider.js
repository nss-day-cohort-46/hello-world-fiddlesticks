const celebrityCollection = [
    {
        name: "Tina Weirather",
        age: 31,
        job: "Retired alpine ski racer.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/2017_Audi_FIS_Ski_Weltcup_Garmisch-Partenkirchen_Damen_-_Tina_Weirather_-_by_2eight_-_8SC0767.jpg/800px-2017_Audi_FIS_Ski_Weltcup_Garmisch-Partenkirchen_Damen_-_Tina_Weirather_-_by_2eight_-_8SC0767.jpg",
        alive: true
    },
    {
        name:"Iren Nigg",
        age: 66,
        job: "Writer.",
        image: "https://www.euprizeliterature.eu/sites/default/files/styles/rectangular/public/Iren%20Nigg.jpg?itok=4EWjKWN4",
        alive: true
    },
    {
        name: "Stephanie Vogt",
        age: 30,
        job: "Retired tennis player.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Vogt_WMQ15_%281%29_%2819765031159%29.jpg/800px-Vogt_WMQ15_%281%29_%2819765031159%29.jpg",
        alive: true
    },
    {
        name:"Mario Frick",
        age: 46,
        job: "Retired footballer.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/AUT_vs._LIE_2015-10-12_%28194%29.jpg/1024px-AUT_vs._LIE_2015-10-12_%28194%29.jpg",
        alive: true
    }

]

export const useCeleberty = () => {
    return celebrityCollection.slice()
}