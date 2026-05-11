// import { Code, Play, Loader2, Terminal, Cpu } from "lucide-react";
// import { motion } from "framer-motion";
// import { useState } from "react";

// function ContractInput({ code, setCode, loading, onAnalyze }) {
//    const [focused, setFocused] = useState(false);
//    const lineCount = code ? code.split("\n").length : 0;

//    return (
//       <div
//          style={{
//             borderRadius: "12px",
//             border: `1px solid ${focused ? "rgba(0,212,255,0.3)" : "rgba(0,212,255,0.1)"}`,
//             background: "rgba(3,12,24,0.8)",
//             backdropFilter: "blur(20px)",
//             overflow: "hidden",
//             transition: "border-color 0.3s ease, box-shadow 0.3s ease",
//             boxShadow: focused
//                ? "0 0 0 1px rgba(0,212,255,0.1), 0 0 30px rgba(0,212,255,0.06), inset 0 0 30px rgba(0,212,255,0.02)"
//                : "0 0 0 1px rgba(0,212,255,0.03)",
//             fontFamily: "'JetBrains Mono', monospace",
//          }}
//       >
//          {/* Panel Header */}
//          <div
//             style={{
//                display: "flex",
//                alignItems: "center",
//                justifyContent: "space-between",
//                padding: "0.75rem 1rem",
//                borderBottom: "1px solid rgba(0,212,255,0.08)",
//                background: "rgba(0,212,255,0.02)",
//             }}
//          >
//             <div
//                style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "0.625rem",
//                }}
//             >
//                {/* Traffic dots */}
//                <div style={{ display: "flex", gap: "5px" }}>
//                   {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
//                      <div
//                         key={i}
//                         style={{
//                            width: "10px",
//                            height: "10px",
//                            borderRadius: "50%",
//                            background: c,
//                            opacity: 0.7,
//                         }}
//                      />
//                   ))}
//                </div>
//                <div
//                   style={{
//                      width: "1px",
//                      height: "16px",
//                      background: "rgba(0,212,255,0.1)",
//                      margin: "0 0.25rem",
//                   }}
//                />
//                <Terminal
//                   style={{ width: "14px", height: "14px", color: "#00d4ff" }}
//                />
//                <span
//                   style={{
//                      fontSize: "0.75rem",
//                      fontWeight: 600,
//                      color: "#7ab8cc",
//                      letterSpacing: "0.05em",
//                   }}
//                >
//                   solidity_input.sol
//                </span>
//                {code && (
//                   <span
//                      style={{
//                         fontSize: "0.6rem",
//                         color: "#1e4a5a",
//                         padding: "1px 6px",
//                         borderRadius: "4px",
//                         background: "rgba(0,212,255,0.05)",
//                         border: "1px solid rgba(0,212,255,0.08)",
//                      }}
//                   >
//                      {lineCount} lines
//                   </span>
//                )}
//             </div>

//             {/* Analyze Button */}
//             <motion.button
//                onClick={onAnalyze}
//                disabled={loading || !code.trim()}
//                whileHover={!loading && code.trim() ? { scale: 1.02 } : {}}
//                whileTap={!loading && code.trim() ? { scale: 0.98 } : {}}
//                style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "0.4rem",
//                   padding: "0.4rem 0.875rem",
//                   borderRadius: "7px",
//                   fontSize: "0.75rem",
//                   fontWeight: 600,
//                   letterSpacing: "0.05em",
//                   cursor: loading || !code.trim() ? "not-allowed" : "pointer",
//                   border: "none",
//                   transition: "all 0.2s ease",
//                   fontFamily: "'JetBrains Mono', monospace",
//                   ...(loading || !code.trim()
//                      ? {
//                           background: "rgba(0,212,255,0.05)",
//                           color: "#1e4a5a",
//                        }
//                      : {
//                           background:
//                              "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,100,255,0.15))",
//                           border: "1px solid rgba(0,212,255,0.35)",
//                           color: "#00d4ff",
//                           boxShadow: "0 0 12px rgba(0,212,255,0.15)",
//                        }),
//                }}
//             >
//                {loading ? (
//                   <>
//                      <Loader2
//                         style={{
//                            width: "12px",
//                            height: "12px",
//                            animation: "spin 1s linear infinite",
//                         }}
//                      />
//                      Scanning...
//                   </>
//                ) : (
//                   <>
//                      <Cpu style={{ width: "12px", height: "12px" }} />
//                      Run Audit
//                   </>
//                )}
//             </motion.button>
//          </div>

