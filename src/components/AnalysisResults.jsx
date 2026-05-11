// import { motion, AnimatePresence } from "framer-motion";
// import {
//    AlertTriangle,
//    ShieldCheck,
//    FileText,
//    Fuel,
//    Coins,
//    Hash,
//    ExternalLink,
//    Loader2,
//    CheckCircle,
//    XCircle,
//    AlertCircle,
//    Activity,
//    Cpu,
//    Shield,
//    Zap,
// } from "lucide-react";

// function AnalysisResults({ results, loading }) {
//    // ── Loading State ──────────────────────────────────────────────
//    if (loading) {
//       return (
//          <div
//             style={{
//                borderRadius: "12px",
//                border: "1px solid rgba(0,212,255,0.15)",
//                background: "rgba(3,12,24,0.8)",
//                backdropFilter: "blur(20px)",
//                minHeight: "400px",
//                display: "flex",
//                flexDirection: "column",
//                alignItems: "center",
//                justifyContent: "center",
//                gap: "1rem",
//                fontFamily: "'JetBrains Mono', monospace",
//                overflow: "hidden",
//                position: "relative",
//             }}
//          >
//             {/* Animated scan rings */}
//             {[0, 1, 2].map((i) => (
//                <motion.div
//                   key={i}
//                   animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
//                   transition={{
//                      duration: 2,
//                      delay: i * 0.6,
//                      repeat: Infinity,
//                      ease: "easeOut",
//                   }}
//                   style={{
//                      position: "absolute",
//                      width: "80px",
//                      height: "80px",
//                      borderRadius: "50%",
//                      border: "1px solid rgba(0,212,255,0.4)",
//                   }}
//                />
//             ))}

//             <div
//                style={{
//                   width: "64px",
//                   height: "64px",
//                   borderRadius: "50%",
//                   background: "rgba(0,212,255,0.08)",
//                   border: "1px solid rgba(0,212,255,0.25)",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   position: "relative",
//                   zIndex: 1,
//                }}
//             >
//                <Cpu
//                   style={{
//                      width: "24px",
//                      height: "24px",
//                      color: "#00d4ff",
//                      animation: "spin 3s linear infinite",
//                   }}
//                />
//             </div>

//             <div
//                style={{ textAlign: "center", position: "relative", zIndex: 1 }}
//             >
//                <p
//                   style={{
//                      color: "#7ab8cc",
//                      fontWeight: 600,
//                      fontSize: "0.85rem",
//                      marginBottom: "0.25rem",
//                   }}
//                >
//                   AI Scanning Contract...
//                </p>
//                <div
//                   style={{
//                      display: "flex",
//                      gap: "0.375rem",
//                      justifyContent: "center",
//                      marginTop: "0.5rem",
//                   }}
//                >
//                   {["Reentrancy", "Overflow", "Access Control"].map(
//                      (label, i) => (
//                         <motion.span
//                            key={label}
//                            animate={{ opacity: [0.3, 1, 0.3] }}
//                            transition={{
//                               duration: 1.5,
//                               delay: i * 0.4,
//                               repeat: Infinity,
//                            }}
//                            style={{
//                               fontSize: "0.58rem",
//                               padding: "2px 6px",
//                               borderRadius: "4px",
//                               background: "rgba(0,212,255,0.06)",
//                               border: "1px solid rgba(0,212,255,0.12)",
//                               color: "#1e4a5a",
//                               letterSpacing: "0.05em",
//                            }}
//                         >
//                            {label}
//                         </motion.span>
//                      ),
//                   )}
//                </div>
//             </div>

//             <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
//          </div>
//       );
//    }

//    // ── Empty State ────────────────────────────────────────────────
//    if (!results) {
//       return (
//          <div
//             style={{
//                borderRadius: "12px",
//                border: "1px solid rgba(0,212,255,0.08)",
//                background: "rgba(3,12,24,0.8)",
//                backdropFilter: "blur(20px)",
//                minHeight: "400px",
//                display: "flex",
//                flexDirection: "column",
//                alignItems: "center",
//                justifyContent: "center",
//                gap: "0.75rem",
//                fontFamily: "'JetBrains Mono', monospace",
//             }}
//          >
//             <div
//                style={{
//                   width: "64px",
//                   height: "64px",
//                   borderRadius: "12px",
//                   background: "rgba(0,212,255,0.04)",
//                   border: "1px solid rgba(0,212,255,0.1)",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                }}
//             >
//                <Shield
//                   style={{ width: "28px", height: "28px", color: "#0d2535" }}
//                />
//             </div>
//             <div style={{ textAlign: "center" }}>
//                <p
//                   style={{
//                      color: "#1e4a5a",
//                      fontWeight: 600,
//                      fontSize: "0.82rem",
//                      marginBottom: "0.25rem",
//                   }}
//                >
//                   Awaiting analysis
//                </p>
//                <p style={{ color: "#0d2535", fontSize: "0.72rem" }}>
//                   Paste contract code → Run Audit
//                </p>
//             </div>

