import React, { useState, useEffect } from "react";
import ControlBtn from "./ControlBtn";
import { useDispatch } from "react-redux";
import { setFilter } from "../../features/data/dataSlice";

function Controls() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFilter(buttons[activeIndex]));
  }, [activeIndex]);
  const buttons = ["All", "Active", "Inactive"];

  return (
    <div className="text-[var(--Neutral-800)] dark:text-[var(--Neutral-0)]  flex flex-col content-center items-center  sm:flex-row sm:justify-between mt-12 mb-7">
      <div>
        <h2 className="text-[31px]   font-bold mb-4 font-[Noto_Sans]">
          Extensions List
        </h2>
      </div>
      <div className="flex items-center gap-3 sm:gap-2">
        {buttons.map((title, index) => (
          <ControlBtn
            key={index}
            text={title}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Controls;
