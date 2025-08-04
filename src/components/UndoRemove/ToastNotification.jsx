import React, { useEffect, useState } from "react";
import {
  unRemoveData,
  clearLastRemovedItem,
} from "../../features/data/dataSlice";
import { useSelector, useDispatch } from "react-redux";

function ToastNotification({
  message = "Removing this will delete it permanently.",
}) {
  const dispatch = useDispatch();
  const lastRemovedItem = useSelector((state) => state.lastRemovedItem);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (lastRemovedItem) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
        dispatch(clearLastRemovedItem());
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [lastRemovedItem, dispatch]);

  const handleUndo = () => {
    if (lastRemovedItem) {
      dispatch(unRemoveData(lastRemovedItem));
      setVisible(false);
    }
  };

  const handleClose = () => {
    setVisible(false);
    dispatch(clearLastRemovedItem());
  };

  if (!lastRemovedItem) return null;

  return (
    <div
      className={`.animate-slide-in fixed bottom-6 right-[2.5%] sm:right-6 z-50 w-[95%] max-w-[390px] sm:w-fit sm:max-w-fit 
        transition-opacity duration-300 ease-in-out overflow-hidden
        p-4  sm:pr-4  shadow-lg flex items-center sm:items-center gap-4 
        bg-stone-200 dark:bg-gray-700 
        ${
          visible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
    >
      <div className=" hidden inset-0 h-full w-2 bg-red-500 absolute sm:block"></div>
      <div className="text-red-500 text-4xl sm:text-[25px]  mt-1 sm:mt-0">
        <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
      </div>

      <div className="flex-1">
        <h4 className="text-base font-semibold text-gray-900 dark:text-white">
          Are you sure?
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          {message}
        </p>
      </div>

      <div className="flex  gap-1 sm:gap-2">
        <button
          onClick={handleUndo}
          aria-label="Undo delete"
          autoFocus
          className="px-4 py-1 text-sm font-medium text-amber-700 dark:text-amber-500 
            border border-amber-700 dark:border-amber-400 rounded hover:text-amber-800 
            dark:hover:text-amber-600 hover:border-amber-800 dark:hover:border-amber-500 transition  mr-[4vw] sm:mr-0 mt-4 sm:mt-0"
        >
          Undo
        </button>

        <button
          onClick={handleClose}
          aria-label="Close notification"
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-[26px] sm:text-3xl font-bold px-2 transition absolute sm:relative top-0 right-0"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default ToastNotification;