//             {/* Decorative grid lines */}
//             <div
//                style={{
//                   position: "absolute",
//                   inset: 0,
//                   backgroundImage:
//                      "linear-gradient(rgba(0,212,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.015) 1px, transparent 1px)",
//                   backgroundSize: "30px 30px",
//                   borderRadius: "12px",
//                   pointerEvents: "none",
//                }}
//             />
//          </div>
//       );
//    }

//    // ── Helpers ────────────────────────────────────────────────────
//    const getRiskConfig = (risk) => {
//       switch (risk?.toLowerCase()) {
//          case "high":
//             return {
//                color: "#ff4444",
//                bg: "rgba(255,68,68,0.06)",
//                border: "rgba(255,68,68,0.2)",
//                icon: XCircle,
//                label: "HIGH RISK",
//             };
//          case "medium":
//             return {
//                color: "#ffaa00",
//                bg: "rgba(255,170,0,0.06)",
//                border: "rgba(255,170,0,0.2)",
//                icon: AlertCircle,
//                label: "MEDIUM RISK",
//             };
//          case "low":
//             return {
//                color: "#00ff88",
//                bg: "rgba(0,255,136,0.06)",
//                border: "rgba(0,255,136,0.2)",
//                icon: CheckCircle,
//                label: "LOW RISK",
//             };
//          default:
//             return {
//                color: "#00d4ff",
//                bg: "rgba(0,212,255,0.06)",
//                border: "rgba(0,212,255,0.2)",
//                icon: AlertTriangle,
//                label: "UNKNOWN",
//             };
//       }
//    };

//    const riskConfig = getRiskConfig(results.risk);
//    const RiskIcon = riskConfig.icon;
//    const confidence = results.confidence || 0;

//    return (
//       <motion.div
//          initial={{ opacity: 0 }}
//          animate={{ opacity: 1 }}
//          style={{
//             borderRadius: "12px",
//             border: "1px solid rgba(0,212,255,0.12)",
//             background: "rgba(3,12,24,0.8)",
//             backdropFilter: "blur(20px)",
//             overflow: "hidden",
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
//                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
//             >
//                <Activity
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
//                   audit_results.json
//                </span>
//             </div>
//             <div
//                style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "0.375rem",
//                   padding: "2px 8px",
//                   borderRadius: "100px",
//                   background: "rgba(0,255,136,0.06)",
//                   border: "1px solid rgba(0,255,136,0.2)",
//                }}
//             >
//                <div
//                   style={{
//                      width: "5px",
//                      height: "5px",
//                      borderRadius: "50%",
//                      background: "#00ff88",
//                      boxShadow: "0 0 5px #00ff88",
//                   }}
//                />
//                <span
//                   style={{
//                      fontSize: "0.58rem",
//                      color: "#00ff88",
//                      letterSpacing: "0.1em",
//                   }}
//                >
//                   VERIFIED
//                </span>
//             </div>
//          </div>

//          {/* Scrollable Content */}
//          <div
//             style={{
//                padding: "1rem",
//                display: "flex",
//                flexDirection: "column",
//                gap: "0.75rem",
//                maxHeight: "600px",
//                overflowY: "auto",
//             }}
//          >
//             {/* ── Risk Level + Confidence ── */}
//             <div
//                style={{
//                   display: "grid",
//                   gridTemplateColumns: "1fr 1fr",
//                   gap: "0.75rem",
//                }}
//             >
//                {/* Risk Level */}
//                <motion.div
//                   initial={{ scale: 0.95, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.05 }}
//                   style={{
//                      padding: "0.875rem",
//                      borderRadius: "10px",
//                      background: riskConfig.bg,
//                      border: `1px solid ${riskConfig.border}`,
//                      boxShadow: `0 0 20px ${riskConfig.color}10`,
//                   }}
//                >
//                   <div
//                      style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "0.375rem",
//                         marginBottom: "0.5rem",
//                      }}
//                   >
//                      <RiskIcon
//                         style={{
//                            width: "13px",
//                            height: "13px",
//                            color: riskConfig.color,
//                         }}
//                      />
//                      <span
//                         style={{
//                            fontSize: "0.6rem",
//                            color: riskConfig.color,
//                            letterSpacing: "0.12em",
//                            opacity: 0.8,
//                         }}
//                      >
//                         RISK LEVEL
//                      </span>
//                   </div>
//                   <p
//                      style={{
//                         fontSize: "1.4rem",
//                         fontWeight: 700,
//                         color: riskConfig.color,
//                         letterSpacing: "0.05em",
//                         textShadow: `0 0 20px ${riskConfig.color}50`,
//                         margin: 0,
//                      }}
//                   >
//                      {results.risk?.toUpperCase() || "N/A"}
//                   </p>
//                </motion.div>

