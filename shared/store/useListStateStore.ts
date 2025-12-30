import { create } from "zustand";
import { format } from "date-fns";

type ListState = {
  year: string;
  month: string;
  scrollPosition: number;
};

type ListStateActions = {
  setDate: (year: string, month: string) => void;
  setScrollPosition: (position: number) => void;
  reset: () => void;
};

type ListStateStore = ListState & ListStateActions;

function getInitialDate() {
  const now = new Date();
  return {
    year: format(now, "yyyy"),
    month: format(now, "M"),
  };
}

const initialDate = getInitialDate();

export const useListStateStore = create<ListStateStore>((set) => ({
  year: initialDate.year,
  month: initialDate.month,
  scrollPosition: 0,

  setDate: (year, month) => set({ year, month }),
  setScrollPosition: (position) => set({ scrollPosition: position }),
  reset: () =>
    set({
      ...getInitialDate(),
      scrollPosition: 0,
    }),
}));
