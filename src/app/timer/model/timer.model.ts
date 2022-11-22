interface BaseTimer {
  id: string;
  stopped: boolean;
}

export interface Timer extends BaseTimer {
  startDate: Date;
  endDate: Date;
  stopDate: Date;
}

export interface TimerJson extends BaseTimer {
  id: string;
  startDate: string;
  endDate: string;
  stopDate: string;
}