//                {/* Confidence */}
//                <motion.div
//                   initial={{ scale: 0.95, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.1 }}
//                   style={{
//                      padding: "0.875rem",
//                      borderRadius: "10px",
//                      background: "rgba(0,212,255,0.04)",
//                      border: "1px solid rgba(0,212,255,0.12)",
//                   }}
//                >
//                   <div
//                      style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "0.375rem",
//                         marginBottom: "0.5rem",
//                      }}
//                   >
//                      <ShieldCheck
//                         style={{
//                            width: "13px",
//                            height: "13px",
//                            color: "#00d4ff",
//                         }}
//                      />
//                      <span
//                         style={{
//                            fontSize: "0.6rem",
//                            color: "#1e4a5a",
//                            letterSpacing: "0.12em",
//                         }}
//                      >
//                         CONFIDENCE
//                      </span>
//                   </div>
//                   <p
//                      style={{
//                         fontSize: "1.4rem",
//                         fontWeight: 700,
//                         color: "#00d4ff",
//                         margin: 0,
//                         marginBottom: "0.5rem",
//                      }}
//                   >
//                      {confidence}%
//                   </p>
//                   {/* Progress bar */}
//                   <div
//                      style={{
//                         height: "3px",
//                         background: "rgba(0,212,255,0.08)",
//                         borderRadius: "2px",
//                         overflow: "hidden",
//                      }}
//                   >
//                      <motion.div
//                         initial={{ width: 0 }}
//                         animate={{ width: `${confidence}%` }}
//                         transition={{
//                            duration: 0.8,
//                            delay: 0.3,
//                            ease: "easeOut",
//                         }}
//                         style={{
//                            height: "100%",
//                            background:
//                               "linear-gradient(90deg, #0066ff, #00d4ff)",
//                            borderRadius: "2px",
//                            boxShadow: "0 0 6px #00d4ff",
//                         }}
//                      />
//                   </div>
//                </motion.div>
//             </div>

//             {/* ── Credits ── */}
//             <motion.div
//                initial={{ opacity: 0, y: 5 }}
//                animate={{ opacity: 1, y: 0 }}
//                transition={{ delay: 0.15 }}
//                style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   padding: "0.625rem 0.875rem",
//                   borderRadius: "8px",
//                   background: "rgba(0,0,0,0.2)",
//                   border: "1px solid rgba(0,212,255,0.06)",
//                }}
//             >
//                <div
//                   style={{
//                      display: "flex",
//                      alignItems: "center",
//                      gap: "0.5rem",
//                   }}
//                >
//                   <Zap
//                      style={{ width: "13px", height: "13px", color: "#00d4ff" }}
//                   />
//                   <span
//                      style={{
//                         fontSize: "0.7rem",
//                         color: "#1e4a5a",
//                         letterSpacing: "0.05em",
//                      }}
//                   >
//                      REMAINING CREDITS
//                   </span>
//                </div>
//                <span
//                   style={{
//                      fontSize: "0.85rem",
//                      fontWeight: 700,
//                      color: "#00d4ff",
//                   }}
//                >
//                   {results.remainingCredits}
//                </span>
//             </motion.div>

//             {/* ── Summary ── */}
//             {results.summary && (
//                <motion.div
//                   initial={{ opacity: 0, y: 5 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                   style={{
//                      padding: "0.875rem",
//                      borderRadius: "10px",
//                      background: "rgba(0,0,0,0.2)",
//                      border: "1px solid rgba(0,212,255,0.08)",
//                   }}
//                >
//                   <div
//                      style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "0.5rem",
//                         marginBottom: "0.5rem",
//                      }}
//                   >
//                      <FileText
//                         style={{
//                            width: "13px",
//                            height: "13px",
//                            color: "#1e4a5a",
//                         }}
//                      />
//                      <span
//                         style={{
//                            fontSize: "0.6rem",
//                            color: "#1e4a5a",
//                            letterSpacing: "0.12em",
//                         }}
//                      >
//                         SUMMARY
//                      </span>
//                   </div>
//                   <p
//                      style={{
//                         fontSize: "0.75rem",
//                         color: "#4a8090",
//                         lineHeight: 1.6,
//                         margin: 0,
//                      }}
//                   >
//                      {results.summary}
//                   </p>
//                </motion.div>
//             )}

