import LabeledSize from "./LabeledSize";
import LabeledTime from "./LabeledTime";
import { Dispatch, SetStateAction } from "react";
import { ItemsConfig } from "../utils/types";

const SpeedAndSizeControls = ({
  setItems,
  items,
}: {
  items: ItemsConfig;
  setItems: Dispatch<SetStateAction<ItemsConfig>>;
}) => {
  return (
    <div className="flex gap-10">
      <div className="w-max px-5 py-2 border rounded border-black bg-white">
        <div className="flex flex-col items-center gap-5">
          <p className="text-lg font-semibold">Value</p>
          <LabeledSize items={items} setItems={setItems} />
        </div>
      </div>
      <div className="w-max px-5 py-2 border rounded border-black bg-white">
        <div className="flex flex-col items-center gap-5">
          <p className="text-lg font-semibold">Speed (ms)</p>
          <LabeledTime items={items} setItems={setItems} />
        </div>
      </div>
    </div>
  );
};

export default SpeedAndSizeControls;
