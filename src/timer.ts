import useStore from "./state/appstore";

export class Timer {
  private countdownIntervalId: number | undefined;
  private timerRunning: boolean = false;

  public start(limit: number): number {
    if (this.timerRunning) {
      console.error("Timer is already running");
    } else {
      this.setTimerRunning(true);
      let i = limit;
      this.setCountdownIntervalId(
        setInterval(() => {
          if (i === 0) {
            clearInterval(this.getCountdownIntervalId());
            this.setTimerRunning(false);
            useStore.getState().setMatchTime(0);
          }
          i--;
          useStore.getState().setMatchTime(i);
        }, 1000)
      );
    }
    console.log("getMatchTime(): " + useStore.getState().getMatchTime());
    return this.getCountdownIntervalId();
  }

  public stop(countdownIntervalId: number): void {
    clearInterval(countdownIntervalId);
    this.setTimerRunning(false);
  }

  public setTimerRunning(isTimerRunning: boolean) {
    this.timerRunning = isTimerRunning;
  }

  public isTimerRunning(): boolean {
    return this.timerRunning;
  }

  public setCountdownIntervalId(countdownIntervalId: number) {
    this.countdownIntervalId = countdownIntervalId;
  }

  public getCountdownIntervalId(): number {
    if (this.countdownIntervalId === undefined) {
      throw new Error("CountdownIntervalId is undefined");
    }
    return this.countdownIntervalId;
  }
}
