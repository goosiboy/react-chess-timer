import { Player } from "./player";
import { MatchPreferences } from "./matchpreferences";
import { Round } from "./round";

export interface Match {
  uuid?: string;
  isRunning: boolean;
  players: Player[];
  rounds: Round[];
  matchTimer: number;
  matchPreferences?: MatchPreferences;
}
