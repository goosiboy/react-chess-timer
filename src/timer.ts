import useStore from "./state/appstore";

interface TimerSettings {
  currentTime: number;
  isRunning: boolean;
  interval: number;
}

export class Timer {
  private currentTime: number = 0;
  private isRunning: boolean = false;
  private interval: number = 0;
  private initialSettings: TimerSettings;

  constructor(startTime: number) {
    this.initialSettings = {
      currentTime: startTime,
      isRunning: false,
      interval: 0,
    };
    this.resetTimer();
  }

  public resetTimer() {
    this.currentTime = this.initialSettings.currentTime;
    this.isRunning = this.initialSettings.isRunning;
    this.interval = this.initialSettings.interval;
  }

  /*
  public start(): Promise<number> {
    if (!this.isRunning) {
      this.setIsRunning(true);
      this.interval = setInterval(() => {
        this.currentTime--;
      }, 1000);
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(0);
      }, 300);
    });
  }
  */

  public countDown(): Promise<number> {
    let i = limit;
    return new Promise(function (resolve) {
      const interval = setInterval(function () {
        if (i === 0) {
          clearInterval(interval);
          return resolve(0);
        }
        i--;
        useStore.getState().setMatchTime(i);
      }, 1000);
    });

    /*
    console.log("limit: " + limit);

    return new Promise(function (resolve) {
      limit--;
      if (limit > 0) {
        setTimeout(() => {
          Timer.countDown(limit).then(resolve);
        }, 1000);
      } else {
        resolve(0);
      }
    });
    */
  }

  public stop() {
    if (this.isRunning) {
      this.setIsRunning(false);
      clearInterval(this.interval);
    }
  }

  public reset() {
    this.currentTime = 0;
  }

  public getCurrentTime() {
    return this.currentTime;
  }

  public setCurrentTime(currentTime: number) {
    this.currentTime = currentTime;
  }

  public getIsRunning() {
    return this.isRunning;
  }

  public setIsRunning(isRunning: boolean) {
    this.isRunning = isRunning;
  }
}