//             {/* ── Vulnerabilities ── */}
//             {results.issues && results.issues.length > 0 && (
//                <motion.div
//                   initial={{ opacity: 0, y: 5 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.25 }}
//                   style={{
//                      padding: "0.875rem",
//                      borderRadius: "10px",
//                      background: "rgba(255,68,68,0.04)",
//                      border: "1px solid rgba(255,68,68,0.15)",
//                   }}
//                >
//                   <div
//                      style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "0.5rem",
//                         marginBottom: "0.75rem",
//                      }}
//                   >
//                      <AlertTriangle
//                         style={{
//                            width: "13px",
//                            height: "13px",
//                            color: "#ff4444",
//                         }}
//                      />
//                      <span
//                         style={{
//                            fontSize: "0.6rem",
//                            color: "#ff4444",
//                            letterSpacing: "0.12em",
//                         }}
//                      >
//                         VULNERABILITIES ({results.issues.length})
//                      </span>
//                   </div>
//                   <div
//                      style={{
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: "0.5rem",
//                      }}
//                   >
//                      {results.issues.map((issue, index) => (
//                         <motion.div
//                            key={index}
//                            initial={{ opacity: 0, x: -5 }}
//                            animate={{ opacity: 1, x: 0 }}
//                            transition={{ delay: 0.3 + index * 0.05 }}
//                            style={{
//                               display: "flex",
//                               gap: "0.625rem",
//                               padding: "0.5rem 0.625rem",
//                               borderRadius: "6px",
//                               background: "rgba(255,68,68,0.04)",
//                               border: "1px solid rgba(255,68,68,0.1)",
//                            }}
//                         >
//                            <div
//                               style={{
//                                  width: "16px",
//                                  height: "16px",
//                                  borderRadius: "4px",
//                                  background: "rgba(255,68,68,0.15)",
//                                  display: "flex",
//                                  alignItems: "center",
//                                  justifyContent: "center",
//                                  flexShrink: 0,
//                                  marginTop: "1px",
//                               }}
//                            >
//                               <span
//                                  style={{
//                                     fontSize: "0.6rem",
//                                     color: "#ff4444",
//                                     fontWeight: 700,
//                                  }}
//                               >
//                                  {index + 1}
//                               </span>
//                            </div>
//                            <p
//                               style={{
//                                  fontSize: "0.73rem",
//                                  color: "#cc6666",
//                                  lineHeight: 1.5,
//                                  margin: 0,
//                               }}
//                            >
//                               {typeof issue === "string"
//                                  ? issue
//                                  : issue.description ||
//                                    issue.title ||
//                                    JSON.stringify(issue)}
//                            </p>
//                         </motion.div>
//                      ))}
//                   </div>
//                </motion.div>
//             )}

//             {/* ── Security Strengths ── */}
//             {results.security_strengths &&
//                results.security_strengths.length > 0 && (
//                   <motion.div
//                      initial={{ opacity: 0, y: 5 }}
//                      animate={{ opacity: 1, y: 0 }}
//                      transition={{ delay: 0.3 }}
//                      style={{
//                         padding: "0.875rem",
//                         borderRadius: "10px",
//                         background: "rgba(0,255,136,0.03)",
//                         border: "1px solid rgba(0,255,136,0.12)",
//                      }}
//                   >
//                      <div
//                         style={{
//                            display: "flex",
//                            alignItems: "center",
//                            gap: "0.5rem",
//                            marginBottom: "0.75rem",
//                         }}
//                      >
//                         <ShieldCheck
//                            style={{
//                               width: "13px",
//                               height: "13px",
//                               color: "#00ff88",
//                            }}
//                         />
//                         <span
//                            style={{
//                               fontSize: "0.6rem",
//                               color: "#00ff88",
//                               letterSpacing: "0.12em",
//                            }}
//                         >
//                            SECURITY STRENGTHS (
//                            {results.security_strengths.length})
//                         </span>
//                      </div>
//                      <div
//                         style={{
//                            display: "flex",
//                            flexDirection: "column",
//                            gap: "0.5rem",
//                         }}
//                      >
//                         {results.security_strengths.map((strength, index) => (
//                            <motion.div
//                               key={index}
//                               initial={{ opacity: 0, x: -5 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: 0.35 + index * 0.05 }}
//                               style={{
//                                  display: "flex",
//                                  gap: "0.625rem",
//                                  alignItems: "flex-start",
//                                  padding: "0.5rem 0.625rem",
//                                  borderRadius: "6px",
//                                  background: "rgba(0,255,136,0.03)",
//                                  border: "1px solid rgba(0,255,136,0.08)",
//                               }}
//                            >
//                               <CheckCircle
//                                  style={{
//                                     width: "12px",
//                                     height: "12px",
//                                     color: "#00ff88",
//                                     flexShrink: 0,
//                                     marginTop: "2px",
//                                  }}
//                               />
//                               <p
//                                  style={{
//                                     fontSize: "0.73rem",
//                                     color: "#3a9966",
//                                     lineHeight: 1.5,
//                                     margin: 0,
//                                  }}
//                               >
//                                  {typeof strength === "string"
//                                     ? strength
//                                     : JSON.stringify(strength)}
//                               </p>
//                            </motion.div>
//                         ))}
//                      </div>
//                   </motion.div>
//                )}

