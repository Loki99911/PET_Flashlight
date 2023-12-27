import React, { useEffect, useRef } from "react";
import "./index.css";

export default function BGComp() {
  const refContainer = useRef<HTMLDivElement>(null);
  //   const flashlight = document.querySelector(".flashlight") as HTMLElement;

  useEffect(() => {
    function changeBg(e: MouseEvent) {
      refContainer.current.style.background = `radial-gradient(circle at ${
        (e.pageX / refContainer.current.offsetWidth) * 100
      }% ${
        (e.pageY / refContainer.current.offsetHeight) * 100
      }%, transparent 40px, rgba(0, 0, 0, 0.98) 80px)`;
    }
    refContainer.current.addEventListener("mousemove", changeBg);
    return () => {
      refContainer.current.removeEventListener("mousemove", changeBg);
    };
  }, [refContainer.current]);

  return (
    <div className="back-ground-img">
      <div ref={refContainer} className="flashlight"></div>
    </div>
  );
}
