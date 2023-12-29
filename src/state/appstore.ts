import { create } from "zustand";
import { Match } from "../types/match";
import { v4 } from "uuid";
import { devtools } from "zustand/middleware";

interface AppStore {
  match: Match;
  matchTime: number;
  setMatch: (match: Match) => void;
  getMatch: () => Match;
  setMatchTime: (time: number) => void;
  getMatchTime: () => number;
  resetMatchTime: () => void;
}

const useStore = create<AppStore>()(
  devtools((set, get) => ({
    match: {} as Match,
    matchTime: 0,
    setMatch: (match: Match) => {
      match.uuid = v4();
      set(() => ({
        match: match,
        matchTime: match.timeLimit,
      }));
    },
    getMatch() {
      return get().match;
    },
    setMatchTime(time: number) {
      set(() => ({
        matchTime: time,
      }));
    },
    getMatchTime() {
      if (get().match === undefined || get().matchTime === undefined) {
        return 0;
      }
      return get().matchTime;
    },
    resetMatchTime() {
      get().matchTime = 0;
      set(() => ({
        match: get().match,
      }));
    },
  }))
);

export default useStore;
