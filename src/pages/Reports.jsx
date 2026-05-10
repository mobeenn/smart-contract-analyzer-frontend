// import { useState, useEffect } from 'react'
// import { toast } from 'react-toastify'
// import {
//   FileText,
//   Loader2,
//   AlertTriangle,
//   CheckCircle,
//   AlertCircle,
//   ExternalLink,
//   RefreshCw,
//   Calendar,
//   Hash
// } from 'lucide-react'
// import { reportsAPI } from '../services/api'
// import Sidebar from '../components/Sidebar'
// import TopNav from '../components/TopNav'

// function Reports() {
//   const [reports, setReports] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [total, setTotal] = useState(0)

//   const fetchReports = async () => {
//     setLoading(true)
//     try {
//       const response = await reportsAPI.getReports()
//       if (response.data.success) {
//         setReports(response.data.reports || [])
//         setTotal(response.data.total || 0)
//       }
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || 'Failed to fetch reports'
//       toast.error(errorMessage)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     fetchReports()
//   }, [])

//   const getRiskBadge = (risk) => {
//     switch (risk?.toLowerCase()) {
//       case 'high':
//         return (
//           <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-50 text-red-600">
//             <AlertTriangle className="w-3 h-3" />
//             High
//           </span>
//         )
//       case 'medium':
//         return (
//           <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-600">
//             <AlertCircle className="w-3 h-3" />
//             Medium
//           </span>
//         )
//       case 'low':
//         return (
//           <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600">
//             <CheckCircle className="w-3 h-3" />
//             Low
//           </span>
//         )
//       default:
//         return (
//           <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600">
//             Unknown
//           </span>
//         )
//     }
//   }

//   const formatDate = (dateString) => {
//     if (!dateString) return 'N/A'
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     })
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       <Sidebar />

//       <div className="flex-1 flex flex-col min-w-0">
//         <TopNav />

//         <main className="flex-1 p-6 overflow-auto">
//           <div className="max-w-6xl mx-auto">
//             <div className="flex items-center justify-between mb-6">
//               <div>
//                 <h1 className="text-2xl font-semibold text-gray-900">Audit Reports</h1>
//                 <p className="text-gray-600 mt-1">
//                   View your previous smart contract audit reports stored on the blockchain.
//                 </p>
//               </div>
//               <button
//                 onClick={fetchReports}
//                 disabled={loading}
//                 className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors"
//               >
//                 <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
//                 Refresh
//               </button>
//             </div>

//             {loading ? (
//               <div className="bg-white rounded-xl border border-gray-200 p-12 flex flex-col items-center justify-center">
//                 <Loader2 className="w-8 h-8 text-gray-400 animate-spin mb-4" />
//                 <p className="text-gray-600">Loading reports...</p>
//               </div>
//             ) : reports.length === 0 ? (
//               <div className="bg-white rounded-xl border border-gray-200 p-12 flex flex-col items-center justify-center">
//                 <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
//                   <FileText className="w-8 h-8 text-gray-400" />
//                 </div>
//                 <p className="text-gray-600 font-medium">No reports yet</p>
//                 <p className="text-gray-500 text-sm mt-1">
//                   Run your first audit to see reports here
//                 </p>
//               </div>
//             ) : (
//               <>
//                 <div className="mb-4">
//                   <p className="text-sm text-gray-600">
//                     Total reports: <span className="font-medium text-gray-900">{total}</span>
//                   </p>
//                 </div>

