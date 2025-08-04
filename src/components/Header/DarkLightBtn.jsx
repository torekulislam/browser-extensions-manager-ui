import React, { useState, useEffect } from "react";
import darkIcon from "../../assets/images/icon-moon.svg";
import liteIcon from "../../assets/images/icon-sun.svg";
function DarkLightBtn() {
  const [theme, setTheme] = useState(() => {
    // Load theme from localStorage (runs once)
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // Update HTML class
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(theme);
    document.body.style.background =
      theme === "dark" ? "var(--Dark-Gradient)" : "var(--Light-Gradient)";
    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]); // only when theme changes

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <>
      <button
        aria-label="Dark-Light mode button"
        onClick={toggleTheme}
        className="bg-[var(--Neutral-100)] dark:bg-[var(--Neutral-700)]
        focus:bg-[var(--Neutral-300)] focus:dark:bg-[var(--Neutral-600)]  
         p-3 rounded-[11px]
        hover:bg-[var(--Neutral-300)] dark:hover:bg-[var(--Neutral-600)]
       
          focus:outline-2 focus:outline-[var(--Red-500)] 
          border-2 border-[var(--Neutral-0)] dark:border-[var(--Neutral-800)] 
          
            "
      >
        <img
          src={theme === "light" ? darkIcon : liteIcon}
          alt=""
          className="h-4.5"
        />
      </button>
    </>
  );
}

export default DarkLightBtn;
