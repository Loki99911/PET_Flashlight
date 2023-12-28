import { useEffect, useRef } from "react";
import "./index.css";
import { useMediaRules } from "../../hooks/useMediaRules";

export default function BGComp() {
  const { isMobile, isTablet, isDesktop } = useMediaRules();
  const refContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = refContainer.current!;
    function changeBg(e: MouseEvent) {
      container.style.background = `radial-gradient(circle at ${
        (e.pageX / container.offsetWidth) * 100
      }% ${
        (e.pageY / container.offsetHeight) * 100
      }%, transparent 40px, rgba(0, 0, 0, 0.98) 80px)`;
    }

    container.addEventListener("mousemove", changeBg);
    return () => {
      container.removeEventListener("mousemove", changeBg);
    };
  }, []);

  return (
    <>
      {isDesktop && (
        <div className="back-ground-img">
          <div ref={refContainer} className="flashlight"></div>
          <a
            href="https://www.linkedin.com/in/mykyta-kresik/"
            className="link"
            title="Click to visit my Linkedin!"
          ></a>
        </div>
      )}
      {(isTablet || isMobile) && (
        <div className="ErrorWrapper">
          <p>I'm sorry, it's only available on PC for now. Comig soon!</p>
        </div>
      )}
    </>
  );
}
