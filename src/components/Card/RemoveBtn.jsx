import React from "react";
import { useDispatch } from "react-redux";
import { toggleRemove } from "../../features/data/dataSlice";
function RemoveBtn({ data }) {
  const dispatch = useDispatch();

  function onRemoveHandalar(name) {
    dispatch(toggleRemove(name));
  }

  return (
    <>
      <button
        aria-label="Remove button"
        onClick={() => onRemoveHandalar(data.name)}
        className="shadow-2xl group p-[2px] overflow-hidden rounded-full focus:outline-none ring-2 ring-transparent focus:ring-[var(--Red-500)] "
      >
        <div
          className={`px-2.5 shadow py-1 border  rounded-full   group-focus:border-transparent transition-colors duration-[.3s] dark:bg-[var(--Neutral-800)] bg-[var(--Neutral-0)] hover:border-[var(--Red-500)] dark:group-focus:bg-[var(--Neutral-600)] hover:bg-[var(--Red-500)]  dark:hover:bg-[var(--Red-500)] group-focus:bg-[var(--Neutral-100)] dark:border-[var(--Neutral-600)] border-[var(--Neutral-300)] hover:text-[var(--Neutral-0)] dark:hover:text-[var(--Neutral-800)]`}
        >
          Remove
        </div>
      </button>
    </>
  );
}

export default RemoveBtn;
