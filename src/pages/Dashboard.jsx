import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { analyzeAPI } from "../services/api";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import ContractInput from "../components/ContractInput";
import AnalysisResults from "../components/AnalysisResults";

function Dashboard() {
   const { updateCredits } = useAuth();
   const [code, setCode] = useState("");
   const [loading, setLoading] = useState(false);
   const [results, setResults] = useState(null);

   const handleAnalyze = async () => {
      if (!code.trim()) {
         toast.error("Please enter smart contract code");
         return;
      }
      setLoading(true);
      setResults(null);
      try {
         const response = await analyzeAPI.analyzeContract(code);
         const data = response.data;
         if (data.success) {
            setResults(data);
            updateCredits(data.remainingCredits);
            toast.success("Analysis completed successfully!");
         } else {
            toast.error("Analysis failed. Please try again.");
         }
      } catch (error) {
         const errorMessage =
            error.response?.data?.message ||
            "Analysis failed. Please try again.";
         toast.error(errorMessage);
      } finally {
         setLoading(false);
      }
   };

   return (
      <div
         className="min-h-screen flex"
         style={{
            background:
               "linear-gradient(135deg, #020408 0%, #030d1a 50%, #020810 100%)",
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
         }}
      >
         {/* Ambient background effects */}
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

         {/* Grid overlay */}
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
            className="flex-1 flex flex-col min-w-0"
            style={{ position: "relative", zIndex: 1 }}
         >
            <TopNav />

            <main style={{ flex: 1, padding: "1.5rem", overflowY: "auto" }}>
               <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                  {/* Header */}
                  <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5 }}
                     style={{ marginBottom: "1.5rem" }}
                  >
                     <div
                        style={{
                           display: "flex",
                           alignItems: "center",
                           gap: "0.75rem",
                           marginBottom: "0.5rem",
                        }}
                     >
                        <div
                           style={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              background: "#00d4ff",
                              boxShadow: "0 0 8px #00d4ff, 0 0 16px #00d4ff",
                              animation: "pulse 2s infinite",
                           }}
                        />
                        <span
                           style={{
                              color: "#00d4ff",
                              fontSize: "0.7rem",
                              letterSpacing: "0.2em",
                              textTransform: "uppercase",
                              fontWeight: 600,
                           }}
                        >
                           AuditAI // Security Terminal
                        </span>
                     </div>
                     <h1
                        style={{
                           fontSize: "1.75rem",
                           fontWeight: 700,
                           color: "#ffffff",
                           letterSpacing: "-0.02em",
                           lineHeight: 1.2,
                        }}
                     >
                        Contract{" "}
                        <span
                           style={{
                              background:
                                 "linear-gradient(90deg, #00d4ff, #0066ff)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                           }}
                        >
                           Analyzer
                        </span>
                     </h1>
                     <p
                        style={{
                           color: "#4a6b7c",
                           fontSize: "0.85rem",
                           marginTop: "0.25rem",
                           letterSpacing: "0.02em",
                        }}
                     >
                        AI-powered security audit · Blockchain-verified results
                        · Ethereum Sepolia
                     </p>
                  </motion.div>

                  {/* Main Grid */}
                  <div
                     style={{
                        display: "grid",
                        gridTemplateColumns:
                           "repeat(auto-fit, minmax(480px, 1fr))",
                        gap: "1.25rem",
                     }}
                  >
                     <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                     >
                        <ContractInput
                           code={code}
                           setCode={setCode}
                           loading={loading}
                           onAnalyze={handleAnalyze}
                        />
                     </motion.div>

                     <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                     >
                        <AnalysisResults results={results} loading={loading} />
                     </motion.div>
                  </div>
               </div>
            </main>
         </div>

         <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #050e1a; }
        ::-webkit-scrollbar-thumb { background: #00d4ff22; border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: #00d4ff44; }
      `}</style>
      </div>
   );
}

export default Dashboard;
