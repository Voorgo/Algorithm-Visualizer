import { useState, useEffect } from "react";
import AlgorithmMain from "../components/AlgorithmMain";
import { sleep } from "../utils/sleep";
import SpeedAndSizeControls from "../components/SpeedAndSizeControls";
import Buttons from "../components/Buttons";
import AlreadySortedModal from "../components/AlreadySortedModal";
import Bars from "../components/Bars";
import SwapAlgo from "../components/SwapAlgo";
import { bubbleSort, insertionSort, selectionSort } from "../utils/algorithms";
import { ItemsConfig } from "../utils/types";

const Algo = () => {
  const [items, setItems] = useState<ItemsConfig>({
    count: [20],
    bars: [],
    speed: [20],
    isRunning: false,
    isSorted: false,
    algo: "bubblesort",
  });
  const [visible, setVisible] = useState(false);

  const getInitialBars = (total: number) => {
    const bars: {
      height: number;
      isSorted: boolean;
      isSorting: boolean;
      key: number;
    }[] = [];
    for (let i = 0; i < total; i++) {
      bars.push(getBar(i));
    }
    setItems((prev) => ({ ...prev, bars, isSorted: false }));
  };
  const getBar = (key: number) => {
    return {
      height: Math.floor(Math.random() * 200) + 50,
      isSorted: false,
      isSorting: false,
      key,
    };
  };

  const getAlgorithm = (value: ItemsConfig) => {
    switch (value.algo) {
      case "bubbleSort":
        return bubbleSort(value.bars);
      case "selectionSort":
        return selectionSort(value.bars);
      case "insertionSort":
        return insertionSort(value.bars);
      default:
        return bubbleSort(value.bars);
    }
  };

  const handleSort = async () => {
    setItems((prev) => ({ ...prev, isRunning: true }));
    const algorithm = getAlgorithm(items);
    const prevBars = items.bars;
    for (let i = 0; i < algorithm.length; i++) {
      if (i !== 0) {
        prevBars[algorithm[i - 1].x] = {
          ...prevBars[algorithm[i - 1].x],
          isSorting: false,
        };
        prevBars[algorithm[i - 1].y] = {
          ...prevBars[algorithm[i - 1].y],
          isSorting: false,
        };
      }
      if (algorithm[i].x === algorithm[i].y) {
        prevBars[algorithm[i].x] = {
          ...prevBars[algorithm[i].x],
          isSorted: true,
          isSorting: false,
        };
      } else if (algorithm[i].changed) {
        const bari = { ...prevBars[algorithm[i].x], isSorting: true };
        const barj = { ...prevBars[algorithm[i].y], isSorting: true };
        prevBars[algorithm[i].y] = bari;
        prevBars[algorithm[i].x] = barj;
      } else {
        prevBars[algorithm[i].x] = {
          ...prevBars[algorithm[i].x],
          isSorting: true,
        };
        prevBars[algorithm[i].y] = {
          ...prevBars[algorithm[i].y],
          isSorting: true,
        };
      }
      if (i === algorithm.length - 1) {
        setItems((prev) => ({ ...prev, isRunning: false, isSorted: true }));
      }
      setItems((prev) => ({ ...prev, bars: prevBars }));
      await sleep(items.speed[0]);
    }
  };

  useEffect(() => {
    getInitialBars(items.count[0]);
  }, [items.count]);

  return (
    <AlgorithmMain>
      <>{visible && <AlreadySortedModal />}</>
      <div className="w-full h-[80vh]  flex flex-col gap-5 pt-5">
        <SwapAlgo setItems={setItems} items={items} />
        <div className="w-full grow flex flex-col justify-end">
          <div className="flex items-end justify-center w-full gap-2">
            <Bars bars={items.bars} />
          </div>
        </div>
        <div className="mt-8 mb-2 flex justify-center gap-10">
          <SpeedAndSizeControls setItems={setItems} items={items} />
          <Buttons
            setVisible={setVisible}
            items={items}
            setItems={setItems}
            handleSort={handleSort}
            getInitialBars={getInitialBars}
          />
        </div>
      </div>
    </AlgorithmMain>
  );
};

export default Algo;
