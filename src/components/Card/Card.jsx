import React, { useEffect, useState } from "react";
import ActiveBtn from "./ActiveBtn";
import "../../App.css";
import RemoveBtn from "./RemoveBtn";
function Card({ data }) {
  return (
    <>
      <div className="font-[Noto_Sans] h-full shadow text-[var(--Neutral-800)] dark:text-[var(--Neutral-100)] p-5 rounded-2xl dark:border border-[var(--Neutral-800)] dark:bg-[var(--Neutral-800)] bg-[var(--Neutral-0)] flex flex-col gap-7 items-start justify-between transition-colors  duration-300 ">
        <div className=" flex items-start  gap-4">
          <div className="w-14 h-14">
            <img className="h-full w-full" src={data?.logo} alt={data?.name} />
          </div>
          <div className=" flex-1">
            <h1 className="text-[20px] font-bold">{data?.name}</h1>
            <p className="text-[15px] text-gray-600 dark:text-gray-400">
              {data?.description}
            </p>
          </div>
        </div>

        <div className=" h-fit flex items-center justify-between w-full">
          <div className="">
            <RemoveBtn data={data} />
          </div>

          <div className="">
            <ActiveBtn data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
