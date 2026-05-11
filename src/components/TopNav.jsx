// import { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { Shield, Menu, X, LayoutDashboard, FileText, LogOut, Coins } from 'lucide-react'
// import { useAuth } from '../context/AuthContext'

// function TopNav() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const location = useLocation()
//   const { logout, user } = useAuth()

//   const navigation = [
//     { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
//     { name: 'Reports', href: '/reports', icon: FileText },
//   ]

//   const handleLogout = () => {
//     logout()
//     window.location.href = '/'
//   }

//   return (
//     <header className="bg-white border-b border-gray-200">
//       <div className="flex items-center justify-between h-16 px-4 sm:px-6">
//         {/* Mobile menu button */}
//         <button
//           type="button"
//           className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-gray-900"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           {mobileMenuOpen ? (
//             <X className="w-6 h-6" />
//           ) : (
//             <Menu className="w-6 h-6" />
//           )}
//         </button>

//         {/* Mobile logo */}
//         <Link to="/dashboard" className="lg:hidden flex items-center gap-2">
//           <Shield className="w-6 h-6 text-gray-900" />
//           <span className="font-semibold text-gray-900">AuditAI</span>
//         </Link>

//         {/* Credits display */}
//         <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg">
//           <Coins className="w-4 h-4 text-gray-600" />
//           <span className="text-sm font-medium text-gray-900">
//             {user?.credits ?? 0} credits
//           </span>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden border-t border-gray-200 bg-white">
//           <nav className="p-4 space-y-1">
//             {navigation.map((item) => {
//               const isActive = location.pathname === item.href
//               return (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
//                     isActive
//                       ? 'bg-gray-100 text-gray-900'
//                       : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
//                   }`}
//                 >
//                   <item.icon className="w-5 h-5" />
//                   {item.name}
//                 </Link>
//               )
//             })}
//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
//             >
//               <LogOut className="w-5 h-5" />
//               Logout
//             </button>
//           </nav>
//         </div>
//       )}
//     </header>
//   )
// }

// export default TopNav

// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//    Shield,
//    Menu,
//    X,
//    LayoutDashboard,
//    FileText,
//    LogOut,
//    Zap,
// } from "lucide-react";
// import { useAuth } from "../context/AuthContext";
// import { motion, AnimatePresence } from "framer-motion";

// function TopNav() {
//    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//    const location = useLocation();
//    const { logout, user } = useAuth();

//    const navigation = [
//       { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
//       { name: "Reports", href: "/reports", icon: FileText },
//    ];

//    const handleLogout = () => {
//       logout();
//       window.location.href = "/";
//    };

//    return (
//       <header
//          style={{
//             position: "sticky",
//             top: 0,
//             zIndex: 50,
//             borderBottom: "1px solid rgba(0,212,255,0.08)",
//             background: "rgba(2,8,18,0.9)",
//             backdropFilter: "blur(20px)",
//             WebkitBackdropFilter: "blur(20px)",
//             fontFamily: "'JetBrains Mono', monospace",
//          }}
//       >
//          <div
//             style={{
//                display: "flex",
//                alignItems: "center",
//                justifyContent: "space-between",
//                height: "64px",
//                padding: "0 1.25rem",
//             }}
//          >
//             {/* Mobile menu button */}
//             <button
//                type="button"
//                className="lg-hidden"
//                style={{
//                   display: "flex",
//                   padding: "0.375rem",
//                   marginLeft: "-0.375rem",
//                   color: "#3d6070",
//                   background: "transparent",
//                   border: "none",
//                   cursor: "pointer",
//                   borderRadius: "6px",
//                }}
//                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//                {mobileMenuOpen ? (
//                   <X style={{ width: "20px", height: "20px" }} />
//                ) : (
//                   <Menu style={{ width: "20px", height: "20px" }} />
//                )}
//             </button>

