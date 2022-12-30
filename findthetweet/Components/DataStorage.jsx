import create from "zustand";
const useStore = create((set) => ({
  tweets: [],
  pages: false,
  setTweets: (variable) => set(() => ({tweets: variable})),
  setPages: (variable) => set(() => ({pages: variable})),
  removeAllTweets: () => set({tweets: ""}),
}));
export default useStore;
