import "./App.css";
import { Match } from "./types/match";
import useStore from "./state/appstore";
import TimerButton from "./components/TimerButton";
import { v4 } from "uuid";
import { useState } from "react";
import { PlayerType } from "./types/playertype";

function App() {
  const { setMatch } = useStore();
  const [isMatchStarted, setMatchStarted] = useState(false);

  function startMatch() {
    const mockMatch: Match = {
      uuid: v4(),
      isRunning: true,
      player: {
        id: v4(),
        type: PlayerType.WHITE,
      },
      timeLimit: 100,
    };

    setMatch(mockMatch);
    setMatchStarted(true);
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>Chess timer</p>
        </header>
        <button hidden={isMatchStarted} onClick={startMatch}>
          Start match
        </button>
        <TimerButton isMatchStarted={isMatchStarted} />
      </div>
    </>
  );
}

export default App;