//             {/* ── Gas & Design Notes ── */}
//             {results.gas_or_design_notes && (
//                <motion.div
//                   initial={{ opacity: 0, y: 5 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.35 }}
//                   style={{
//                      padding: "0.875rem",
//                      borderRadius: "10px",
//                      background: "rgba(0,0,0,0.2)",
//                      border: "1px solid rgba(0,212,255,0.08)",
//                   }}
//                >
//                   <div
//                      style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "0.5rem",
//                         marginBottom: "0.5rem",
//                      }}
//                   >
//                      <Fuel
//                         style={{
//                            width: "13px",
//                            height: "13px",
//                            color: "#ffaa00",
//                         }}
//                      />
//                      <span
//                         style={{
//                            fontSize: "0.6rem",
//                            color: "#ffaa00",
//                            letterSpacing: "0.12em",
//                         }}
//                      >
//                         GAS & DESIGN NOTES
//                      </span>
//                   </div>
//                   <p
//                      style={{
//                         fontSize: "0.73rem",
//                         color: "#4a6040",
//                         lineHeight: 1.6,
//                         margin: 0,
//                      }}
//                   >
//                      {results.gas_or_design_notes}
//                   </p>
//                </motion.div>
//             )}

//             {/* ── Blockchain Record ── */}
//             {(results.hash || results.txHash) && (
//                <motion.div
//                   initial={{ opacity: 0, y: 5 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4 }}
//                   style={{
//                      padding: "0.875rem",
//                      borderRadius: "10px",
//                      background: "rgba(0,212,255,0.03)",
//                      border: "1px solid rgba(0,212,255,0.12)",
//                   }}
//                >
//                   <div
//                      style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "0.5rem",
//                         marginBottom: "0.75rem",
//                      }}
//                   >
//                      <Hash
//                         style={{
//                            width: "13px",
//                            height: "13px",
//                            color: "#00d4ff",
//                         }}
//                      />
//                      <span
//                         style={{
//                            fontSize: "0.6rem",
//                            color: "#00d4ff",
//                            letterSpacing: "0.12em",
//                         }}
//                      >
//                         BLOCKCHAIN RECORD — SEPOLIA
//                      </span>
//                   </div>

//                   <div
//                      style={{
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: "0.5rem",
//                      }}
//                   >
//                      {results.hash && (
//                         <div>
//                            <p
//                               style={{
//                                  fontSize: "0.58rem",
//                                  color: "#0d2535",
//                                  letterSpacing: "0.1em",
//                                  margin: "0 0 0.25rem",
//                               }}
//                            >
//                               REPORT HASH
//                            </p>
//                            <code
//                               style={{
//                                  display: "block",
//                                  fontSize: "0.65rem",
//                                  padding: "0.375rem 0.625rem",
//                                  borderRadius: "6px",
//                                  background: "rgba(0,0,0,0.3)",
//                                  border: "1px solid rgba(0,212,255,0.08)",
//                                  color: "#1e4a5a",
//                                  wordBreak: "break-all",
//                                  lineHeight: 1.5,
//                               }}
//                            >
//                               {results.hash}
//                            </code>
//                         </div>
//                      )}

