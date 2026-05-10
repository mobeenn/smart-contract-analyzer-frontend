import { motion, AnimatePresence } from "framer-motion";
import {
   AlertTriangle,
   ShieldCheck,
   FileText,
   Fuel,
   Coins,
   Hash,
   ExternalLink,
   Loader2,
   CheckCircle,
   XCircle,
   AlertCircle,
   Activity,
   Cpu,
   Shield,
   Zap,
} from "lucide-react";

function AnalysisResults({ results, loading }) {
   // ── Loading State ──────────────────────────────────────────────
   if (loading) {
      return (
         <div
            style={{
               borderRadius: "12px",
               border: "1px solid rgba(0,212,255,0.15)",
               background: "rgba(3,12,24,0.8)",
               backdropFilter: "blur(20px)",
               minHeight: "400px",
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               justifyContent: "center",
               gap: "1rem",
               fontFamily: "'JetBrains Mono', monospace",
               overflow: "hidden",
               position: "relative",
            }}
         >
            {/* Animated scan rings */}
            {[0, 1, 2].map((i) => (
               <motion.div
                  key={i}
                  animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
                  transition={{
                     duration: 2,
                     delay: i * 0.6,
                     repeat: Infinity,
                     ease: "easeOut",
                  }}
                  style={{
                     position: "absolute",
                     width: "80px",
                     height: "80px",
                     borderRadius: "50%",
                     border: "1px solid rgba(0,212,255,0.4)",
                  }}
               />
            ))}

            <div
               style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgba(0,212,255,0.08)",
                  border: "1px solid rgba(0,212,255,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 1,
               }}
            >
               <Cpu
                  style={{
                     width: "24px",
                     height: "24px",
                     color: "#00d4ff",
                     animation: "spin 3s linear infinite",
                  }}
               />
            </div>

            <div
               style={{ textAlign: "center", position: "relative", zIndex: 1 }}
            >
               <p
                  style={{
                     color: "#7ab8cc",
                     fontWeight: 600,
                     fontSize: "0.85rem",
                     marginBottom: "0.25rem",
                  }}
               >
                  AI Scanning Contract...
               </p>
               <div
                  style={{
                     display: "flex",
                     gap: "0.375rem",
                     justifyContent: "center",
                     marginTop: "0.5rem",
                  }}
               >
                  {["Reentrancy", "Overflow", "Access Control"].map(
                     (label, i) => (
                        <motion.span
                           key={label}
                           animate={{ opacity: [0.3, 1, 0.3] }}
                           transition={{
                              duration: 1.5,
                              delay: i * 0.4,
                              repeat: Infinity,
                           }}
                           style={{
                              fontSize: "0.58rem",
                              padding: "2px 6px",
                              borderRadius: "4px",
                              background: "rgba(0,212,255,0.06)",
                              border: "1px solid rgba(0,212,255,0.12)",
                              color: "#1e4a5a",
                              letterSpacing: "0.05em",
                           }}
                        >
                           {label}
                        </motion.span>
                     ),
                  )}
               </div>
            </div>

            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
         </div>
      );
   }

   // ── Empty State ────────────────────────────────────────────────
   if (!results) {
      return (
         <div
            style={{
               borderRadius: "12px",
               border: "1px solid rgba(0,212,255,0.08)",
               background: "rgba(3,12,24,0.8)",
               backdropFilter: "blur(20px)",
               minHeight: "400px",
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               justifyContent: "center",
               gap: "0.75rem",
               fontFamily: "'JetBrains Mono', monospace",
            }}
         >
            <div
               style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  background: "rgba(0,212,255,0.04)",
                  border: "1px solid rgba(0,212,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
               }}
            >
               <Shield
                  style={{ width: "28px", height: "28px", color: "#0d2535" }}
               />
            </div>
            <div style={{ textAlign: "center" }}>
               <p
                  style={{
                     color: "#1e4a5a",
                     fontWeight: 600,
                     fontSize: "0.82rem",
                     marginBottom: "0.25rem",
                  }}
               >
                  Awaiting analysis
               </p>
               <p style={{ color: "#0d2535", fontSize: "0.72rem" }}>
                  Paste contract code → Run Audit
               </p>
            </div>

            {/* Decorative grid lines */}
            <div
               style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                     "linear-gradient(rgba(0,212,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.015) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                  borderRadius: "12px",
                  pointerEvents: "none",
               }}
            />
         </div>
      );
   }

   // ── Helpers ────────────────────────────────────────────────────
   const getRiskConfig = (risk) => {
      switch (risk?.toLowerCase()) {
         case "high":
            return {
               color: "#ff4444",
               bg: "rgba(255,68,68,0.06)",
               border: "rgba(255,68,68,0.2)",
               icon: XCircle,
               label: "HIGH RISK",
            };
         case "medium":
            return {
               color: "#ffaa00",
               bg: "rgba(255,170,0,0.06)",
               border: "rgba(255,170,0,0.2)",
               icon: AlertCircle,
               label: "MEDIUM RISK",
            };
         case "low":
            return {
               color: "#00ff88",
               bg: "rgba(0,255,136,0.06)",
               border: "rgba(0,255,136,0.2)",
               icon: CheckCircle,
               label: "LOW RISK",
            };
         default:
            return {
               color: "#00d4ff",
               bg: "rgba(0,212,255,0.06)",
               border: "rgba(0,212,255,0.2)",
               icon: AlertTriangle,
               label: "UNKNOWN",
            };
      }
   };

   const riskConfig = getRiskConfig(results.risk);
   const RiskIcon = riskConfig.icon;
   const confidence = results.confidence || 0;

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         style={{
            borderRadius: "12px",
            border: "1px solid rgba(0,212,255,0.12)",
            background: "rgba(3,12,24,0.8)",
            backdropFilter: "blur(20px)",
            overflow: "hidden",
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
               style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
               <Activity
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
                  audit_results.json
               </span>
            </div>
            <div
               style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  padding: "2px 8px",
                  borderRadius: "100px",
                  background: "rgba(0,255,136,0.06)",
                  border: "1px solid rgba(0,255,136,0.2)",
               }}
            >
               <div
                  style={{
                     width: "5px",
                     height: "5px",
                     borderRadius: "50%",
                     background: "#00ff88",
                     boxShadow: "0 0 5px #00ff88",
                  }}
               />
               <span
                  style={{
                     fontSize: "0.58rem",
                     color: "#00ff88",
                     letterSpacing: "0.1em",
                  }}
               >
                  VERIFIED
               </span>
            </div>
         </div>

         {/* Scrollable Content */}
         <div
            style={{
               padding: "1rem",
               display: "flex",
               flexDirection: "column",
               gap: "0.75rem",
               maxHeight: "600px",
               overflowY: "auto",
            }}
         >
            {/* ── Risk Level + Confidence ── */}
            <div
               style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
               }}
            >
               {/* Risk Level */}
               <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.05 }}
                  style={{
                     padding: "0.875rem",
                     borderRadius: "10px",
                     background: riskConfig.bg,
                     border: `1px solid ${riskConfig.border}`,
                     boxShadow: `0 0 20px ${riskConfig.color}10`,
                  }}
               >
                  <div
                     style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.375rem",
                        marginBottom: "0.5rem",
                     }}
                  >
                     <RiskIcon
                        style={{
                           width: "13px",
                           height: "13px",
                           color: riskConfig.color,
                        }}
                     />
                     <span
                        style={{
                           fontSize: "0.6rem",
                           color: riskConfig.color,
                           letterSpacing: "0.12em",
                           opacity: 0.8,
                        }}
                     >
                        RISK LEVEL
                     </span>
                  </div>
                  <p
                     style={{
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        color: riskConfig.color,
                        letterSpacing: "0.05em",
                        textShadow: `0 0 20px ${riskConfig.color}50`,
                        margin: 0,
                     }}
                  >
                     {results.risk?.toUpperCase() || "N/A"}
                  </p>
               </motion.div>

               {/* Confidence */}
               <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  style={{
                     padding: "0.875rem",
                     borderRadius: "10px",
                     background: "rgba(0,212,255,0.04)",
                     border: "1px solid rgba(0,212,255,0.12)",
                  }}
               >
                  <div
                     style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.375rem",
                        marginBottom: "0.5rem",
                     }}
                  >
                     <ShieldCheck
                        style={{
                           width: "13px",
                           height: "13px",
                           color: "#00d4ff",
                        }}
                     />
                     <span
                        style={{
                           fontSize: "0.6rem",
                           color: "#1e4a5a",
                           letterSpacing: "0.12em",
                        }}
                     >
                        CONFIDENCE
                     </span>
                  </div>
                  <p
                     style={{
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        color: "#00d4ff",
                        margin: 0,
                        marginBottom: "0.5rem",
                     }}
                  >
                     {confidence}%
                  </p>
                  {/* Progress bar */}
                  <div
                     style={{
                        height: "3px",
                        background: "rgba(0,212,255,0.08)",
                        borderRadius: "2px",
                        overflow: "hidden",
                     }}
                  >
                     <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${confidence}%` }}
                        transition={{
                           duration: 0.8,
                           delay: 0.3,
                           ease: "easeOut",
                        }}
                        style={{
                           height: "100%",
                           background:
                              "linear-gradient(90deg, #0066ff, #00d4ff)",
                           borderRadius: "2px",
                           boxShadow: "0 0 6px #00d4ff",
                        }}
                     />
                  </div>
               </motion.div>
            </div>

            {/* ── Credits ── */}
            <motion.div
               initial={{ opacity: 0, y: 5 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.15 }}
               style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.625rem 0.875rem",
                  borderRadius: "8px",
                  background: "rgba(0,0,0,0.2)",
                  border: "1px solid rgba(0,212,255,0.06)",
               }}
            >
               <div
                  style={{
                     display: "flex",
                     alignItems: "center",
                     gap: "0.5rem",
                  }}
               >
                  <Zap
                     style={{ width: "13px", height: "13px", color: "#00d4ff" }}
                  />
                  <span
                     style={{
                        fontSize: "0.7rem",
                        color: "#1e4a5a",
                        letterSpacing: "0.05em",
                     }}
                  >
                     REMAINING CREDITS
                  </span>
               </div>
               <span
                  style={{
                     fontSize: "0.85rem",
                     fontWeight: 700,
                     color: "#00d4ff",
                  }}
               >
                  {results.remainingCredits}
               </span>
            </motion.div>

            {/* ── Summary ── */}
            {results.summary && (
               <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{
                     padding: "0.875rem",
                     borderRadius: "10px",
                     background: "rgba(0,0,0,0.2)",
                     border: "1px solid rgba(0,212,255,0.08)",
                  }}
               >
                  <div
                     style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.5rem",
                     }}
                  >
                     <FileText
                        style={{
                           width: "13px",
                           height: "13px",
                           color: "#1e4a5a",
                        }}
                     />
                     <span
                        style={{
                           fontSize: "0.6rem",
                           color: "#1e4a5a",
                           letterSpacing: "0.12em",
                        }}
                     >
                        SUMMARY
                     </span>
                  </div>
                  <p
                     style={{
                        fontSize: "0.75rem",
                        color: "#4a8090",
                        lineHeight: 1.6,
                        margin: 0,
                     }}
                  >
                     {results.summary}
                  </p>
               </motion.div>
            )}

            {/* ── Vulnerabilities ── */}
            {results.issues && results.issues.length > 0 && (
               <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  style={{
                     padding: "0.875rem",
                     borderRadius: "10px",
                     background: "rgba(255,68,68,0.04)",
                     border: "1px solid rgba(255,68,68,0.15)",
                  }}
               >
                  <div
                     style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.75rem",
                     }}
                  >
                     <AlertTriangle
                        style={{
                           width: "13px",
                           height: "13px",
                           color: "#ff4444",
                        }}
                     />
                     <span
                        style={{
                           fontSize: "0.6rem",
                           color: "#ff4444",
                           letterSpacing: "0.12em",
                        }}
                     >
                        VULNERABILITIES ({results.issues.length})
                     </span>
                  </div>
                  <div
                     style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                     }}
                  >
                     {results.issues.map((issue, index) => (
                        <motion.div
                           key={index}
                           initial={{ opacity: 0, x: -5 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: 0.3 + index * 0.05 }}
                           style={{
                              display: "flex",
                              gap: "0.625rem",
                              padding: "0.5rem 0.625rem",
                              borderRadius: "6px",
                              background: "rgba(255,68,68,0.04)",
                              border: "1px solid rgba(255,68,68,0.1)",
                           }}
                        >
                           <div
                              style={{
                                 width: "16px",
                                 height: "16px",
                                 borderRadius: "4px",
                                 background: "rgba(255,68,68,0.15)",
                                 display: "flex",
                                 alignItems: "center",
                                 justifyContent: "center",
                                 flexShrink: 0,
                                 marginTop: "1px",
                              }}
                           >
                              <span
                                 style={{
                                    fontSize: "0.6rem",
                                    color: "#ff4444",
                                    fontWeight: 700,
                                 }}
                              >
                                 {index + 1}
                              </span>
                           </div>
                           <p
                              style={{
                                 fontSize: "0.73rem",
                                 color: "#cc6666",
                                 lineHeight: 1.5,
                                 margin: 0,
                              }}
                           >
                              {typeof issue === "string"
                                 ? issue
                                 : issue.description ||
                                   issue.title ||
                                   JSON.stringify(issue)}
                           </p>
                        </motion.div>
                     ))}
                  </div>
               </motion.div>
            )}

            {/* ── Security Strengths ── */}
            {results.security_strengths &&
               results.security_strengths.length > 0 && (
                  <motion.div
                     initial={{ opacity: 0, y: 5 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.3 }}
                     style={{
                        padding: "0.875rem",
                        borderRadius: "10px",
                        background: "rgba(0,255,136,0.03)",
                        border: "1px solid rgba(0,255,136,0.12)",
                     }}
                  >
                     <div
                        style={{
                           display: "flex",
                           alignItems: "center",
                           gap: "0.5rem",
                           marginBottom: "0.75rem",
                        }}
                     >
                        <ShieldCheck
                           style={{
                              width: "13px",
                              height: "13px",
                              color: "#00ff88",
                           }}
                        />
                        <span
                           style={{
                              fontSize: "0.6rem",
                              color: "#00ff88",
                              letterSpacing: "0.12em",
                           }}
                        >
                           SECURITY STRENGTHS (
                           {results.security_strengths.length})
                        </span>
                     </div>
                     <div
                        style={{
                           display: "flex",
                           flexDirection: "column",
                           gap: "0.5rem",
                        }}
                     >
                        {results.security_strengths.map((strength, index) => (
                           <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.35 + index * 0.05 }}
                              style={{
                                 display: "flex",
                                 gap: "0.625rem",
                                 alignItems: "flex-start",
                                 padding: "0.5rem 0.625rem",
                                 borderRadius: "6px",
                                 background: "rgba(0,255,136,0.03)",
                                 border: "1px solid rgba(0,255,136,0.08)",
                              }}
                           >
                              <CheckCircle
                                 style={{
                                    width: "12px",
                                    height: "12px",
                                    color: "#00ff88",
                                    flexShrink: 0,
                                    marginTop: "2px",
                                 }}
                              />
                              <p
                                 style={{
                                    fontSize: "0.73rem",
                                    color: "#3a9966",
                                    lineHeight: 1.5,
                                    margin: 0,
                                 }}
                              >
                                 {typeof strength === "string"
                                    ? strength
                                    : JSON.stringify(strength)}
                              </p>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>
               )}

            {/* ── Gas & Design Notes ── */}
            {results.gas_or_design_notes && (
               <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  style={{
                     padding: "0.875rem",
                     borderRadius: "10px",
                     background: "rgba(0,0,0,0.2)",
                     border: "1px solid rgba(0,212,255,0.08)",
                  }}
               >
                  <div
                     style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.5rem",
                     }}
                  >
                     <Fuel
                        style={{
                           width: "13px",
                           height: "13px",
                           color: "#ffaa00",
                        }}
                     />
                     <span
                        style={{
                           fontSize: "0.6rem",
                           color: "#ffaa00",
                           letterSpacing: "0.12em",
                        }}
                     >
                        GAS & DESIGN NOTES
                     </span>
                  </div>
                  <p
                     style={{
                        fontSize: "0.73rem",
                        color: "#4a6040",
                        lineHeight: 1.6,
                        margin: 0,
                     }}
                  >
                     {results.gas_or_design_notes}
                  </p>
               </motion.div>
            )}

            {/* ── Blockchain Record ── */}
            {(results.hash || results.txHash) && (
               <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  style={{
                     padding: "0.875rem",
                     borderRadius: "10px",
                     background: "rgba(0,212,255,0.03)",
                     border: "1px solid rgba(0,212,255,0.12)",
                  }}
               >
                  <div
                     style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.75rem",
                     }}
                  >
                     <Hash
                        style={{
                           width: "13px",
                           height: "13px",
                           color: "#00d4ff",
                        }}
                     />
                     <span
                        style={{
                           fontSize: "0.6rem",
                           color: "#00d4ff",
                           letterSpacing: "0.12em",
                        }}
                     >
                        BLOCKCHAIN RECORD — SEPOLIA
                     </span>
                  </div>

                  <div
                     style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                     }}
                  >
                     {results.hash && (
                        <div>
                           <p
                              style={{
                                 fontSize: "0.58rem",
                                 color: "#0d2535",
                                 letterSpacing: "0.1em",
                                 margin: "0 0 0.25rem",
                              }}
                           >
                              REPORT HASH
                           </p>
                           <code
                              style={{
                                 display: "block",
                                 fontSize: "0.65rem",
                                 padding: "0.375rem 0.625rem",
                                 borderRadius: "6px",
                                 background: "rgba(0,0,0,0.3)",
                                 border: "1px solid rgba(0,212,255,0.08)",
                                 color: "#1e4a5a",
                                 wordBreak: "break-all",
                                 lineHeight: 1.5,
                              }}
                           >
                              {results.hash}
                           </code>
                        </div>
                     )}

                     {results.txHash && (
                        <div>
                           <p
                              style={{
                                 fontSize: "0.58rem",
                                 color: "#0d2535",
                                 letterSpacing: "0.1em",
                                 margin: "0 0 0.25rem",
                              }}
                           >
                              TRANSACTION HASH
                           </p>
                           <div
                              style={{
                                 display: "flex",
                                 gap: "0.5rem",
                                 alignItems: "center",
                              }}
                           >
                              <code
                                 style={{
                                    flex: 1,
                                    display: "block",
                                    fontSize: "0.65rem",
                                    padding: "0.375rem 0.625rem",
                                    borderRadius: "6px",
                                    background: "rgba(0,0,0,0.3)",
                                    border: "1px solid rgba(0,212,255,0.08)",
                                    color: "#1e4a5a",
                                    wordBreak: "break-all",
                                    lineHeight: 1.5,
                                 }}
                              >
                                 {results.txHash}
                              </code>
                              <a
                                 href={`https://etherscan.io/tx/${results.txHash}`}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "6px",
                                    background: "rgba(0,212,255,0.06)",
                                    border: "1px solid rgba(0,212,255,0.15)",
                                    color: "#00d4ff",
                                    flexShrink: 0,
                                    textDecoration: "none",
                                    transition: "all 0.2s",
                                 }}
                                 onMouseEnter={(e) => {
                                    e.currentTarget.style.background =
                                       "rgba(0,212,255,0.12)";
                                    e.currentTarget.style.boxShadow =
                                       "0 0 10px rgba(0,212,255,0.2)";
                                 }}
                                 onMouseLeave={(e) => {
                                    e.currentTarget.style.background =
                                       "rgba(0,212,255,0.06)";
                                    e.currentTarget.style.boxShadow = "none";
                                 }}
                              >
                                 <ExternalLink
                                    style={{ width: "13px", height: "13px" }}
                                 />
                              </a>
                           </div>
                        </div>
                     )}
                  </div>
               </motion.div>
            )}
         </div>

         <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
      </motion.div>
   );
}

export default AnalysisResults;
