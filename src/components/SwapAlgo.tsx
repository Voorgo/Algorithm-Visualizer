import { Dispatch, SetStateAction } from "react";
import { ItemsConfig } from "../utils/types";
import { useState } from "react";

const SwapAlgo = ({
  setItems,
  items,
}: {
  setItems: Dispatch<SetStateAction<ItemsConfig>>;
  items: ItemsConfig;
}) => {
  const [isUsed, setIsUsed] = useState<string>("");
  const changeAlgo = (value: string) => {
    setIsUsed(value);
    setItems((prev) => ({
      ...prev,
      algo: value,
      count: [20],
    }));
  };
  return (
    <div className="flex gap-4 w-full max-w-6xl mx-auto mb-4 px-3">
      <button
        className={`${
          items.isRunning ? "cursor-not-allowed" : null
        } text-white ${
          isUsed === "bubbleSort"
            ? "bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            : "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        }`}
        onClick={() => changeAlgo("bubbleSort")}
        disabled={items.isRunning}
      >
        bubbleSort
      </button>
      <button
        className={`${
          items.isRunning ? "cursor-not-allowed" : null
        } text-white  ${
          isUsed === "insertionSort"
            ? "bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            : "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        }`}
        onClick={() => changeAlgo("insertionSort")}
        disabled={items.isRunning}
      >
        insertionSort
      </button>
      <button
        className={`${
          items.isRunning ? "cursor-not-allowed" : null
        } text-white  ${
          isUsed === "selectionSort"
            ? "bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            : "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        }`}
        onClick={() => changeAlgo("selectionSort")}
        disabled={items.isRunning}
      >
        selectionSort
      </button>
    </div>
  );
};

export default SwapAlgo;
