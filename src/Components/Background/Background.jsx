// import React, { useRef } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";

// function AnimatedBackground() {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
//   const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

//   const containerRef = useRef(null);

//   const handleMouseMove = (e) => {
//     const rect = containerRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left - rect.width / 2;
//     const y = e.clientY - rect.top - rect.height / 2;
//     mouseX.set(x * 0.05); // scale down for subtle follow
//     mouseY.set(y * 0.05);
//   };

//   return (
//     <div
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e2a4f] to-[#171d32]"
//     >
//       {/* Blob 1 — Purple, drift + rotate */}
//       <motion.div
//         className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
//         style={{ backgroundColor: "#7e22ce", top: "-8rem", left: "-6rem" }}
//         animate={{
//           x: [0, 60, -20, 0],
//           y: [0, 40, 20, 0],
//           rotate: [0, 45, -30, 0],
//           scale: [1, 1.15, 0.95, 1],
//         }}
//         transition={{
//           duration: 11,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Blob 2 — Pink, drift + rotate (different timing) */}
//       <motion.div
//         className="absolute w-[28rem] h-[28rem] rounded-full mix-blend-multiply filter blur-3xl opacity-40"
//         style={{ backgroundColor: "#ec4899", bottom: "-6rem", right: "-6rem" }}
//         animate={{
//           x: [0, -50, 30, 0],
//           y: [0, -30, -50, 0],
//           rotate: [0, -40, 25, 0],
//           scale: [1, 0.9, 1.2, 1],
//         }}
//         transition={{
//           duration: 14,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Blob 3 — Blue, drift + rotate, follows mouse subtly */}
//       <motion.div
//         className="absolute w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
//         style={{
//           backgroundColor: "#2563eb",
//           top: "50%",
//           left: "50%",
//           translateX: "-50%",
//           translateY: "-50%",
//           x: springX,
//           y: springY,
//         }}
//         animate={{
//           scale: [1, 1.2, 0.9, 1],
//           rotate: [0, 30, -20, 0],
//         }}
//         transition={{
//           duration: 9,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Blob 4 — Indigo, slow drift + rotate */}
//       <motion.div
//         className="absolute w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
//         style={{ backgroundColor: "#4f46e5", top: "20%", right: "10%" }}
//         animate={{
//           x: [0, 40, -30, 0],
//           y: [0, -20, 40, 0],
//           rotate: [0, 25, -35, 0],
//           scale: [1, 1.1, 1, 1],
//         }}
//         transition={{
//           duration: 12.5,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//     </div>
//   );
// }

// export default AnimatedBackground;