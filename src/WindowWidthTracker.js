import "./styles.css";
import { useState, useEffect } from "react";

const WindowWidthTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const trackWindowWidth = () => {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth);
    };
    //add the event listener
    window.addEventListener("resize", trackWindowWidth);

    //remove the evnet listener
    return () => {
      window.removeEventListener("resize", trackWindowWidth);
    };
  }, []);

  return <p>The window is now {windowWidth}px wide!</p>;
};

export default WindowWidthTracker;
