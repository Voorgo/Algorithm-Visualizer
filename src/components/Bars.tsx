import Bar from "./Bar";
import { Flipper } from "react-flip-toolkit";

const Bars = ({
  bars,
}: {
  bars: {
    height: number;
    isSorted: boolean;
    isSorting: boolean;
    key: number;
  }[];
}) => {
  return (
    <Flipper flipKey={Math.random()}>
      <div className="flex items-end justify-center w-full gap-1">
        {bars.map((bar) => {
          return <Bar bar={bar} bars={bars} key={bar.key} />;
        })}
      </div>
    </Flipper>
  );
};

export default Bars;
