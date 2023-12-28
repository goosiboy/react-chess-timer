import { create } from "zustand";
import { Match } from "../types/match";
import { v4 } from "uuid";
import { devtools } from "zustand/middleware";
import { Player } from "../types/player";
import { Round } from "../types/round";

interface AppStore {
  match: Match;
  matchTime: number;
  setMatch: (match: Match) => void;
  getMatch: () => Match;
  isMatchRunning: () => boolean;
  getPlayers: () => Player[];
  getLatestRound: () => Round;
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
      }));
    },
    getMatch() {
      return get().match;
    },
    isMatchRunning() {
      if (get().match === undefined) {
        return false;
      }
      return get().match.isRunning;
    },
    getPlayers() {
      if (get().match === undefined || get().match.players === undefined) {
        return [];
      }
      return get().match.players;
    },
    getLatestRound() {
      if (get().match === undefined || get().match.rounds === undefined) {
        return {} as Round;
      }
      return get().match.rounds[get().match.rounds.length - 1];
    },
    setMatchTime(time: number) {
      set(() => ({
        matchTime: time,
      }));
    },
    getMatchTime() {
      if (get().match === undefined || get().match.matchTimer === undefined) {
        return 0;
      }
      return get().match.matchTimer;
    },
    resetMatchTime() {
      get().match.matchTimer = 0;
      set(() => ({
        match: get().match,
      }));
    },
  }))
);

export default useStore;
