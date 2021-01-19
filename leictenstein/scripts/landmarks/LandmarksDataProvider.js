const LandmarksCollection =  [
  {
    name: "Gutenburg Castle",
    type: "Structure - historical fortress.",
  },
  {
    name: "Kunstmuseum Liechtenstein",
    type: "Museum",
  },
  {
      name: "St. Mamertus Chapel",
      type: "Religous - oldest chapel in the country.",
    },
    {
      name: "Prince of Liechtenstein Winery",
      type: "Business - Wineary",
    },
];

export const useLandmark = () => {
  return LandmarksCollection.slice();
}