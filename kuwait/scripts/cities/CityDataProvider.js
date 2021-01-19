const cityCollection = [
    {
        name: "Kuwait City",
        population: 4,000,000,
        description: "This global city has a metro population estimated at 4.1 million in 2016. Nearly 98% of the population in Kuwait is urbanized, and about 83% of the total population resides in the capital, Kuwait City.",
        image: "",
    },
    {
        name:"Al Jahra",
        population: 67,311,
        description: "Al Jahra is a town located 32 kilometres west of Kuwait City in Kuwait. Al Jahra is the capital of the Al Jahra Governorate of Kuwait as well as the surrounding Al Jahra District which is agriculturally based.",
        image: "",
    },

];

export const largeCity = () => {
// which city is bigger in population?

    const largerCity = [];

    for (const cityObj of cityCollection) {
        if(cityObj.population > 100,000) {
            largerCity.push(cityObj)
        }
    }
    console.log("The larger city is Kuwait City", largerCity);
    return largerCity;
}