import React, { useState, useEffect } from "react";

function ControlBtn({ text, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-labelledby="control button"
      className=" group p-[2px] overflow-hidden rounded-full focus:outline-none ring-2 ring-transparent dark:text-[var(--Neutral-0)] text-[var(--Neutral-800)] focus:ring-[var(--Red-500)] sm:text-[17px] text-[22px] font-[Noto_Sans]"
    >
      <div
        className={`px-3 shadow-2xl py-1 border rounded-full transition-colors duration-[.3s] 
        group-focus:border-transparent
        
        ${
          isActive
            ? "bg-[var(--Red-500)] border-[var(--Red-500)] text-[var(--Neutral-200)] dark:text-[var(--Neutral-700)] "
            : "dark:bg-[var(--Neutral-800)] bg-[var(--Neutral-0)] dark:hover:bg-[var(--Neutral-600)] hover:bg-[var(--Neutral-100)] border-[var(--Neutral-0)] hover:border-transparent dark:border-[var(--Neutral-700)] "
        }`}
      >
        {text}
      </div>
    </button>
  );
}

export default ControlBtn;
