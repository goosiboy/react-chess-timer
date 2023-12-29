import { useState } from "react";
import { Timer } from "../timer";
import useStore from "../state/appstore";

function TimerButton({ isMatchStarted }: { isMatchStarted: boolean }) {
  const { getMatchTime } = useStore();
  const [isRunning, setIsRunning] = useState(false);
  const [countdownTimerIntervalId, setCountdownTimerIntervalId] = useState(0);

  const timer = new Timer();

  function timerOnOff() {
    if (!isRunning) {
      console.log("ON");
      setIsRunning(true);
      setCountdownTimerIntervalId(timer.start(getMatchTime()));
      console.log("getMatchTime1: ", getMatchTime());
    } else {
      console.log("OFF");
      setIsRunning(false);
      timer.stop(countdownTimerIntervalId);
      console.log("getMatchTime2: ", getMatchTime());
    }
  }

  return (
    <div hidden={!isMatchStarted}>
      <button onClick={timerOnOff}>{getMatchTime()}</button>
    </div>
  );
}

export default TimerButton;
