export const LandmarksCollection = [
  {
    name: "Kuwait Towers",
    type: "Tourism based",
  },
  {
    name: "Grand Mosque",
    type: "religious relevance",
  },
  {
    name: "Holy Family Cathedral Parish",
    type: "religious relevance",
  },
];
//returns all landmarks
export const useLandmarks = () => {
  return LandmarksCollection.slice();
};