//             {/* Mobile Logo */}
//             <Link
//                to="/dashboard"
//                className="lg-hidden"
//                style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "0.5rem",
//                   textDecoration: "none",
//                }}
//             >
//                <Shield
//                   style={{ width: "18px", height: "18px", color: "#00d4ff" }}
//                />
//                <span
//                   style={{
//                      fontWeight: 700,
//                      fontSize: "0.9rem",
//                      background: "linear-gradient(90deg, #ffffff, #00d4ff)",
//                      WebkitBackgroundClip: "text",
//                      WebkitTextFillColor: "transparent",
//                   }}
//                >
//                   AuditAI
//                </span>
//             </Link>

//             {/* Right section */}
//             <div
//                style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "0.75rem",
//                   marginLeft: "auto",
//                }}
//             >
//                {/* Status indicator */}
//                <div
//                   style={{
//                      display: "flex",
//                      alignItems: "center",
//                      gap: "0.375rem",
//                      padding: "0.25rem 0.625rem",
//                      borderRadius: "100px",
//                      background: "rgba(0,255,100,0.06)",
//                      border: "1px solid rgba(0,255,100,0.15)",
//                   }}
//                >
//                   <div
//                      style={{
//                         width: "5px",
//                         height: "5px",
//                         borderRadius: "50%",
//                         background: "#00ff64",
//                         boxShadow: "0 0 6px #00ff64",
//                         animation: "blink 2s infinite",
//                      }}
//                   />
//                   <span
//                      style={{
//                         fontSize: "0.62rem",
//                         color: "#00ff64",
//                         letterSpacing: "0.1em",
//                         fontWeight: 500,
//                      }}
//                   >
//                      ONLINE
//                   </span>
//                </div>

//                {/* Credits Badge */}
//                <motion.div
//                   whileHover={{ scale: 1.02 }}
//                   style={{
//                      display: "flex",
//                      alignItems: "center",
//                      gap: "0.5rem",
//                      padding: "0.375rem 0.75rem",
//                      borderRadius: "8px",
//                      background: "rgba(0,212,255,0.06)",
//                      border: "1px solid rgba(0,212,255,0.2)",
//                      boxShadow: "0 0 12px rgba(0,212,255,0.05)",
//                      cursor: "default",
//                   }}
//                >
//                   <Zap
//                      style={{ width: "13px", height: "13px", color: "#00d4ff" }}
//                   />
//                   <div
//                      style={{
//                         display: "flex",
//                         alignItems: "baseline",
//                         gap: "0.25rem",
//                      }}
//                   >
//                      <span
//                         style={{
//                            fontSize: "0.95rem",
//                            fontWeight: 700,
//                            color: "#00d4ff",
//                            fontVariantNumeric: "tabular-nums",
//                            letterSpacing: "-0.02em",
//                         }}
//                      >
//                         {user?.credits ?? 0}
//                      </span>
//                      <span
//                         style={{
//                            fontSize: "0.6rem",
//                            color: "#1e4a5a",
//                            letterSpacing: "0.1em",
//                            textTransform: "uppercase",
//                         }}
//                      >
//                         credits
//                      </span>
//                   </div>
//                </motion.div>
//             </div>
//          </div>

