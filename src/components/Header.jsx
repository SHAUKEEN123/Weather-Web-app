import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMapMarkedAlt,
  faCommentDots,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
 

  useEffect(() => {
    if (isDarkMode) {
      // Apply custom dark background color and text color
      document.body.classList.add("bg-[#03045e]", "text-white");
      document.body.classList.remove("bg-gray-900", "text-black");
    } else {
      // Apply light background color and text color
      document.body.classList.add("bg-gray-900", "text-white");
      document.body.classList.remove("bg-[#03045e]", "text-black");
    }
  }, [isDarkMode]);

  return (
    <header
      className={`${
        isDarkMode ? "bg-[#0b0c35]" : "bg-black"
      } text-white p-4 flex items-center shadow-md transition-all duration-300`}
    >
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-orange-600 transform hover:scale-110 transition duration-200">
          Weather App
        </h1>
      </div>

      <div className="flex space-x-6 ml-auto mr-10">
        <button
          onClick={() => window.location.reload()}
          className="transform hover:scale-110 transition duration-200"
        >
          <FontAwesomeIcon icon={faHome} size="lg" title="Home" />
        </button>

        <button
          onClick={() => alert("Map Clicked")}
          className="transform hover:scale-110 transition duration-200"
        >
          <FontAwesomeIcon icon={faMapMarkedAlt} size="lg" title="Map" />
        </button>

        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="transform hover:scale-110 transition duration-200"
        >
          <FontAwesomeIcon
            icon={isDarkMode ? faSun : faMoon}
            size="lg"
            title="Change Mode"
          />
        </button>

        <button
          onClick={() => alert("Send Feedback Clicked")}
          className="transform hover:scale-110 transition duration-200"
        >
          <FontAwesomeIcon
            icon={faCommentDots}
            size="lg"
            title="Send Feedback"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