//                      {results.txHash && (
//                         <div>
//                            <p
//                               style={{
//                                  fontSize: "0.58rem",
//                                  color: "#0d2535",
//                                  letterSpacing: "0.1em",
//                                  margin: "0 0 0.25rem",
//                               }}
//                            >
//                               TRANSACTION HASH
//                            </p>
//                            <div
//                               style={{
//                                  display: "flex",
//                                  gap: "0.5rem",
//                                  alignItems: "center",
//                               }}
//                            >
//                               <code
//                                  style={{
//                                     flex: 1,
//                                     display: "block",
//                                     fontSize: "0.65rem",
//                                     padding: "0.375rem 0.625rem",
//                                     borderRadius: "6px",
//                                     background: "rgba(0,0,0,0.3)",
//                                     border: "1px solid rgba(0,212,255,0.08)",
//                                     color: "#1e4a5a",
//                                     wordBreak: "break-all",
//                                     lineHeight: 1.5,
//                                  }}
//                               >
//                                  {results.txHash}
//                               </code>
//                               <a
//                                  href={`https://etherscan.io/tx/${results.txHash}`}
//                                  target="_blank"
//                                  rel="noopener noreferrer"
//                                  style={{
//                                     display: "flex",
//                                     alignItems: "center",
//                                     justifyContent: "center",
//                                     width: "30px",
//                                     height: "30px",
//                                     borderRadius: "6px",
//                                     background: "rgba(0,212,255,0.06)",
//                                     border: "1px solid rgba(0,212,255,0.15)",
//                                     color: "#00d4ff",
//                                     flexShrink: 0,
//                                     textDecoration: "none",
//                                     transition: "all 0.2s",
//                                  }}
//                                  onMouseEnter={(e) => {
//                                     e.currentTarget.style.background =
//                                        "rgba(0,212,255,0.12)";
//                                     e.currentTarget.style.boxShadow =
//                                        "0 0 10px rgba(0,212,255,0.2)";
//                                  }}
//                                  onMouseLeave={(e) => {
//                                     e.currentTarget.style.background =
//                                        "rgba(0,212,255,0.06)";
//                                     e.currentTarget.style.boxShadow = "none";
//                                  }}
//                               >
//                                  <ExternalLink
//                                     style={{ width: "13px", height: "13px" }}
//                                  />
//                               </a>
//                            </div>
//                         </div>
//                      )}
//                   </div>
//                </motion.div>
//             )}
//          </div>

//          <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');
//         @keyframes spin { to { transform: rotate(360deg); } }
//       `}</style>
//       </motion.div>
//    );
// }

// export default AnalysisResults;

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
   Zap,
   Shield,
   Activity,
} from "lucide-react";
import { FaEthereum } from "react-icons/fa";

/* ── helpers ── */
const getRiskConfig = (risk) => {
   switch (risk?.toLowerCase()) {
      case "high":
      case "critical":
         return {
            label: risk,
            color: "text-red-400",
            bg: "bg-red-500/10",
            border: "border-red-500/25",
            glow: "shadow-[0_0_20px_rgba(239,68,68,0.15)]",
            ring: "#ef4444",
            icon: XCircle,
         };
      case "medium":
         return {
            label: risk,
            color: "text-yellow-400",
            bg: "bg-yellow-500/10",
            border: "border-yellow-500/25",
            glow: "shadow-[0_0_20px_rgba(234,179,8,0.15)]",
            ring: "#eab308",
            icon: AlertCircle,
         };
      case "low":
         return {
            label: risk,
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/25",
            glow: "shadow-[0_0_20px_rgba(52,211,153,0.15)]",
            ring: "#34d399",
            icon: CheckCircle,
         };
      default:
         return {
            label: risk || "Unknown",
            color: "text-gray-400",
            bg: "bg-white/5",
            border: "border-white/10",
            glow: "",
            ring: "#6b7280",
            icon: AlertTriangle,
         };
   }
};

function GlowCard({ children, className = "" }) {
   return (
      <motion.div
         variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0 },
         }}
         className={`rounded-2xl border bg-white/[0.03] backdrop-blur-sm transition-all duration-300 ${className}`}
      >
         {children}
      </motion.div>
   );
}

/* ── Loading state ── */
function LoadingState() {
   return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] min-h-[420px] flex flex-col items-center justify-center gap-5 p-8">
         <div className="relative">
            <div className="w-16 h-16 rounded-full border-2 border-cyan-500/20 flex items-center justify-center">
               <div className="w-10 h-10 rounded-full border-2 border-cyan-500 border-t-transparent animate-spin" />
            </div>
            <motion.div
               className="absolute inset-0 rounded-full"
               animate={{
                  boxShadow: [
                     "0 0 0px rgba(34,211,238,0)",
                     "0 0 30px rgba(34,211,238,0.3)",
                     "0 0 0px rgba(34,211,238,0)",
                  ],
               }}
               transition={{ duration: 2, repeat: Infinity }}
            />
         </div>
         <div className="text-center">
            <motion.p
               animate={{ opacity: [0.5, 1, 0.5] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="text-white font-semibold text-sm mb-1"
            >
               AI Scanning Contract...
            </motion.p>
            <p className="text-gray-600 text-xs">
               Detecting vulnerabilities across 8+ classes
            </p>
         </div>
         {/* Fake progress */}
         <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
               className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
               animate={{ x: ["-100%", "200%"] }}
               transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
               }}
               style={{ width: "50%" }}
            />
         </div>
      </div>
   );
}