//          {/* Line numbers + textarea wrapper */}
//          <div style={{ display: "flex", position: "relative" }}>
//             {/* Line Numbers */}
//             <div
//                style={{
//                   width: "40px",
//                   padding: "1rem 0",
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "flex-end",
//                   paddingRight: "0.5rem",
//                   background: "rgba(0,0,0,0.2)",
//                   borderRight: "1px solid rgba(0,212,255,0.05)",
//                   userSelect: "none",
//                   flexShrink: 0,
//                }}
//             >
//                {Array.from({ length: Math.max(lineCount || 1, 20) }, (_, i) => (
//                   <div
//                      key={i}
//                      style={{
//                         fontSize: "0.65rem",
//                         lineHeight: "1.45rem",
//                         color:
//                            i < lineCount
//                               ? "rgba(0,212,255,0.2)"
//                               : "rgba(0,212,255,0.06)",
//                         fontVariantNumeric: "tabular-nums",
//                      }}
//                   >
//                      {i + 1}
//                   </div>
//                ))}
//             </div>

//             {/* Textarea */}
//             <textarea
//                value={code}
//                onChange={(e) => setCode(e.target.value)}
//                onFocus={() => setFocused(true)}
//                onBlur={() => setFocused(false)}
//                placeholder={`// Paste your Solidity smart contract here...\n\npragma solidity ^0.8.0;\n\ncontract MyContract {\n    // Your code here\n}`}
//                spellCheck="false"
//                style={{
//                   flex: 1,
//                   height: "380px",
//                   padding: "1rem",
//                   fontSize: "0.78rem",
//                   lineHeight: "1.45rem",
//                   fontFamily: "'JetBrains Mono', monospace",
//                   color: "#8ecfdf",
//                   background: "transparent",
//                   border: "none",
//                   outline: "none",
//                   resize: "none",
//                   caretColor: "#00d4ff",
//                }}
//             />

//             {/* Scanning animation when loading */}
//             {loading && (
//                <div
//                   style={{
//                      position: "absolute",
//                      inset: 0,
//                      pointerEvents: "none",
//                      overflow: "hidden",
//                   }}
//                >
//                   <motion.div
//                      initial={{ top: 0 }}
//                      animate={{ top: "100%" }}
//                      transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         ease: "linear",
//                      }}
//                      style={{
//                         position: "absolute",
//                         left: 0,
//                         right: 0,
//                         height: "2px",
//                         background:
//                            "linear-gradient(90deg, transparent, #00d4ff, transparent)",
//                         boxShadow: "0 0 20px #00d4ff",
//                      }}
//                   />
//                </div>
//             )}
//          </div>

//          {/* Footer status bar */}
//          <div
//             style={{
//                display: "flex",
//                alignItems: "center",
//                justifyContent: "space-between",
//                padding: "0.375rem 1rem",
//                borderTop: "1px solid rgba(0,212,255,0.06)",
//                background: "rgba(0,0,0,0.2)",
//             }}
//          >
//             <div
//                style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "0.875rem",
//                }}
//             >
//                <span
//                   style={{
//                      fontSize: "0.6rem",
//                      color: "#0d2535",
//                      letterSpacing: "0.1em",
//                   }}
//                >
//                   SOLIDITY
//                </span>
//                <span
//                   style={{
//                      fontSize: "0.6rem",
//                      color: "#0d2535",
//                      letterSpacing: "0.1em",
//                   }}
//                >
//                   UTF-8
//                </span>
//                <span
//                   style={{
//                      fontSize: "0.6rem",
//                      color: "#0d2535",
//                      letterSpacing: "0.1em",
//                   }}
//                >
//                   LF
//                </span>
//             </div>
//             <div
//                style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "0.375rem",
//                }}
//             >
//                <div
//                   style={{
//                      width: "5px",
//                      height: "5px",
//                      borderRadius: "50%",
//                      background: focused ? "#00d4ff" : "#0d2535",
//                      boxShadow: focused ? "0 0 6px #00d4ff" : "none",
//                      transition: "all 0.3s",
//                   }}
//                />
//                <span
//                   style={{
//                      fontSize: "0.6rem",
//                      color: focused ? "#1e4a5a" : "#0d2535",
//                      letterSpacing: "0.1em",
//                   }}
//                >
//                   {focused ? "EDITING" : "READY"}
//                </span>
//             </div>
//          </div>

