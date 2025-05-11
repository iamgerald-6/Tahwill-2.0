"use client";

import React, { useRef, useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
// import { setScrollInstance } from "./ScrollTop";

interface ScrollWrapperProps {
  children: React.ReactNode;
}

const ScrollWrapper: React.FC<ScrollWrapperProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollInstance = useRef<LocomotiveScroll | null>(null);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  useEffect(() => {
    if (scrollRef.current) {
      scrollInstance.current = new LocomotiveScroll({
        lenisOptions: {
          wrapper: scrollRef.current,
          lerp: 0.6,
          duration: 4,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        },
        scrollCallback: (data) => {
          const scroll = data.scroll;
          if (scroll !== undefined) {
            setIsAtTop(scroll === 0);
          }
        },
      });
      // setScrollInstance(scrollInstance.current);
    }

    return () => {
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
      }
    };
  }, []);

  const scrollToTop = () => {
    if (scrollInstance.current) {
      scrollInstance.current.scrollTo(0);
    }
  };
  console.log("isAtTop:", isAtTop);
  return (
    <div ref={scrollRef} className="scroll-container relative">
      <div
        className={`fixed bottom-10 right-10 z-50 ${isAtTop ? "hidden" : ""}`}
      >
        {!isAtTop && (
          <button
            className="border-2 border-gray-700 rounded-full p-3"
            onClick={scrollToTop}
          >
            {children}
          </button>
        )}
      </div>
    </div>
  );
};

export default ScrollWrapper;