//                 <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
//                   {/* Desktop Table */}
//                   <div className="hidden md:block overflow-x-auto">
//                     <table className="w-full">
//                       <thead>
//                         <tr className="border-b border-gray-200 bg-gray-50">
//                           <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Date
//                           </th>
//                           <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Risk
//                           </th>
//                           <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Confidence
//                           </th>
//                           <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Issues
//                           </th>
//                           <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Report Hash
//                           </th>
//                           <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Tx Hash
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody className="divide-y divide-gray-200">
//                         {reports.map((report, index) => (
//                           <tr key={report.id || index} className="hover:bg-gray-50">
//                             <td className="px-4 py-4 text-sm text-gray-600">
//                               <div className="flex items-center gap-2">
//                                 <Calendar className="w-4 h-4 text-gray-400" />
//                                 {formatDate(report.createdAt || report.date)}
//                               </div>
//                             </td>
//                             <td className="px-4 py-4">
//                               {getRiskBadge(report.risk)}
//                             </td>
//                             <td className="px-4 py-4 text-sm text-gray-900 font-medium">
//                               {report.confidence || 0}%
//                             </td>
//                             <td className="px-4 py-4 text-sm text-gray-600">
//                               {report.issues?.length || 0}
//                             </td>
//                             <td className="px-4 py-4">
//                               {report.hash ? (
//                                 <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
//                                   {report.hash.slice(0, 10)}...{report.hash.slice(-6)}
//                                 </code>
//                               ) : (
//                                 <span className="text-gray-400 text-sm">-</span>
//                               )}
//                             </td>
//                             <td className="px-4 py-4">
//                               {report.txHash ? (
//                                 <a
//                                   href={`https://etherscan.io/tx/${report.txHash}`}
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                   className="inline-flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900"
//                                 >
//                                   <code className="bg-gray-100 px-2 py-1 rounded">
//                                     {report.txHash.slice(0, 10)}...
//                                   </code>
//                                   <ExternalLink className="w-3 h-3" />
//                                 </a>
//                               ) : (
//                                 <span className="text-gray-400 text-sm">-</span>
//                               )}
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>

//                   {/* Mobile Cards */}
//                   <div className="md:hidden divide-y divide-gray-200">
//                     {reports.map((report, index) => (
//                       <div key={report.id || index} className="p-4 space-y-3">
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center gap-2 text-sm text-gray-600">
//                             <Calendar className="w-4 h-4 text-gray-400" />
//                             {formatDate(report.createdAt || report.date)}
//                           </div>
//                           {getRiskBadge(report.risk)}
//                         </div>

//                         <div className="grid grid-cols-2 gap-3 text-sm">
//                           <div>
//                             <p className="text-gray-500 text-xs">Confidence</p>
//                             <p className="font-medium text-gray-900">{report.confidence || 0}%</p>
//                           </div>
//                           <div>
//                             <p className="text-gray-500 text-xs">Issues</p>
//                             <p className="font-medium text-gray-900">{report.issues?.length || 0}</p>
//                           </div>
//                         </div>

//                         {report.hash && (
//                           <div>
//                             <p className="text-gray-500 text-xs mb-1 flex items-center gap-1">
//                               <Hash className="w-3 h-3" /> Report Hash
//                             </p>
//                             <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 block truncate">
//                               {report.hash}
//                             </code>
//                           </div>
//                         )}

//                         {report.txHash && (
//                           <div>
//                             <p className="text-gray-500 text-xs mb-1">Transaction</p>
//                             <a
//                               href={`https://etherscan.io/tx/${report.txHash}`}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="inline-flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900"
//                             >
//                               <code className="bg-gray-100 px-2 py-1 rounded truncate max-w-[200px]">
//                                 {report.txHash}
//                               </code>
//                               <ExternalLink className="w-3 h-3 flex-shrink-0" />
//                             </a>
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

// export default Reports

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import {
   Loader2,
   ExternalLink,
   RefreshCw,
   Calendar,
   Hash,
   Shield,
   Activity,
   Database,
   XCircle,
   AlertCircle,
   CheckCircle,
} from "lucide-react";
import { reportsAPI } from "../services/api";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";

