import create from "zustand";
const useStore = create((set) => ({
  Tweets: [],
  Geo: [],
  increasePopulation: (variable) => set(() => ({Tweets: variable})),
  setGeo: (variable) => set(() => ({Geo: variable})),
  removeAllTweets: () => set({Tweets: ""}),
}));
export default useStore;