/* ── Empty state ── */
function EmptyState() {
   return (
      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] min-h-[420px] flex flex-col items-center justify-center gap-4 p-8">
         <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
            <Shield className="w-7 h-7 text-gray-600" />
         </div>
         <div className="text-center">
            <p className="text-gray-400 font-semibold text-sm mb-1">
               Awaiting Contract
            </p>
            <p className="text-gray-600 text-xs max-w-xs">
               Paste your Solidity code and click Analyze to run an AI-powered
               security audit.
            </p>
         </div>
         <div className="flex flex-wrap justify-center gap-2 mt-2">
            {["Reentrancy", "Access Control", "Overflow", "Gas Opts"].map(
               (tag) => (
                  <span
                     key={tag}
                     className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-600"
                  >
                     {tag}
                  </span>
               ),
            )}
         </div>
      </div>
   );
}

/* ── Risk ring SVG ── */
function RiskRing({ color, confidence }) {
   const r = 36;
   const circ = 2 * Math.PI * r;
   const pct = Math.min(confidence || 0, 100) / 100;
   return (
      <svg width="88" height="88" viewBox="0 0 88 88">
         <circle
            cx="44"
            cy="44"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="8"
         />
         <motion.circle
            cx="44"
            cy="44"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={circ}
            animate={{ strokeDashoffset: circ * (1 - pct) }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            style={{
               filter: `drop-shadow(0 0 6px ${color})`,
               transform: "rotate(-90deg)",
               transformOrigin: "50% 50%",
            }}
         />
      </svg>
   );
}

/* ── Main Results ── */
export default function AnalysisResults({ results, loading }) {
   if (loading) return <LoadingState />;
   if (!results) return <EmptyState />;

   const risk = getRiskConfig(results.risk);
   const RiskIcon = risk.icon;

   return (
      <motion.div
         initial="hidden"
         animate="visible"
         variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
         className="flex flex-col gap-4"
      >
         {/* Panel header */}
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
               <Activity className="w-4 h-4 text-cyan-400" />
               <span className="text-white font-bold text-sm">
                  Analysis Results
               </span>
            </div>
            <span className="text-[10px] text-gray-600 bg-white/5 border border-white/10 px-2 py-1 rounded-full">
               Powered by Gemini AI
            </span>
         </div>

         {/* Risk + Confidence row */}
         <div className="grid grid-cols-2 gap-4">
            {/* Risk */}
            <GlowCard
               className={`${risk.border} ${risk.glow} p-5 flex flex-col items-center justify-center text-center gap-2`}
            >
               <div className="relative">
                  <RiskRing color={risk.ring} confidence={results.confidence} />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <RiskIcon className={`w-5 h-5 ${risk.color}`} />
                  </div>
               </div>
               <div>
                  <p className="text-gray-500 text-xs mb-0.5">Risk Level</p>
                  <p
                     className={`text-xl font-black uppercase tracking-wide ${risk.color}`}
                  >
                     {risk.label}
                  </p>
               </div>
            </GlowCard>

            {/* Confidence */}
            <GlowCard className="border-white/10 p-5 flex flex-col items-center justify-center text-center gap-2">
               <div className="relative">
                  <RiskRing color="#22d3ee" confidence={results.confidence} />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  </div>
               </div>
               <div>
                  <p className="text-gray-500 text-xs mb-0.5">Confidence</p>
                  <p className="text-xl font-black text-white">
                     {results.confidence || 0}%
                  </p>
               </div>
            </GlowCard>
         </div>

         {/* Remaining Credits */}
         <GlowCard className="border-white/10 px-5 py-4">
            <div className="flex items-center justify-between mb-2">
               <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-400 font-medium">
                     Remaining Credits
                  </span>
               </div>
               <span className="text-white font-bold">
                  {results.remainingCredits}
               </span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
               <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                     width: `${Math.min((results.remainingCredits / 100) * 100, 100)}%`,
                  }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
               />
            </div>
            <p className="text-[11px] text-gray-700 mt-1.5">
               {results.remainingCredits} of 100 remaining
            </p>
         </GlowCard>

         {/* Summary */}
         {results.summary && (
            <GlowCard className="border-white/10 p-5">
               <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-semibold text-gray-300">
                     Audit Summary
                  </span>
               </div>
               <p className="text-gray-500 text-sm leading-relaxed">
                  {results.summary}
               </p>
            </GlowCard>
         )}

         {/* Vulnerabilities */}
         {results.issues && results.issues.length > 0 && (
            <GlowCard className="border-red-500/20 bg-red-500/[0.04] p-5">
               <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                     <AlertTriangle className="w-4 h-4 text-red-400" />
                     <span className="text-sm font-bold text-red-400">
                        Vulnerabilities Detected
                     </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-red-500/15 border border-red-500/25 text-red-400 text-xs font-bold">
                     {results.issues.length} found
                  </span>
               </div>
               <div className="space-y-2">
                  {results.issues.map((issue, index) => (
                     <motion.div
                        key={index}
                        variants={{
                           hidden: { opacity: 0, x: -8 },
                           visible: { opacity: 1, x: 0 },
                        }}
                        className="flex items-start gap-3 p-3 rounded-xl bg-red-500/[0.06] border border-red-500/15"
                     >
                        <div className="w-5 h-5 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                           <span className="text-[9px] font-bold text-red-400">
                              {index + 1}
                           </span>
                        </div>
                        <p className="text-sm text-red-300 leading-relaxed">
                           {typeof issue === "string"
                              ? issue
                              : issue.description ||
                                issue.title ||
                                JSON.stringify(issue)}
                        </p>
                     </motion.div>
                  ))}
               </div>
            </GlowCard>
         )}

         {/* Security Strengths */}
         {results.security_strengths &&
            results.security_strengths.length > 0 && (
               <GlowCard className="border-emerald-500/20 bg-emerald-500/[0.04] p-5">
                  <div className="flex items-center justify-between mb-4">
                     <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-bold text-emerald-400">
                           Security Strengths
                        </span>
                     </div>
                     <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-xs font-bold">
                        {results.security_strengths.length}
                     </span>
                  </div>
                  <div className="space-y-2">
                     {results.security_strengths.map((strength, index) => (
                        <motion.div
                           key={index}
                           variants={{
                              hidden: { opacity: 0, x: -8 },
                              visible: { opacity: 1, x: 0 },
                           }}
                           className="flex items-start gap-3 p-3 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/15"
                        >
                           <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                           <p className="text-sm text-emerald-300 leading-relaxed">
                              {typeof strength === "string"
                                 ? strength
                                 : JSON.stringify(strength)}
                           </p>
                        </motion.div>
                     ))}
                  </div>
               </GlowCard>
            )}

         {/* Gas & Design Notes */}
         {results.gas_or_design_notes && (
            <GlowCard className="border-white/10 p-5">
               <div className="flex items-center gap-2 mb-3">
                  <Fuel className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-semibold text-gray-300">
                     Gas & Design Notes
                  </span>
               </div>
               <p className="text-gray-500 text-sm leading-relaxed">
                  {results.gas_or_design_notes}
               </p>
            </GlowCard>
         )}

         {/* Blockchain Record */}
         {(results.hash || results.txHash) && (
            <GlowCard className="border-cyan-500/20 bg-cyan-500/[0.03] p-5 shadow-[0_0_20px_rgba(6,182,212,0.06)]">
               <div className="flex items-center gap-2 mb-4">
                  <FaEthereum className="text-cyan-400 text-base" />
                  <span className="text-sm font-bold text-cyan-400">
                     On-Chain Record
                  </span>
                  <span className="ml-auto px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] text-cyan-400">
                     Sepolia
                  </span>
               </div>

               <div className="space-y-3">
                  {results.hash && (
                     <div className="p-3 rounded-xl bg-black/40 border border-white/[0.07]">
                        <p className="text-[11px] text-gray-600 mb-1.5 flex items-center gap-1">
                           <Hash className="w-3 h-3" /> Report Hash
                        </p>
                        <code className="text-xs text-cyan-300 font-mono break-all leading-relaxed">
                           {results.hash}
                        </code>
                     </div>
                  )}

                  {results.txHash && (
                     <div className="p-3 rounded-xl bg-black/40 border border-white/[0.07]">
                        <p className="text-[11px] text-gray-600 mb-1.5 flex items-center gap-1">
                           <Hash className="w-3 h-3" /> Transaction Hash
                        </p>
                        <div className="flex items-start gap-2">
                           <code className="text-xs text-cyan-300 font-mono break-all flex-1 leading-relaxed">
                              {results.txHash}
                           </code>
                           <a
                              href={`https://etherscan.io/tx/${results.txHash}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-shrink-0 p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-500 hover:text-cyan-400 hover:border-cyan-500/25 transition-all"
                           >
                              <ExternalLink className="w-3.5 h-3.5" />
                           </a>
                        </div>
                     </div>
                  )}

                  <div className="flex items-center gap-2 pt-1">
                     <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                     <span className="text-[11px] text-gray-600">
                        Stored immutably on Ethereum Sepolia
                     </span>
                  </div>
               </div>
            </GlowCard>
         )}
      </motion.div>
   );
}
