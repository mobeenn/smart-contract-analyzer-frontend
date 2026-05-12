// import { useState } from "react";
// import { toast } from "react-toastify";
// import { motion } from "framer-motion";
// import { useAuth } from "../context/AuthContext";
// import { analyzeAPI } from "../services/api";
// import Sidebar from "../components/Sidebar";
// import TopNav from "../components/TopNav";
// import ContractInput from "../components/ContractInput";
// import AnalysisResults from "../components/AnalysisResults";

// export default function Dashboard() {
//    const { updateCredits } = useAuth();
//    const [code, setCode] = useState("");
//    const [loading, setLoading] = useState(false);
//    const [results, setResults] = useState(null);

//    const handleAnalyze = async () => {
//       if (!code.trim()) {
//          toast.error("Please enter smart contract code");
//          return;
//       }
//       setLoading(true);
//       setResults(null);
//       try {
//          const response = await analyzeAPI.analyzeContract(code);
//          const data = response.data;
//          if (data.success) {
//             setResults(data);
//             updateCredits(data.remainingCredits);
//             toast.success("Analysis completed successfully!");
//          } else {
//             toast.error("Analysis failed. Please try again.");
//          }
//       } catch (error) {
//          const data = error.response?.data;

//          const errorMessage =
//             data?.message ||
//             data?.error ||
//             "Analysis failed. Please try again.";

//          toast.error(errorMessage);

//          // optional: credits finish hone pe extra info
//          if (data?.contactEmail) {
//             toast.info(`Contact support: ${data.contactEmail}`);
//          }
//       } finally {
//          setLoading(false);
//       }
//    };

//    return (
//       <div className="min-h-screen bg-[#030712] flex relative overflow-hidden">
//          {/* Global ambient glow */}
//          <div className="pointer-events-none fixed inset-0 z-0">
//             <div className="absolute top-0 left-64 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
//             <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
//             {/* Grid */}
//             <div
//                className="absolute inset-0 opacity-[0.025]"
//                style={{
//                   backgroundImage:
//                      "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
//                   backgroundSize: "50px 50px",
//                }}
//             />
//          </div>

//          <Sidebar />

//          <div className="flex-1 flex flex-col min-w-0 relative z-10">
//             <TopNav />

//             {/* <main className="flex-1 p-6 overflow-auto"> */}
//             <main className="flex-1 p-6 overflow-auto custom-scrollbar">
//                <div className="max-w-6xl mx-auto">
//                   {/* Page Header */}
//                   <motion.div
//                      initial={{ opacity: 0, y: 16 }}
//                      animate={{ opacity: 1, y: 0 }}
//                      transition={{ duration: 0.5 }}
//                      className="mb-8"
//                   >
//                      <div className="flex items-center gap-2 mb-2">
//                         <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
//                         <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">
//                            AI Audit Engine — Active
//                         </span>
//                      </div>
//                      <h1 className="text-3xl font-black text-white tracking-tight">
//                         Contract Analyzer
//                      </h1>
//                      <p className="text-gray-500 mt-1 text-sm">
//                         Paste your Solidity contract. AI scans for 8+
//                         vulnerability classes and stores proof on Ethereum
//                         Sepolia.
//                      </p>
//                   </motion.div>

//                   {/* Main grid */}
//                   <div className="grid lg:grid-cols-2 gap-6">
//                      <motion.div
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.5, delay: 0.1 }}
//                      >
//                         <ContractInput
//                            code={code}
//                            setCode={setCode}
//                            loading={loading}
//                            onAnalyze={handleAnalyze}
//                         />
//                      </motion.div>

//                      <motion.div
//                         initial={{ opacity: 0, x: 20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                      >
//                         <AnalysisResults results={results} loading={loading} />
//                      </motion.div>
//                   </div>
//                </div>
//             </main>
//          </div>
//       </div>
//    );
// }

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { analyzeAPI } from "../services/api";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import ContractInput from "../components/ContractInput";
import AnalysisResults from "../components/AnalysisResults";
import Loader from "../components/Loader";

export default function Dashboard() {
   const { updateCredits } = useAuth();
   const [code, setCode] = useState("");
   const [loading, setLoading] = useState(false);
   const [results, setResults] = useState(null);
   const [pageLoading, setPageLoading] = useState(true);
   useEffect(() => {
      const timer = setTimeout(() => {
         setPageLoading(false);
      }, 1200);

      return () => clearTimeout(timer);
   }, []);

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
         const data = error.response?.data;

         const errorMessage =
            data?.message ||
            data?.error ||
            "Analysis failed. Please try again.";

         toast.error(errorMessage);

         if (data?.contactEmail) {
            toast.info(`Contact support: ${data.contactEmail}`);
         }
      } finally {
         setLoading(false);
      }
   };

   return (
      // <div className="min-h-screen bg-[#030712] flex relative overflow-hidden">
      // <div className="min-h-screen bg-[#030712] flex relative overflow-auto dashboard-scrollbar">
      <div className="min-h-screen h-screen bg-[#030712] flex relative overflow-hidden">
         {/* Global ambient glow */}

         <div className="pointer-events-none fixed inset-0 z-0">
            <div className="absolute top-0 left-64 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />

            {/* Grid */}
            <div
               className="absolute inset-0 opacity-[0.025]"
               style={{
                  backgroundImage:
                     "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
               }}
            />
         </div>

         {/* Sidebar */}
         <Sidebar />

         {/* Main Content */}
         <div className="flex-1 flex flex-col min-w-0 relative z-10">
            <TopNav />

            {/* Main Scroll Area */}
            {pageLoading ? (
               <Loader />
            ) : (
               <main className="flex-1 p-6 overflow-auto dashboard-scrollbar">
                  <div className="max-w-6xl mx-auto">
                     {/* Header */}
                     <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                     >
                        <div className="flex items-center gap-2 mb-2">
                           <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                           <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">
                              AI Audit Engine — Active
                           </span>
                        </div>

                        <h1 className="text-3xl font-black text-white tracking-tight">
                           Contract Analyzer
                        </h1>

                        <p className="text-gray-500 mt-1 text-sm">
                           Paste your Solidity contract. AI scans for 8+
                           vulnerability classes and stores proof on Ethereum
                           Sepolia.
                        </p>
                     </motion.div>

                     {/* Main Grid */}
                     <div className="grid lg:grid-cols-2 gap-6">
                        {/* Contract Input */}
                        <motion.div
                           initial={{ opacity: 0, x: -20 }}
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

                        {/* Results */}
                        <motion.div
                           initial={{ opacity: 0, x: 20 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ duration: 0.5, delay: 0.2 }}
                        >
                           <AnalysisResults
                              results={results}
                              loading={loading}
                           />
                        </motion.div>
                     </div>
                  </div>
               </main>
            )}
         </div>

         {/* Custom Scrollbar Styling */}
         <style>{`
            .dashboard-scrollbar::-webkit-scrollbar {
               width: 4px;
               height: 4px;
            }

            .dashboard-scrollbar::-webkit-scrollbar-track {
               background: #050e1a;
            }

            .dashboard-scrollbar::-webkit-scrollbar-thumb {
               background: #00d4ff22;
               border-radius: 2px;
            }

            .dashboard-scrollbar::-webkit-scrollbar-thumb:hover {
               background: #00d4ff44;
            }

            /* Firefox Support */
            .dashboard-scrollbar {
               scrollbar-width: thin;
               scrollbar-color: #00d4ff22 #050e1a;
            }
         `}</style>
      </div>
   );
}