function Reports() {
   const [reports, setReports] = useState([]);
   const [loading, setLoading] = useState(true);
   const [total, setTotal] = useState(0);

   const fetchReports = async () => {
      setLoading(true);
      try {
         const response = await reportsAPI.getReports();
         if (response.data.success) {
            setReports(response.data.reports || []);
            setTotal(response.data.total || 0);
         }
      } catch (error) {
         const errorMessage =
            error.response?.data?.message || "Failed to fetch reports";
         toast.error(errorMessage);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchReports();
   }, []);

   const getRiskConfig = (risk) => {
      switch (risk?.toLowerCase()) {
         case "high":
            return {
               color: "#ff4444",
               bg: "rgba(255,68,68,0.08)",
               border: "rgba(255,68,68,0.2)",
               icon: XCircle,
               label: "HIGH",
            };
         case "medium":
            return {
               color: "#ffaa00",
               bg: "rgba(255,170,0,0.08)",
               border: "rgba(255,170,0,0.2)",
               icon: AlertCircle,
               label: "MED",
            };
         case "low":
            return {
               color: "#00ff88",
               bg: "rgba(0,255,136,0.08)",
               border: "rgba(0,255,136,0.2)",
               icon: CheckCircle,
               label: "LOW",
            };
         default:
            return {
               color: "#4a6b7c",
               bg: "rgba(74,107,124,0.08)",
               border: "rgba(74,107,124,0.2)",
               icon: AlertTriangle,
               label: "???",
            };
      }
   };

   const formatDate = (dateString) => {
      if (!dateString) return "N/A";
      return new Date(dateString).toLocaleDateString("en-US", {
         year: "numeric",
         month: "short",
         day: "numeric",
         hour: "2-digit",
         minute: "2-digit",
      });
   };

   const truncateHash = (hash, start = 8, end = 6) =>
      hash ? `${hash.slice(0, start)}...${hash.slice(-end)}` : null;

   // Stats derived from reports
   const highCount = reports.filter(
      (r) => r.risk?.toLowerCase() === "high",
   ).length;
   const medCount = reports.filter(
      (r) => r.risk?.toLowerCase() === "medium",
   ).length;
   const lowCount = reports.filter(
      (r) => r.risk?.toLowerCase() === "low",
   ).length;
   const avgConf = reports.length
      ? Math.round(
           reports.reduce((a, r) => a + (r.confidence || 0), 0) /
              reports.length,
        )
      : 0;

   return (
      <div
         style={{
            minHeight: "100vh",
            display: "flex",
            background:
               "linear-gradient(135deg, #020408 0%, #030d1a 50%, #020810 100%)",
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
         }}
      >
         {/* Ambient glows */}
         <div
            style={{
               position: "fixed",
               inset: 0,
               pointerEvents: "none",
               zIndex: 0,
               background: `
          radial-gradient(ellipse 80% 50% at 20% 20%, rgba(0,212,255,0.04) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 80% 80%, rgba(0,100,255,0.03) 0%, transparent 60%)
        `,
            }}
         />
         <div
            style={{
               position: "fixed",
               inset: 0,
               pointerEvents: "none",
               zIndex: 0,
               backgroundImage: `
          linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
        `,
               backgroundSize: "40px 40px",
            }}
         />

         <Sidebar />

         <div
            style={{
               flex: 1,
               display: "flex",
               flexDirection: "column",
               minWidth: 0,
               position: "relative",
               zIndex: 1,
            }}
         >
            <TopNav />

            <main style={{ flex: 1, padding: "1.5rem", overflowY: "auto" }}>
               <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                  {/* ── Page Header ── */}
                  <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.45 }}
                     style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        marginBottom: "1.5rem",
                        flexWrap: "wrap",
                        gap: "1rem",
                     }}
                  >
                     <div>
                        <div
                           style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.625rem",
                              marginBottom: "0.375rem",
                           }}
                        >
                           <div
                              style={{
                                 width: "8px",
                                 height: "8px",
                                 borderRadius: "50%",
                                 background: "#00d4ff",
                                 boxShadow: "0 0 8px #00d4ff, 0 0 16px #00d4ff",
                                 animation: "blink 2s infinite",
                              }}
                           />
                           <span
                              style={{
                                 color: "#00d4ff",
                                 fontSize: "0.65rem",
                                 letterSpacing: "0.2em",
                                 textTransform: "uppercase",
                                 fontWeight: 600,
                              }}
                           >
                              AuditAI // Audit History
                           </span>
                        </div>
                        <h1
                           style={{
                              fontSize: "1.6rem",
                              fontWeight: 700,
                              color: "#ffffff",
                              letterSpacing: "-0.02em",
                              lineHeight: 1.2,
                              margin: 0,
                           }}
                        >
                           Audit{" "}
                           <span
                              style={{
                                 background:
                                    "linear-gradient(90deg, #00d4ff, #0066ff)",
                                 WebkitBackgroundClip: "text",
                                 WebkitTextFillColor: "transparent",
                              }}
                           >
                              Reports
                           </span>
                        </h1>
                        <p
                           style={{
                              color: "#1e4a5a",
                              fontSize: "0.78rem",
                              marginTop: "0.25rem",
                              letterSpacing: "0.02em",
                           }}
                        >
                           Blockchain-verified audit history · Ethereum Sepolia
                        </p>
                     </div>

                     {/* Refresh Button */}
                     <motion.button
                        onClick={fetchReports}
                        disabled={loading}
                        whileHover={!loading ? { scale: 1.02 } : {}}
                        whileTap={!loading ? { scale: 0.98 } : {}}
                        style={{
                           display: "flex",
                           alignItems: "center",
                           gap: "0.5rem",
                           padding: "0.5rem 0.875rem",
                           borderRadius: "8px",
                           fontSize: "0.75rem",
                           fontWeight: 600,
                           letterSpacing: "0.05em",
                           cursor: loading ? "not-allowed" : "pointer",
                           background: "rgba(0,212,255,0.06)",
                           border: "1px solid rgba(0,212,255,0.2)",
                           color: loading ? "#1e4a5a" : "#00d4ff",
                           fontFamily: "'JetBrains Mono', monospace",
                           transition: "all 0.2s",
                           boxShadow: loading
                              ? "none"
                              : "0 0 12px rgba(0,212,255,0.08)",
                        }}
                     >
                        <RefreshCw
                           style={{
                              width: "13px",
                              height: "13px",
                              animation: loading
                                 ? "spin 1s linear infinite"
                                 : "none",
                           }}
                        />
                        Refresh
                     </motion.button>
                  </motion.div>

                  {/* ── Stats Row ── */}
                  {!loading && reports.length > 0 && (
                     <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{
                           display: "grid",
                           gridTemplateColumns:
                              "repeat(auto-fit, minmax(130px, 1fr))",
                           gap: "0.75rem",
                           marginBottom: "1.25rem",
                        }}
                     >
                        {[
                           {
                              label: "TOTAL AUDITS",
                              value: total,
                              color: "#00d4ff",
                              icon: Database,
                           },
                           {
                              label: "HIGH RISK",
                              value: highCount,
                              color: "#ff4444",
                              icon: XCircle,
                           },
                           {
                              label: "MEDIUM RISK",
                              value: medCount,
                              color: "#ffaa00",
                              icon: AlertCircle,
                           },
                           {
                              label: "LOW RISK",
                              value: lowCount,
                              color: "#00ff88",
                              icon: CheckCircle,
                           },
                           {
                              label: "AVG CONFIDENCE",
                              value: `${avgConf}%`,
                              color: "#7a6fff",
                              icon: Activity,
                           },
                        ].map((stat, i) => (
                           <motion.div
                              key={stat.label}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 + i * 0.05 }}
                              style={{
                                 padding: "0.75rem 0.875rem",
                                 borderRadius: "10px",
                                 background: "rgba(3,12,24,0.8)",
                                 border: `1px solid ${stat.color}22`,
                                 backdropFilter: "blur(20px)",
                              }}
                           >
                              <div
                                 style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.375rem",
                                    marginBottom: "0.375rem",
                                 }}
                              >
                                 <stat.icon
                                    style={{
                                       width: "11px",
                                       height: "11px",
                                       color: stat.color,
                                    }}
                                 />
                                 <span
                                    style={{
                                       fontSize: "0.55rem",
                                       color: stat.color,
                                       letterSpacing: "0.15em",
                                       opacity: 0.7,
                                    }}
                                 >
                                    {stat.label}
                                 </span>
                              </div>
                              <p
                                 style={{
                                    fontSize: "1.3rem",
                                    fontWeight: 700,
                                    color: stat.color,
                                    margin: 0,
                                    textShadow: `0 0 20px ${stat.color}40`,
                                 }}
                              >
                                 {stat.value}
                              </p>
                           </motion.div>
                        ))}
                     </motion.div>
                  )}

                  {/* ── Loading ── */}
                  {loading ? (
                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                           borderRadius: "12px",
                           border: "1px solid rgba(0,212,255,0.1)",
                           background: "rgba(3,12,24,0.8)",
                           backdropFilter: "blur(20px)",
                           padding: "5rem 2rem",
                           display: "flex",
                           flexDirection: "column",
                           alignItems: "center",
                           gap: "1rem",
                           position: "relative",
                           overflow: "hidden",
                        }}
                     >
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
                        <div style={{ textAlign: "center", zIndex: 1 }}>
                           <p
                              style={{
                                 color: "#7ab8cc",
                                 fontWeight: 600,
                                 fontSize: "0.82rem",
                                 margin: 0,
                              }}
                           >
                              Fetching audit records...
                           </p>
                           <p
                              style={{
                                 color: "#0d2535",
                                 fontSize: "0.7rem",
                                 margin: "0.25rem 0 0",
                              }}
                           >
                              Querying blockchain data
                           </p>
                        </div>
                     </motion.div>
                  ) : /* ── Empty ── */
                  reports.length === 0 ? (
                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                           borderRadius: "12px",
                           border: "1px solid rgba(0,212,255,0.08)",
                           background: "rgba(3,12,24,0.8)",
                           backdropFilter: "blur(20px)",
                           padding: "5rem 2rem",
                           display: "flex",
                           flexDirection: "column",
                           alignItems: "center",
                           gap: "0.75rem",
                        }}
                     >
                        <div
                           style={{
                              width: "60px",
                              height: "60px",
                              borderRadius: "12px",
                              background: "rgba(0,212,255,0.04)",
                              border: "1px solid rgba(0,212,255,0.08)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                           }}
                        >
                           <Shield
                              style={{
                                 width: "26px",
                                 height: "26px",
                                 color: "#0d2535",
                              }}
                           />
                        </div>
                        <div style={{ textAlign: "center" }}>
                           <p
                              style={{
                                 color: "#1e4a5a",
                                 fontWeight: 600,
                                 fontSize: "0.82rem",
                                 margin: 0,
                              }}
                           >
                              No audit records found
                           </p>
                           <p
                              style={{
                                 color: "#0d2535",
                                 fontSize: "0.7rem",
                                 margin: "0.25rem 0 0",
                              }}
                           >
                              Run your first audit on the Dashboard
                           </p>
                        </div>
                     </motion.div>
                  ) : (
                     /* ── Table ── */
                     <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                     >
                        {/* ── Desktop Table ── */}
                        <div
                           style={{
                              borderRadius: "12px",
                              border: "1px solid rgba(0,212,255,0.1)",
                              background: "rgba(3,12,24,0.8)",
                              backdropFilter: "blur(20px)",
                              overflow: "hidden",
                           }}
                           className="reports-desktop"
                        >
                           {/* Table header */}
                           <div
                              style={{
                                 display: "grid",
                                 gridTemplateColumns: "220px 1fr 1fr",
                                 padding: "0.625rem 1rem",
                                 borderBottom: "1px solid rgba(0,212,255,0.08)",
                                 background: "rgba(0,212,255,0.02)",
                              }}
                           >
                              {["DATE", "REPORT HASH", "TX HASH"].map((col) => (
                                 <div
                                    key={col}
                                    style={{
                                       fontSize: "0.58rem",
                                       fontWeight: 600,
                                       color: "#0d2535",
                                       letterSpacing: "0.15em",
                                    }}
                                 >
                                    {col}
                                 </div>
                              ))}
                           </div>

                           {/* Table rows */}
                           <div style={{ overflowX: "auto" }}>
                              {reports.map((report, index) => {
                                 return (
                                    <motion.div
                                       key={report.id || index}
                                       initial={{ opacity: 0, x: -8 }}
                                       animate={{ opacity: 1, x: 0 }}
                                       transition={{ delay: 0.05 * index }}
                                       style={{
                                          display: "grid",
                                          gridTemplateColumns: "220px 1fr 1fr",
                                          padding: "0.875rem 1rem",
                                          borderBottom:
                                             index < reports.length - 1
                                                ? "1px solid rgba(0,212,255,0.05)"
                                                : "none",
                                          alignItems: "center",
                                          transition: "background 0.2s",
                                          cursor: "default",
                                       }}
                                       onMouseEnter={(e) =>
                                          (e.currentTarget.style.background =
                                             "rgba(0,212,255,0.02)")
                                       }
                                       onMouseLeave={(e) =>
                                          (e.currentTarget.style.background =
                                             "transparent")
                                       }
                                    >
                                       {/* Date */}
                                       <div
                                          style={{
                                             display: "flex",
                                             alignItems: "center",
                                             gap: "0.5rem",
                                          }}
                                       >
                                          <Calendar
                                             style={{
                                                width: "12px",
                                                height: "12px",
                                                color: "#1e4a5a",
                                                flexShrink: 0,
                                             }}
                                          />
                                          <span
                                             style={{
                                                fontSize: "0.7rem",
                                                color: "#3d6070",
                                             }}
                                          >
                                             {formatDate(
                                                report.createdAt || report.date,
                                             )}
                                          </span>
                                       </div>

                                       {/* Report Hash */}
                                       <div>
                                          {report.hash ? (
                                             <code
                                                style={{
                                                   fontSize: "0.62rem",
                                                   padding: "3px 7px",
                                                   borderRadius: "5px",
                                                   background:
                                                      "rgba(0,0,0,0.3)",
                                                   border:
                                                      "1px solid rgba(0,212,255,0.08)",
                                                   color: "#1e4a5a",
                                                }}
                                             >
                                                {truncateHash(report.hash)}
                                             </code>
                                          ) : (
                                             <span
                                                style={{
                                                   color: "#0d2535",
                                                   fontSize: "0.7rem",
                                                }}
                                             >
                                                —
                                             </span>
                                          )}
                                       </div>

                                       {/* TX Hash */}
                                       <div>
                                          {report.txHash ? (
                                             <a
                                                href={`https://etherscan.io/tx/${report.txHash}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                   display: "inline-flex",
                                                   alignItems: "center",
                                                   gap: "0.375rem",
                                                   textDecoration: "none",
                                                }}
                                             >
                                                <code
                                                   style={{
                                                      fontSize: "0.62rem",
                                                      padding: "3px 7px",
                                                      borderRadius: "5px",
                                                      background:
                                                         "rgba(0,212,255,0.04)",
                                                      border:
                                                         "1px solid rgba(0,212,255,0.12)",
                                                      color: "#00d4ff",
                                                      transition: "all 0.2s",
                                                   }}
                                                   onMouseEnter={(e) =>
                                                      (e.currentTarget.style.borderColor =
                                                         "rgba(0,212,255,0.3)")
                                                   }
                                                   onMouseLeave={(e) =>
                                                      (e.currentTarget.style.borderColor =
                                                         "rgba(0,212,255,0.12)")
                                                   }
                                                >
                                                   {truncateHash(
                                                      report.txHash,
                                                      10,
                                                      4,
                                                   )}
                                                </code>
                                                <ExternalLink
                                                   style={{
                                                      width: "11px",
                                                      height: "11px",
                                                      color: "#1e4a5a",
                                                   }}
                                                />
                                             </a>
                                          ) : (
                                             <span
                                                style={{
                                                   color: "#0d2535",
                                                   fontSize: "0.7rem",
                                                }}
                                             >
                                                —
                                             </span>
                                          )}
                                       </div>
                                    </motion.div>
                                 );
                              })}
                           </div>

                           {/* Table footer */}
                           <div
                              style={{
                                 display: "flex",
                                 alignItems: "center",
                                 justifyContent: "space-between",
                                 padding: "0.5rem 1rem",
                                 borderTop: "1px solid rgba(0,212,255,0.06)",
                                 background: "rgba(0,0,0,0.2)",
                              }}
                           >
                              <span
                                 style={{
                                    fontSize: "0.6rem",
                                    color: "#0d2535",
                                    letterSpacing: "0.1em",
                                 }}
                              >
                                 ETHEREUM SEPOLIA · BLOCKCHAIN VERIFIED
                              </span>
                              <span
                                 style={{
                                    fontSize: "0.62rem",
                                    color: "#1e4a5a",
                                 }}
                              >
                                 {total} record{total !== 1 ? "s" : ""}
                              </span>
                           </div>
                        </div>

                        {/* ── Mobile Cards ── */}
                        <div
                           className="reports-mobile"
                           style={{
                              display: "none",
                              flexDirection: "column",
                              gap: "0.625rem",
                           }}
                        >
                           {reports.map((report, index) => {
                              return (
                                 <motion.div
                                    key={report.id || index}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 * index }}
                                    style={{
                                       borderRadius: "10px",
                                       padding: "0.875rem",
                                       border: "1px solid rgba(0,212,255,0.08)",
                                       background: "rgba(3,12,24,0.8)",
                                       backdropFilter: "blur(20px)",
                                    }}
                                 >
                                    {/* Date */}
                                    <div
                                       style={{
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "0.4rem",
                                          marginBottom: "0.75rem",
                                       }}
                                    >
                                       <Calendar
                                          style={{
                                             width: "11px",
                                             height: "11px",
                                             color: "#1e4a5a",
                                          }}
                                       />
                                       <span
                                          style={{
                                             fontSize: "0.68rem",
                                             color: "#2a4a5a",
                                          }}
                                       >
                                          {formatDate(
                                             report.createdAt || report.date,
                                          )}
                                       </span>
                                    </div>

                                    {/* Report Hash */}
                                    {report.hash && (
                                       <div style={{ marginBottom: "0.5rem" }}>
                                          <p
                                             style={{
                                                fontSize: "0.55rem",
                                                color: "#0d2535",
                                                letterSpacing: "0.12em",
                                                margin: "0 0 0.25rem",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.25rem",
                                             }}
                                          >
                                             <Hash
                                                style={{
                                                   width: "9px",
                                                   height: "9px",
                                                }}
                                             />{" "}
                                             REPORT HASH
                                          </p>
                                          <code
                                             style={{
                                                display: "block",
                                                fontSize: "0.62rem",
                                                padding: "4px 8px",
                                                borderRadius: "5px",
                                                background: "rgba(0,0,0,0.3)",
                                                border:
                                                   "1px solid rgba(0,212,255,0.07)",
                                                color: "#1e4a5a",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                whiteSpace: "nowrap",
                                             }}
                                          >
                                             {report.hash}
                                          </code>
                                       </div>
                                    )}

                                    {/* TX Hash */}
                                    {report.txHash && (
                                       <div>
                                          <p
                                             style={{
                                                fontSize: "0.55rem",
                                                color: "#0d2535",
                                                letterSpacing: "0.12em",
                                                margin: "0 0 0.25rem",
                                             }}
                                          >
                                             TX HASH
                                          </p>
                                          <a
                                             href={`https://etherscan.io/tx/${report.txHash}`}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "0.375rem",
                                                textDecoration: "none",
                                             }}
                                          >
                                             <code
                                                style={{
                                                   fontSize: "0.62rem",
                                                   padding: "4px 8px",
                                                   borderRadius: "5px",
                                                   background:
                                                      "rgba(0,212,255,0.04)",
                                                   border:
                                                      "1px solid rgba(0,212,255,0.12)",
                                                   color: "#00d4ff",
                                                   maxWidth: "220px",
                                                   overflow: "hidden",
                                                   textOverflow: "ellipsis",
                                                   whiteSpace: "nowrap",
                                                }}
                                             >
                                                {report.txHash}
                                             </code>
                                             <ExternalLink
                                                style={{
                                                   width: "11px",
                                                   height: "11px",
                                                   color: "#1e4a5a",
                                                   flexShrink: 0,
                                                }}
                                             />
                                          </a>
                                       </div>
                                    )}
                                 </motion.div>
                              );
                           })}
                        </div>
                     </motion.div>
                  )}
               </div>
            </main>
         </div>

         <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');
        @keyframes spin  { to { transform: rotate(360deg); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: #050e1a; }
        ::-webkit-scrollbar-thumb { background: #00d4ff22; border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: #00d4ff44; }
        .reports-desktop { display: block; }
        .reports-mobile  { display: none !important; }
        @media (max-width: 768px) {
          .reports-desktop { display: none !important; }
          .reports-mobile  { display: flex !important; }
        }
      `}</style>
      </div>
   );
}

export default Reports;
