import React, { useEffect } from "react";
import "./index.css";

export default function BGComp() {
    
    useEffect(() => {
    const flashlight = document.querySelector(
      ".flashlight"
    ) as HTMLElement | null;

    if (flashlight) {
      flashlight.style.background =
        "radial-gradient(circle, transparent 40px, rgba(0, 0, 0, 0.98) 80px)";
    }
    },[])
  return (
    <div className="back-ground-img">
      <div className="flashlight"></div>
    </div>
  );
}
