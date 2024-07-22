import { create } from "zustand";
const useStore = create((set) => ({
  count: 0,
  setCount: (data) => {
    set((state) => {
      return {
        ...state,
        count: data,
      };
    });
  },
}));
export default useStore;
