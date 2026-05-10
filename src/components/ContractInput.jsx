import { Code, Play, Loader2, Terminal, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

function ContractInput({ code, setCode, loading, onAnalyze }) {
   const [focused, setFocused] = useState(false);
   const lineCount = code ? code.split("\n").length : 0;

   return (
      <div
         style={{
            borderRadius: "12px",
            border: `1px solid ${focused ? "rgba(0,212,255,0.3)" : "rgba(0,212,255,0.1)"}`,
            background: "rgba(3,12,24,0.8)",
            backdropFilter: "blur(20px)",
            overflow: "hidden",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            boxShadow: focused
               ? "0 0 0 1px rgba(0,212,255,0.1), 0 0 30px rgba(0,212,255,0.06), inset 0 0 30px rgba(0,212,255,0.02)"
               : "0 0 0 1px rgba(0,212,255,0.03)",
            fontFamily: "'JetBrains Mono', monospace",
         }}
      >
         {/* Panel Header */}
         <div
            style={{
               display: "flex",
               alignItems: "center",
               justifyContent: "space-between",
               padding: "0.75rem 1rem",
               borderBottom: "1px solid rgba(0,212,255,0.08)",
               background: "rgba(0,212,255,0.02)",
            }}
         >
            <div
               style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
               }}
            >
               {/* Traffic dots */}
               <div style={{ display: "flex", gap: "5px" }}>
                  {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                     <div
                        key={i}
                        style={{
                           width: "10px",
                           height: "10px",
                           borderRadius: "50%",
                           background: c,
                           opacity: 0.7,
                        }}
                     />
                  ))}
               </div>
               <div
                  style={{
                     width: "1px",
                     height: "16px",
                     background: "rgba(0,212,255,0.1)",
                     margin: "0 0.25rem",
                  }}
               />
               <Terminal
                  style={{ width: "14px", height: "14px", color: "#00d4ff" }}
               />
               <span
                  style={{
                     fontSize: "0.75rem",
                     fontWeight: 600,
                     color: "#7ab8cc",
                     letterSpacing: "0.05em",
                  }}
               >
                  solidity_input.sol
               </span>
               {code && (
                  <span
                     style={{
                        fontSize: "0.6rem",
                        color: "#1e4a5a",
                        padding: "1px 6px",
                        borderRadius: "4px",
                        background: "rgba(0,212,255,0.05)",
                        border: "1px solid rgba(0,212,255,0.08)",
                     }}
                  >
                     {lineCount} lines
                  </span>
               )}
            </div>

            {/* Analyze Button */}
            <motion.button
               onClick={onAnalyze}
               disabled={loading || !code.trim()}
               whileHover={!loading && code.trim() ? { scale: 1.02 } : {}}
               whileTap={!loading && code.trim() ? { scale: 0.98 } : {}}
               style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.4rem 0.875rem",
                  borderRadius: "7px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  cursor: loading || !code.trim() ? "not-allowed" : "pointer",
                  border: "none",
                  transition: "all 0.2s ease",
                  fontFamily: "'JetBrains Mono', monospace",
                  ...(loading || !code.trim()
                     ? {
                          background: "rgba(0,212,255,0.05)",
                          color: "#1e4a5a",
                       }
                     : {
                          background:
                             "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,100,255,0.15))",
                          border: "1px solid rgba(0,212,255,0.35)",
                          color: "#00d4ff",
                          boxShadow: "0 0 12px rgba(0,212,255,0.15)",
                       }),
               }}
            >
               {loading ? (
                  <>
                     <Loader2
                        style={{
                           width: "12px",
                           height: "12px",
                           animation: "spin 1s linear infinite",
                        }}
                     />
                     Scanning...
                  </>
               ) : (
                  <>
                     <Cpu style={{ width: "12px", height: "12px" }} />
                     Run Audit
                  </>
               )}
            </motion.button>
         </div>

         {/* Line numbers + textarea wrapper */}
         <div style={{ display: "flex", position: "relative" }}>
            {/* Line Numbers */}
            <div
               style={{
                  width: "40px",
                  padding: "1rem 0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  paddingRight: "0.5rem",
                  background: "rgba(0,0,0,0.2)",
                  borderRight: "1px solid rgba(0,212,255,0.05)",
                  userSelect: "none",
                  flexShrink: 0,
               }}
            >
               {Array.from({ length: Math.max(lineCount || 1, 20) }, (_, i) => (
                  <div
                     key={i}
                     style={{
                        fontSize: "0.65rem",
                        lineHeight: "1.45rem",
                        color:
                           i < lineCount
                              ? "rgba(0,212,255,0.2)"
                              : "rgba(0,212,255,0.06)",
                        fontVariantNumeric: "tabular-nums",
                     }}
                  >
                     {i + 1}
                  </div>
               ))}
            </div>

            {/* Textarea */}
            <textarea
               value={code}
               onChange={(e) => setCode(e.target.value)}
               onFocus={() => setFocused(true)}
               onBlur={() => setFocused(false)}
               placeholder={`// Paste your Solidity smart contract here...\n\npragma solidity ^0.8.0;\n\ncontract MyContract {\n    // Your code here\n}`}
               spellCheck="false"
               style={{
                  flex: 1,
                  height: "380px",
                  padding: "1rem",
                  fontSize: "0.78rem",
                  lineHeight: "1.45rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#8ecfdf",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  resize: "none",
                  caretColor: "#00d4ff",
               }}
            />

            {/* Scanning animation when loading */}
            {loading && (
               <div
                  style={{
                     position: "absolute",
                     inset: 0,
                     pointerEvents: "none",
                     overflow: "hidden",
                  }}
               >
                  <motion.div
                     initial={{ top: 0 }}
                     animate={{ top: "100%" }}
                     transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                     }}
                     style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        height: "2px",
                        background:
                           "linear-gradient(90deg, transparent, #00d4ff, transparent)",
                        boxShadow: "0 0 20px #00d4ff",
                     }}
                  />
               </div>
            )}
         </div>

         {/* Footer status bar */}
         <div
            style={{
               display: "flex",
               alignItems: "center",
               justifyContent: "space-between",
               padding: "0.375rem 1rem",
               borderTop: "1px solid rgba(0,212,255,0.06)",
               background: "rgba(0,0,0,0.2)",
            }}
         >
            <div
               style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
               }}
            >
               <span
                  style={{
                     fontSize: "0.6rem",
                     color: "#0d2535",
                     letterSpacing: "0.1em",
                  }}
               >
                  SOLIDITY
               </span>
               <span
                  style={{
                     fontSize: "0.6rem",
                     color: "#0d2535",
                     letterSpacing: "0.1em",
                  }}
               >
                  UTF-8
               </span>
               <span
                  style={{
                     fontSize: "0.6rem",
                     color: "#0d2535",
                     letterSpacing: "0.1em",
                  }}
               >
                  LF
               </span>
            </div>
            <div
               style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
               }}
            >
               <div
                  style={{
                     width: "5px",
                     height: "5px",
                     borderRadius: "50%",
                     background: focused ? "#00d4ff" : "#0d2535",
                     boxShadow: focused ? "0 0 6px #00d4ff" : "none",
                     transition: "all 0.3s",
                  }}
               />
               <span
                  style={{
                     fontSize: "0.6rem",
                     color: focused ? "#1e4a5a" : "#0d2535",
                     letterSpacing: "0.1em",
                  }}
               >
                  {focused ? "EDITING" : "READY"}
               </span>
            </div>
         </div>

         <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&display=swap');
        @keyframes spin { to { transform: rotate(360deg); } }
        textarea::placeholder { color: #0d2535; }
      `}</style>
      </div>
   );
}

export default ContractInput;
