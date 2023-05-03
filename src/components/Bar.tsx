import { Flipped } from "react-flip-toolkit";
import { BarsConfig } from "../utils/types";

const checkColor = (bar: BarsConfig) => {
  if (bar.isSorted) {
    return "green";
  } else if (bar.isSorting) {
    return "yellow";
  } else {
    return "#dc2061";
  }
};
const Bar = ({ bar, bars }: { bar: BarsConfig; bars: BarsConfig[] }) => {
  return (
    <Flipped key={bar.key} flipId={bar.key}>
      <div
        className="shadow-[2px_2px_8px_-1px_black] text-[7px] rounded-[4px] text-white flex justify-center items-end border border-white transition-[height]"
        style={{
          height: `${bar.height}px`,
          background: `${checkColor(bar)}`,
          width: `${Math.floor((300 + 8 * bars.length) / bars.length)}px`,
        }}
      >
        {bar.height}
      </div>
    </Flipped>
  );
};

export default Bar;
