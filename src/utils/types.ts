export interface ItemsConfig {
  count: number[];
  bars: {
    height: number;
    isSorted: boolean;
    isSorting: boolean;
    key: number;
  }[];
  speed: number[];
  isRunning: boolean;
  isSorted: boolean;
  algo: string;
}

export interface BarsConfig {
  height: number;
  isSorted: boolean;
  isSorting: boolean;
  key: number;
}
