import { Player } from "./player";
import { MatchPreferences } from "./matchpreferences";
import { Round } from "./round";

export interface Match {
  uuid: string;
  isRunning: boolean;
  player: Player;
  timeLimit: number;
  rounds?: Round[];
  matchPreferences?: MatchPreferences;
}
