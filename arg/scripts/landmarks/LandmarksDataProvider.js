export const LandmarksCollection = [
    {
      name: "Pink House",
      type: "Political"
    },
    
    {
      name: "Iguazu Falls",
      type: "Nature"
    },

    {
      name: "La Bombonera",
      type: "Sports"
    },

    {
      name: "Patagonia",
      type: "Nature"
    }

  ];
  

//returns all landmarks
export const useLandmarks = () => {
    return LandmarksCollection.slice()
}

