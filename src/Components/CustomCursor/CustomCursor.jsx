import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { stiffness: 500, damping: 40, mass: 0.3 });
  const dotY = useSpring(mouseY, { stiffness: 500, damping: 40, mass: 0.3 });

  const ringX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.6 });

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    const handleHoverStart = (e) => {
      if (e.target.closest("a, button, input, textarea, [data-cursor-hover]")) {
        setIsHovering(true);
      }
    };
    const handleHoverEnd = (e) => {
      if (e.target.closest("a, button, input, textarea, [data-cursor-hover]")) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Inner glowing dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          background: "linear-gradient(135deg, #c084fc, #f472b6, #60a5fa)",
          boxShadow: "0 0 10px rgba(192,132,252,0.8), 0 0 20px rgba(244,114,182,0.5)",
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.6 : isHovering ? 1.4 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className="w-3 h-3" />
      </motion.div>

      {/* Outer trailing ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9998] hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: isHovering ? "#f472b6" : "rgba(168,85,247,0.5)",
        }}
        animate={{
          width: isHovering ? 52 : 32,
          height: isHovering ? 52 : 32,
          opacity: hidden ? 0 : isHovering ? 0.9 : 0.5,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.5 }}
      />
    </>
  );
}

export default CustomCursor;