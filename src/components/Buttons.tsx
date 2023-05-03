import { Dispatch, SetStateAction } from "react";
import { ItemsConfig } from "../utils/types";

interface ButtonsConfig {
  items: ItemsConfig;
  setItems: Dispatch<SetStateAction<ItemsConfig>>;
  handleSort: () => Promise<void>;
  getInitialBars: (total: number) => void;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const Buttons = ({
  items,
  handleSort,
  getInitialBars,
  setVisible,
}: ButtonsConfig) => {
  const randomizeArray = () => {
    getInitialBars(items.count[0]);
  };

  const showModal = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 2000);
  };

  return (
    <div className="flex items-center gap-10">
      <button
        className={`flex gap-2 text-base ${
          items.isRunning ? "cursor-not-allowed" : null
        } font-semibold items-center px-3 py-2 bg-[#fb3e62] text-white rounded shadow-[0px_0px_4px_1px_gray] hover:shadow-[0px_0px_8px_2px_gray]`}
        onClick={randomizeArray}
        disabled={items.isRunning}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
        Random
      </button>
      <button
        className={`flex gap-2 text-base font-semibold ${
          items.isRunning ? "cursor-not-allowed" : null
        } items-center px-3 py-2 bg-[#0991ff] text-white rounded shadow-[0px_0px_4px_1px_gray] hover:shadow-[0px_0px_8px_2px_gray]`}
        onClick={() => (items.isSorted ? showModal() : handleSort())}
        disabled={items.isRunning}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
        Sort
      </button>
    </div>
  );
};

export default Buttons;
