import { Range, getTrackBackground } from "react-range";
import { Dispatch, SetStateAction } from "react";
import { ItemsConfig } from "../utils/types";

const STEP = 1;
const MIN = 10;
const MAX = 40;

const LabeledSize = ({
  items,
  setItems,
}: {
  items: ItemsConfig;
  setItems: Dispatch<SetStateAction<ItemsConfig>>;
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Range
        values={items.count}
        step={STEP}
        min={MIN}
        max={MAX}
        disabled={items.isRunning}
        onChange={(value) => {
          setItems((prev) => ({ ...prev, count: value }));
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "140px",
              cursor: items.isRunning ? "not-allowed" : "pointer",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: items.count,
                  colors: ["#548BF4", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "25px",
              width: "25px",
              borderRadius: "4px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-25px",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "14px",
                fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                padding: "2px",
                borderRadius: "4px",
                backgroundColor: "#548BF4",
              }}
            >
              {items.count[0]}
            </div>
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#548BF4" : "#CCC",
              }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default LabeledSize;
