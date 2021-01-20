export const celebritiesCollection = [
  {
    name: "Nawaf Al-Ahmad Al-Jaber Al-Sabah",
    age: 84,
    job: "Prince of Kuwait",
  },
  {
    name: "Jaber Al-Ahmad Al-Jaber Al-Sabah",
    age: 95,
    job: "Monarch",
  },
];

//returns all celebs
export const useCelebrities = () => {
  return celebritiesCollection.slice();
};