//          {/* Mobile Menu */}
//          <AnimatePresence>
//             {mobileMenuOpen && (
//                <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   style={{
//                      overflow: "hidden",
//                      borderTop: "1px solid rgba(0,212,255,0.08)",
//                      background: "rgba(2,8,18,0.95)",
//                   }}
//                >
//                   <nav
//                      style={{
//                         padding: "0.75rem",
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: "2px",
//                      }}
//                   >
//                      {navigation.map((item) => {
//                         const isActive = location.pathname === item.href;
//                         return (
//                            <Link
//                               key={item.name}
//                               to={item.href}
//                               onClick={() => setMobileMenuOpen(false)}
//                               style={{
//                                  display: "flex",
//                                  alignItems: "center",
//                                  gap: "0.625rem",
//                                  padding: "0.625rem 0.75rem",
//                                  borderRadius: "8px",
//                                  fontSize: "0.82rem",
//                                  fontWeight: 500,
//                                  textDecoration: "none",
//                                  transition: "all 0.2s",
//                                  ...(isActive
//                                     ? {
//                                          background: "rgba(0,212,255,0.08)",
//                                          color: "#00d4ff",
//                                          border:
//                                             "1px solid rgba(0,212,255,0.2)",
//                                       }
//                                     : {
//                                          color: "#3d6070",
//                                          border: "1px solid transparent",
//                                       }),
//                               }}
//                            >
//                               <item.icon
//                                  style={{ width: "15px", height: "15px" }}
//                               />
//                               {item.name}
//                            </Link>
//                         );
//                      })}
//                      <button
//                         onClick={handleLogout}
//                         style={{
//                            display: "flex",
//                            alignItems: "center",
//                            gap: "0.625rem",
//                            width: "100%",
//                            padding: "0.625rem 0.75rem",
//                            borderRadius: "8px",
//                            fontSize: "0.82rem",
//                            fontWeight: 500,
//                            color: "#3d6070",
//                            background: "transparent",
//                            border: "1px solid transparent",
//                            cursor: "pointer",
//                            textAlign: "left",
//                            fontFamily: "'JetBrains Mono', monospace",
//                         }}
//                      >
//                         <LogOut style={{ width: "15px", height: "15px" }} />
//                         Logout
//                      </button>
//                   </nav>
//                </motion.div>
//             )}
//          </AnimatePresence>

//          <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
//         @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
//         .lg-hidden { display: flex; }
//         @media (min-width: 1024px) { .lg-hidden { display: none !important; } }
//       `}</style>
//       </header>
//    );
// }

// export default TopNav;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";
import { Menu, X, LayoutDashboard, FileText, LogOut, Zap } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function TopNav() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const location = useLocation();
   const { logout, user } = useAuth();

   const navigation = [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "Reports", href: "/reports", icon: FileText },
   ];

   const handleLogout = () => {
      logout();
      window.location.href = "/";
   };

   return (
      <header className="relative z-20 bg-white/[0.02] backdrop-blur-xl border-b border-white/[0.07]">
         <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            {/* Mobile toggle */}
            <button
               type="button"
               className="lg:hidden p-2 -ml-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
               {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
               ) : (
                  <Menu className="w-5 h-5" />
               )}
            </button>

            {/* Mobile logo */}
            <Link
               to="/dashboard"
               className="lg:hidden flex items-center gap-2.5"
            >
               <div className="p-1.5 rounded-lg bg-cyan-500 text-black shadow-[0_0_16px_rgba(34,211,238,0.5)]">
                  <FaShieldAlt size={13} />
               </div>
               <span className="font-bold text-white">
                  Audit<span className="text-cyan-400">AI</span>
               </span>
            </Link>

            {/* Right side */}
            <div className="flex items-center gap-3 ml-auto">
               {/* Audit indicator */}
               <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-gray-400">Engine Online</span>
               </div>

               {/* Credits badge */}
               <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/25 shadow-[0_0_16px_rgba(34,211,238,0.08)]"
               >
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-sm font-bold text-white">
                     {user?.credits ?? 0}
                  </span>
                  <span className="text-xs text-gray-500">credits</span>
               </motion.div>
            </div>
         </div>

         {/* Mobile menu */}
         <AnimatePresence>
            {mobileMenuOpen && (
               <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="lg:hidden border-t border-white/[0.07] overflow-hidden bg-black/80 backdrop-blur-xl"
               >
                  <nav className="p-4 space-y-1">
                     {navigation.map(({ name, href, icon: Icon }) => {
                        const isActive = location.pathname === href;
                        return (
                           <Link
                              key={name}
                              to={href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                                 isActive
                                    ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20"
                                    : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                              }`}
                           >
                              <Icon className="w-4 h-4" />
                              {name}
                           </Link>
                        );
                     })}
                     <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:text-red-400 hover:bg-red-500/5 transition-all"
                     >
                        <LogOut className="w-4 h-4" />
                        Logout
                     </button>
                  </nav>
               </motion.div>
            )}
         </AnimatePresence>
      </header>
   );
}
