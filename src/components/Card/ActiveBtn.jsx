import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { activeData } from "../../features/data/dataSlice";

function ActiveBtn({ data }) {
  const [on, setOn] = useState(data.isActive);
  const dispatch = useDispatch();

  function onClickHandalar(name) {
    dispatch(activeData(name));
  }
  useEffect(() => {
    setOn(data.isActive);
  }, [data, onClickHandalar]); // Added setIsActive to dependency array

  return (
    <button
      aria-label="is Active button"
      onClick={() => onClickHandalar(data.name)}
      className={`h-[22px] w-[38px]  relative rounded-full ease-in-out transition-colors duration-300 ${
        !on
          ? "dark:bg-[var(--Neutral-600)] bg-[var(--Neutral-300)]"
          : "bg-[var(--Red-500)]"
      } transition-all duration-[500ms] focus:outline-2 focus:outline-[var(--Red-500)] border-2 border-[var(--Neutral-0)] dark:border-[var(--Neutral-800)]`}
    >
      <div
        className={`absolute top-0 h-[18px] w-[18px] rounded-full transition-all duration-[500ms] border-[2px] bg-white ${
          !on
            ? "left-0 border-[var(--Neutral-300)] dark:border-[var(--Neutral-600)]"
            : "left-[16px] border-[var(--Red-500)]"
        }`}
      ></div>
    </button>
  );
}

export default ActiveBtn;
