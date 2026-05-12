// components/Loader.jsx
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Loader({ text = "Loading..." }) {
   return (
      <div
         style={{
            borderRadius: "12px",
            border: "1px solid rgba(0,212,255,0.1)",
            background: "rgba(3,12,24,0.8)",
            backdropFilter: "blur(20px)",
            padding: "17rem 2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            position: "relative",
            overflow: "hidden",
         }}
      >
         {/* Pulsing Rings */}
         {[0, 1, 2].map((i) => (
            <motion.div
               key={i}
               animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
               transition={{
                  duration: 2,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "easeOut",
               }}
               style={{
                  position: "absolute",
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  border: "1px solid rgba(0,212,255,0.3)",
               }}
            />
         ))}

         {/* Main Loader Icon */}
         <div
            style={{
               width: "56px",
               height: "56px",
               borderRadius: "50%",
               background: "rgba(0,212,255,0.06)",
               border: "1px solid rgba(0,212,255,0.2)",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               position: "relative",
               zIndex: 1,
               boxShadow: "0 0 25px rgba(0,212,255,0.15)",
            }}
         >
            <Loader2
               style={{
                  width: "22px",
                  height: "22px",
                  color: "#00d4ff",
                  animation: "spin 1s linear infinite",
               }}
            />
         </div>

         {/* Text */}
         <div style={{ textAlign: "center", zIndex: 1 }}>
            <p
               style={{
                  color: "#7ab8cc",
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  margin: 0,
               }}
            >
               {text}
            </p>
            <p
               style={{
                  color: "#0d2535",
                  fontSize: "0.7rem",
                  margin: "0.25rem 0 0",
               }}
            >
               AI Audit Engine — Activated
            </p>
         </div>
      </div>
   );
}
