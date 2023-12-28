import "./App.css";
import { Match } from "./types/match";
import useStore from "./state/appstore";
import TimerButton from "./components/TimerButton";
import { v4 } from "uuid";
import { Round } from "./types/round";
import { useState } from "react";

function App() {
  const { setMatch, isMatchRunning } = useStore();
  const [isMatchStarted, setMatchStarted] = useState(false);

  function startMatch() {
    const mockMatch: Match = {
      players: [
        { id: v4(), name: "Black", score: 0 },
        { id: v4(), name: "White", score: 0 },
      ],
      isRunning: true,
      rounds: [{} as Round],
      matchTimer: 100,
    };

    setMatch(mockMatch);
    setMatchStarted(isMatchRunning());
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
