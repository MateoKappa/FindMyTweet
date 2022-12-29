import create from "zustand";
const useStore = create((set) => ({
  tweets: [],
  setTweets: (variable) => set(() => ({tweets: variable})),
  removeAllTweets: () => set({tweets: ""}),
}));
export default useStore;
