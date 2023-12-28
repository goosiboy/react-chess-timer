import { useState } from "react";
import { Timer } from "../timer";

function TimerButton({ isMatchStarted }: { isMatchStarted: boolean }) {
  // const { getMatchTime } = useStore();
  // const [timer] = useState<Timer>(new Timer(getMatchTime()));
  const [currentTime] = useState(100);
  const [isRunning, setIsRunning] = useState(false);
  // const [timerInterval, setTimerInterval] = useState(0);

  const timer = new Timer(100);

  /*
  useEffect(() => {
    setCurrentTime(timer.getCurrentTime());
    console.log("currentTime: " + currentTime);
    console.log("timer.getCurrentTime(): " + timer.getCurrentTime());
  }, [currentTime, timer]);
  */

  function timerOnOff() {
    /*
    if (!isRunning) {
      console.log("isRunning: " + isRunning);
      setIsRunning(true);
      setTimerInterval(
        setInterval(() => {
          let newTime = currentTime;
          setCurrentTime(newTime--);
        }, 1000)
      );
    } else {
      console.log("isRunning: " + isRunning);
      setIsRunning(false);
      clearInterval(timerInterval);
    }
    */
    if (!isRunning) {
      setIsRunning(true);
      timer.countDown(10).finally(() => {
        setIsRunning(false);
      });
    }
  }

  return (
    <div hidden={!isMatchStarted}>
      <button onClick={timerOnOff}>{currentTime}</button>
    </div>
  );
}

export default TimerButton;
