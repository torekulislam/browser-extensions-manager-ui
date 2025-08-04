import React from "react";

function Footer() {
  return (
    <div className="text-gray-800 dark:text-gray-200 text-sm w-full text-center mb-6">
      Challenge by{" "}
      <a
        className="text-rose-500 hover:underline outline-rose-800"
        href="https://www.frontendmentor.io?ref=challenge"
        aria-label="Forntend Mentor"
      >
        Frontend Mentor
      </a>{" "}
      Coded by{" "}
      <a
        className="text-rose-500 hover:underline outline-rose-900"
        href="https://www.linkedin.com/in/torekul-islam-72748b335/"
        aria-label="Torekul's linkedin id"
      >
        Torekul
      </a>
      .
    </div>
  );
}

export default Footer;
