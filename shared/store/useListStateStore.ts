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
  goToPrevMonth: () => void;
  goToNextMonth: () => void;
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
  goToPrevMonth: () =>
    set((state) => {
      const currentMonth = parseInt(state.month, 10);
      const currentYear = parseInt(state.year, 10);

      if (currentMonth === 1) {
        return {
          year: String(currentYear - 1),
          month: "12",
          scrollPosition: 0,
        };
      }
      return {
        month: String(currentMonth - 1),
        scrollPosition: 0,
      };
    }),
  goToNextMonth: () =>
    set((state) => {
      const currentMonth = parseInt(state.month, 10);
      const currentYear = parseInt(state.year, 10);

      if (currentMonth === 12) {
        return {
          year: String(currentYear + 1),
          month: "1",
          scrollPosition: 0,
        };
      }
      return {
        month: String(currentMonth + 1),
        scrollPosition: 0,
      };
    }),
  reset: () =>
    set({
      ...getInitialDate(),
      scrollPosition: 0,
    }),
}));
