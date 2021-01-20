const cityCollection = [
  {
    name: "Kuwait City",
    population: 4000000,
    description:
      "83% of the total population resides in the capital, Kuwait City.",
  },
  {
    name: "Al Jahra",
    population: 67311,
    description:
      "Al Jahra is the capital of the Al Jahra Governorate of Kuwait as well as the surrounding Al Jahra District which is agriculturally based.",
  },
];

export const useCity = () => {
  return cityCollection.slice();
};
