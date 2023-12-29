import { PlayerType } from "./playertype";

export interface Player {
  id: string;
  name?: string;
  score?: number;
  playerTimeLeft?: number;
  type: PlayerType;
}