//          <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&display=swap');
//         @keyframes spin { to { transform: rotate(360deg); } }
//         textarea::placeholder { color: #0d2535; }
//       `}</style>
//       </div>
//    );
// }

// export default ContractInput;

import { motion, AnimatePresence } from "framer-motion";
import { Code, Play, Loader2, Terminal, Trash2 } from "lucide-react";

export default function ContractInput({ code, setCode, loading, onAnalyze }) {
   return (
      <div className="flex flex-col h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.4)]">
         {/* Header */}
         <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07] bg-black/30">
            <div className="flex items-center gap-3">
               <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
               </div>
               <div className="w-px h-4 bg-white/10" />
               <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-semibold text-white">
                     contract.sol
                  </span>
               </div>
               <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] text-cyan-400 font-medium">
                  Solidity
               </span>
            </div>

            <div className="flex items-center gap-2">
               {/* Clear button */}
               {code && (
                  <motion.button
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     onClick={() => setCode("")}
                     className="p-1.5 rounded-lg text-gray-600 hover:text-gray-400 hover:bg-white/5 transition-all"
                     title="Clear"
                  >
                     <Trash2 className="w-3.5 h-3.5" />
                  </motion.button>
               )}

               {/* Analyze button */}
               <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onAnalyze}
                  disabled={loading || !code.trim()}
                  className="relative flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed overflow-hidden group
              bg-cyan-500 text-black shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] hover:bg-cyan-400"
               >
                  <AnimatePresence mode="wait">
                     {loading ? (
                        <motion.span
                           key="loading"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           className="flex items-center gap-2"
                        >
                           <Loader2 className="w-4 h-4 animate-spin" />
                           Scanning...
                        </motion.span>
                     ) : (
                        <motion.span
                           key="idle"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           className="flex items-center gap-2"
                        >
                           <Play className="w-4 h-4" />
                           Analyze
                        </motion.span>
                     )}
                  </AnimatePresence>
               </motion.button>
            </div>
         </div>

         {/* Line numbers + textarea */}
         <div className="relative flex-1">
            {/* Scanning animation overlay */}
            <AnimatePresence>
               {loading && (
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className="absolute inset-0 z-10 pointer-events-none"
                  >
                     <motion.div
                        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{
                           duration: 2.5,
                           repeat: Infinity,
                           ease: "linear",
                        }}
                     />
                     <div className="absolute inset-0 bg-cyan-500/[0.03]" />
                  </motion.div>
               )}
            </AnimatePresence>

            <textarea
               value={code}
               onChange={(e) => setCode(e.target.value)}
               placeholder={`// Paste your Solidity smart contract here...\n\npragma solidity ^0.8.0;\n\ncontract MyContract {\n    // Your code here\n}`}
               className="w-full h-full min-h-[420px] p-5 font-mono text-sm resize-none focus:outline-none transition-all duration-300
            bg-transparent text-gray-300 placeholder-gray-700
            caret-cyan-400
            focus:ring-0"
               spellCheck="false"
               style={{ lineHeight: "1.75", tabSize: 2 }}
            />
         </div>

         {/* Footer status bar */}
         <div className="flex items-center justify-between px-5 py-2.5 border-t border-white/[0.07] bg-black/20">
            <div className="flex items-center gap-4">
               <span className="text-[11px] text-gray-600 font-mono">
                  {code.split("\n").length} lines
               </span>
               <span className="text-[11px] text-gray-600 font-mono">
                  {code.length} chars
               </span>
            </div>
            <div className="flex items-center gap-2">
               {loading && (
                  <motion.div
                     animate={{ opacity: [0.4, 1, 0.4] }}
                     transition={{ duration: 1.5, repeat: Infinity }}
                     className="flex items-center gap-1.5"
                  >
                     <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                     <span className="text-[11px] text-cyan-400 font-medium">
                        AI analyzing
                     </span>
                  </motion.div>
               )}
               {!loading && (
                  <span className="text-[11px] text-gray-700">
                     20 credits per audit
                  </span>
               )}
            </div>
         </div>
      </div>
   );
}
