// import { Link, useLocation } from "react-router-dom";
// import { Shield, LayoutDashboard, FileText, LogOut, Zap } from "lucide-react";
// import { useAuth } from "../context/AuthContext";
// import { motion } from "framer-motion";

// function Sidebar() {
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
//       <aside
//          style={{
//             display: "none",
//             flexDirection: "column",
//             width: "240px",
//             minHeight: "100vh",
//             position: "relative",
//             zIndex: 10,
//             borderRight: "1px solid rgba(0,212,255,0.08)",
//             background: "rgba(2,8,18,0.85)",
//             backdropFilter: "blur(20px)",
//             WebkitBackdropFilter: "blur(20px)",
//          }}
//          className="sidebar-desktop"
//       >
//          {/* Logo */}
//          <div
//             style={{
//                display: "flex",
//                alignItems: "center",
//                gap: "0.625rem",
//                height: "64px",
//                padding: "0 1.25rem",
//                borderBottom: "1px solid rgba(0,212,255,0.08)",
//             }}
//          >
//             <div
//                style={{
//                   position: "relative",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   width: "32px",
//                   height: "32px",
//                }}
//             >
//                <div
//                   style={{
//                      position: "absolute",
//                      inset: 0,
//                      borderRadius: "8px",
//                      background:
//                         "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,100,255,0.1))",
//                      border: "1px solid rgba(0,212,255,0.3)",
//                   }}
//                />
//                <Shield
//                   style={{
//                      width: "16px",
//                      height: "16px",
//                      color: "#00d4ff",
//                      position: "relative",
//                   }}
//                />
//             </div>
//             <div>
//                <span
//                   style={{
//                      fontWeight: 700,
//                      fontSize: "0.95rem",
//                      letterSpacing: "0.05em",
//                      background: "linear-gradient(90deg, #ffffff, #00d4ff)",
//                      WebkitBackgroundClip: "text",
//                      WebkitTextFillColor: "transparent",
//                      fontFamily: "'JetBrains Mono', monospace",
//                   }}
//                >
//                   AuditAI
//                </span>
//             </div>
//          </div>

//          {/* Nav label */}
//          <div style={{ padding: "1.25rem 1.25rem 0.5rem" }}>
//             <span
//                style={{
//                   fontSize: "0.6rem",
//                   letterSpacing: "0.2em",
//                   textTransform: "uppercase",
//                   color: "#1e3a4a",
//                   fontWeight: 600,
//                }}
//             >
//                Navigation
//             </span>
//          </div>

//          {/* Nav Items */}
//          <nav
//             style={{
//                flex: 1,
//                padding: "0 0.75rem",
//                display: "flex",
//                flexDirection: "column",
//                gap: "2px",
//             }}
//          >
//             {navigation.map((item, i) => {
//                const isActive = location.pathname === item.href;
//                return (
//                   <motion.div
//                      key={item.name}
//                      initial={{ opacity: 0, x: -10 }}
//                      animate={{ opacity: 1, x: 0 }}
//                      transition={{ delay: i * 0.1 + 0.2 }}
//                   >
//                      <Link
//                         to={item.href}
//                         style={{
//                            display: "flex",
//                            alignItems: "center",
//                            gap: "0.625rem",
//                            padding: "0.625rem 0.75rem",
//                            borderRadius: "8px",
//                            fontSize: "0.82rem",
//                            fontWeight: 500,
//                            letterSpacing: "0.02em",
//                            textDecoration: "none",
//                            transition: "all 0.2s ease",
//                            position: "relative",
//                            ...(isActive
//                               ? {
//                                    background: "rgba(0,212,255,0.08)",
//                                    border: "1px solid rgba(0,212,255,0.2)",
//                                    color: "#00d4ff",
//                                 }
//                               : {
//                                    background: "transparent",
//                                    border: "1px solid transparent",
//                                    color: "#3d6070",
//                                 }),
//                         }}
//                         onMouseEnter={(e) => {
//                            if (!isActive) {
//                               e.currentTarget.style.background =
//                                  "rgba(0,212,255,0.04)";
//                               e.currentTarget.style.color = "#7ab8cc";
//                               e.currentTarget.style.borderColor =
//                                  "rgba(0,212,255,0.08)";
//                            }
//                         }}
//                         onMouseLeave={(e) => {
//                            if (!isActive) {
//                               e.currentTarget.style.background = "transparent";
//                               e.currentTarget.style.color = "#3d6070";
//                               e.currentTarget.style.borderColor = "transparent";
//                            }
//                         }}
//                      >
//                         {isActive && (
//                            <div
//                               style={{
//                                  position: "absolute",
//                                  left: 0,
//                                  top: "20%",
//                                  bottom: "20%",
//                                  width: "2px",
//                                  borderRadius: "0 2px 2px 0",
//                                  background: "#00d4ff",
//                                  boxShadow: "0 0 8px #00d4ff",
//                               }}
//                            />
//                         )}
//                         <item.icon
//                            style={{
//                               width: "15px",
//                               height: "15px",
//                               flexShrink: 0,
//                            }}
//                         />
//                         {item.name}
//                      </Link>
//                   </motion.div>
//                );
//             })}
//          </nav>

//          {/* User Section */}
//          <div
//             style={{
//                padding: "0.75rem",
//                borderTop: "1px solid rgba(0,212,255,0.08)",
//             }}
//          >
//             <div
//                style={{
//                   padding: "0.625rem 0.75rem",
//                   marginBottom: "0.375rem",
//                   borderRadius: "8px",
//                   background: "rgba(0,212,255,0.03)",
//                   border: "1px solid rgba(0,212,255,0.06)",
//                }}
//             >
//                <div
//                   style={{
//                      display: "flex",
//                      alignItems: "center",
//                      gap: "0.625rem",
//                   }}
//                >
//                   <div
//                      style={{
//                         width: "30px",
//                         height: "30px",
//                         borderRadius: "8px",
//                         background:
//                            "linear-gradient(135deg, rgba(0,212,255,0.3), rgba(0,100,255,0.2))",
//                         border: "1px solid rgba(0,212,255,0.3)",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         flexShrink: 0,
//                      }}
//                   >
//                      <span
//                         style={{
//                            fontSize: "0.75rem",
//                            fontWeight: 700,
//                            color: "#00d4ff",
//                         }}
//                      >
//                         {user?.name?.charAt(0).toUpperCase() || "U"}
//                      </span>
//                   </div>
//                   <div style={{ flex: 1, minWidth: 0 }}>
//                      <p
//                         style={{
//                            fontSize: "0.78rem",
//                            fontWeight: 600,
//                            color: "#c8e8f0",
//                            margin: 0,
//                            whiteSpace: "nowrap",
//                            overflow: "hidden",
//                            textOverflow: "ellipsis",
//                         }}
//                      >
//                         {user?.name}
//                      </p>
//                      <p
//                         style={{
//                            fontSize: "0.65rem",
//                            color: "#2a4a5a",
//                            margin: 0,
//                            whiteSpace: "nowrap",
//                            overflow: "hidden",
//                            textOverflow: "ellipsis",
//                         }}
//                      >
//                         {user?.email}
//                      </p>
//                   </div>
//                </div>
//             </div>

//             <button
//                onClick={handleLogout}
//                style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "0.625rem",
//                   width: "100%",
//                   padding: "0.5rem 0.75rem",
//                   borderRadius: "8px",
//                   fontSize: "0.78rem",
//                   fontWeight: 500,
//                   color: "#2a4a5a",
//                   background: "transparent",
//                   border: "1px solid transparent",
//                   cursor: "pointer",
//                   transition: "all 0.2s ease",
//                   fontFamily: "'JetBrains Mono', monospace",
//                }}
//                onMouseEnter={(e) => {
//                   e.currentTarget.style.color = "#ff4444";
//                   e.currentTarget.style.background = "rgba(255,68,68,0.05)";
//                   e.currentTarget.style.borderColor = "rgba(255,68,68,0.1)";
//                }}
//                onMouseLeave={(e) => {
//                   e.currentTarget.style.color = "#2a4a5a";
//                   e.currentTarget.style.background = "transparent";
//                   e.currentTarget.style.borderColor = "transparent";
//                }}
//             >
//                <LogOut
//                   style={{ width: "14px", height: "14px", flexShrink: 0 }}
//                />
//                Logout
//             </button>
//          </div>

//          <style>{`
//         @media (min-width: 1024px) {
//           .sidebar-desktop { display: flex !important; }
//         }
//         @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
//       `}</style>
//       </aside>
//    );
// }

// export default Sidebar;

// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaShieldAlt } from "react-icons/fa";
// import { LayoutDashboard, FileText, LogOut, Zap } from "lucide-react";
// import { useAuth } from "../context/AuthContext";

// const navigation = [
//    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
//    { name: "Reports", href: "/reports", icon: FileText },
// ];

// export default function Sidebar() {
//    const location = useLocation();
//    const { logout, user } = useAuth();

//    const handleLogout = () => {
//       logout();
//       window.location.href = "/";
//    };

//    return (
//       <>
//          <aside className="hidden lg:flex lg:flex-col lg:w-64 relative z-20">
//             {/* Glass panel */}
//             <div className="flex flex-col h-full bg-white/[0.03] backdrop-blur-xl border-r border-white/[0.07]">
//                {/* Logo */}
//                <div className="flex items-center gap-3 h-16 px-6 border-b border-white/[0.07]">
//                   <div className="p-2 rounded-xl bg-cyan-500 text-black shadow-[0_0_20px_rgba(34,211,238,0.5)]">
//                      <FaShieldAlt size={14} />
//                   </div>
//                   <span className="text-lg font-bold text-white tracking-tight">
//                      Audit<span className="text-cyan-400">AI</span>
//                   </span>
//                </div>

//                {/* Nav */}
//                <nav className="flex-1 p-4 space-y-1">
//                   {navigation.map(({ name, href, icon: Icon }, i) => {
//                      const isActive = location.pathname === href;
//                      return (
//                         <motion.div
//                            key={name}
//                            initial={{ opacity: 0, x: -10 }}
//                            animate={{ opacity: 1, x: 0 }}
//                            transition={{ delay: i * 0.08 }}
//                         >
//                            <Link
//                               to={href}
//                               className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 relative overflow-hidden ${
//                                  isActive
//                                     ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 shadow-[inset_0_0_20px_rgba(34,211,238,0.05)]"
//                                     : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
//                               }`}
//                            >
//                               {isActive && (
//                                  <motion.div
//                                     layoutId="activeNav"
//                                     className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"
//                                  />
//                               )}
//                               <Icon
//                                  className={`w-4 h-4 transition-all duration-200 ${
//                                     isActive
//                                        ? "text-cyan-400"
//                                        : "text-gray-500 group-hover:text-gray-300"
//                                  }`}
//                               />
//                               {name}
//                               {isActive && (
//                                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,1)]" />
//                               )}
//                            </Link>
//                         </motion.div>
//                      );
//                   })}
//                </nav>

//                {/* Credit mini-display */}
//                <div className="px-4 pb-3">
//                   <div className="p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/15">
//                      <div className="flex items-center justify-between mb-2">
//                         <div className="flex items-center gap-1.5">
//                            <Zap className="w-3.5 h-3.5 text-cyan-400" />
//                            <span className="text-xs text-gray-400 font-medium">
//                               Credits
//                            </span>
//                         </div>
//                         <span className="text-xs font-bold text-white">
//                            {user?.credits ?? 0}
//                         </span>
//                      </div>
//                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
//                         <motion.div
//                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
//                            initial={{ width: 0 }}
//                            animate={{
//                               width: `${Math.min(((user?.credits ?? 0) / 100) * 100, 100)}%`,
//                            }}
//                            transition={{ duration: 1, delay: 0.5 }}
//                         />
//                      </div>
//                      <p className="text-[10px] text-gray-600 mt-1.5">
//                         Each audit costs 20 credits
//                      </p>
//                   </div>
//                </div>

//                {/* User + Logout */}
//                <div className="p-4 border-t border-white/[0.07]">
//                   <div className="flex items-center gap-3 px-2 py-2 mb-2">
//                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
//                         <span className="text-xs font-bold text-white">
//                            {user?.name?.charAt(0).toUpperCase() || "U"}
//                         </span>
//                      </div>
//                      <div className="flex-1 min-w-0">
//                         <p className="text-sm font-medium text-white truncate">
//                            {user?.name}
//                         </p>
//                         <p className="text-xs text-gray-600 truncate">
//                            {user?.email}
//                         </p>
//                      </div>
//                   </div>
//                   <button
//                      onClick={handleLogout}
//                      className="flex items-center gap-3 w-full px-3 py-2 rounded-xl text-sm font-medium text-gray-500 hover:text-red-400 hover:bg-red-500/5 border border-transparent hover:border-red-500/10 transition-all duration-200"
//                   >
//                      <LogOut className="w-4 h-4" />
//                      Logout
//                   </button>
//                </div>
//             </div>
//          </aside>
//       </>
//    );
// }

import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";
import { LayoutDashboard, FileText, LogOut, Zap, Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const navigation = [
   { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
   { name: "Reports", href: "/reports", icon: FileText },
];

export default function Sidebar() {
   const location = useLocation();
   const { logout, user } = useAuth();
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   const handleLogout = () => {
      logout();
      window.location.href = "/";
   };

   const closeSidebar = () => {
      setIsSidebarOpen(false);
   };

   return (
      <>
         {/* Mobile Menu Button */}
         <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white"
         >
            <Menu className="w-5 h-5" />
         </button>

         {/* Desktop Sidebar */}
         <aside className="hidden lg:flex lg:flex-col lg:w-64 h-screen sticky top-0 z-20">
            <div className="flex flex-col h-full bg-white/[0.03] backdrop-blur-xl border-r border-white/[0.07]">
               {/* Logo */}
               <div className="flex items-center gap-3 h-16 px-6 border-b border-white/[0.07]">
                  <div className="p-2 rounded-xl bg-cyan-500 text-black shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                     <FaShieldAlt size={14} />
                  </div>
                  <span className="text-lg font-bold text-white tracking-tight">
                     Audit<span className="text-cyan-400">AI</span>
                  </span>
               </div>

               {/* Nav */}
               <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                  {navigation.map(({ name, href, icon: Icon }, i) => {
                     const isActive = location.pathname === href;

                     return (
                        <motion.div
                           key={name}
                           initial={{ opacity: 0, x: -10 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: i * 0.08 }}
                        >
                           <Link
                              to={href}
                              className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 relative overflow-hidden ${
                                 isActive
                                    ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 shadow-[inset_0_0_20px_rgba(34,211,238,0.05)]"
                                    : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                              }`}
                           >
                              {isActive && (
                                 <motion.div
                                    layoutId="activeNav"
                                    className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                                 />
                              )}

                              <Icon
                                 className={`w-4 h-4 ${
                                    isActive
                                       ? "text-cyan-400"
                                       : "text-gray-500 group-hover:text-gray-300"
                                 }`}
                              />

                              {name}

                              {isActive && (
                                 <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,1)]" />
                              )}
                           </Link>
                        </motion.div>
                     );
                  })}
               </nav>

               {/* Credit Display */}
               <div className="px-4 pb-3">
                  <div className="p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/15">
                     <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                           <Zap className="w-3.5 h-3.5 text-cyan-400" />
                           <span className="text-xs text-gray-400 font-medium">
                              Credits
                           </span>
                        </div>

                        <span className="text-xs font-bold text-white">
                           {user?.credits ?? 0}
                        </span>
                     </div>

                     <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                           className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                           initial={{ width: 0 }}
                           animate={{
                              width: `${Math.min(
                                 ((user?.credits ?? 0) / 100) * 100,
                                 100,
                              )}%`,
                           }}
                           transition={{ duration: 1 }}
                        />
                     </div>

                     <p className="text-[10px] text-gray-600 mt-1.5">
                        Each audit costs 20 credits
                     </p>
                  </div>
               </div>

               {/* User Section */}
               <div className="p-4 border-t border-white/[0.07]">
                  <div className="flex items-center gap-3 px-2 py-2 mb-2">
                     <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">
                           {user?.name?.charAt(0).toUpperCase() || "U"}
                        </span>
                     </div>

                     <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                           {user?.name}
                        </p>
                        <p className="text-xs text-gray-600 truncate">
                           {user?.email}
                        </p>
                     </div>
                  </div>

                  <button
                     onClick={handleLogout}
                     className="flex items-center gap-3 w-full px-3 py-2 rounded-xl text-sm font-medium text-gray-500 hover:text-red-400 hover:bg-red-500/5 border border-transparent hover:border-red-500/10 transition-all duration-200"
                  >
                     <LogOut className="w-4 h-4" />
                     Logout
                  </button>
               </div>
            </div>
         </aside>

         {/* Mobile Sidebar */}
         <AnimatePresence>
            {isSidebarOpen && (
               <>
                  {/* Overlay */}
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     onClick={closeSidebar}
                     className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                  />

                  {/* Sidebar Panel */}
                  <motion.aside
                     initial={{ x: "-100%" }}
                     animate={{ x: 0 }}
                     exit={{ x: "-100%" }}
                     transition={{ duration: 0.3 }}
                     className="fixed left-0 top-0 h-screen w-64 z-50 lg:hidden bg-[#0B1120] border-r border-white/[0.07]"
                  >
                     <div className="flex flex-col h-full bg-white/[0.03] backdrop-blur-xl">
                        {/* Mobile Header */}
                        <div className="flex items-center justify-between h-16 px-6 border-b border-white/[0.07]">
                           <div className="flex items-center gap-3">
                              <div className="p-2 rounded-xl bg-cyan-500 text-black">
                                 <FaShieldAlt size={14} />
                              </div>

                              <span className="text-lg font-bold text-white">
                                 Audit
                                 <span className="text-cyan-400">AI</span>
                              </span>
                           </div>

                           <button onClick={closeSidebar}>
                              <X className="w-5 h-5 text-white" />
                           </button>
                        </div>

                        {/* Mobile Nav */}
                        {/* Mobile Nav */}
                        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                           {navigation.map(({ name, href, icon: Icon }) => {
                              const isActive = location.pathname === href;

                              return (
                                 <Link
                                    key={name}
                                    to={href}
                                    onClick={closeSidebar}
                                    className={`flex items-center gap-3 px-3 py-3 rounded-xl ${
                                       isActive
                                          ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                                          : "text-gray-400 hover:bg-white/5"
                                    }`}
                                 >
                                    <Icon className="w-4 h-4" />
                                    {name}
                                 </Link>
                              );
                           })}
                        </nav>

                        {/* Mobile Credits */}
                        <div className="px-4 pb-3">
                           <div className="p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/15">
                              <div className="flex items-center justify-between mb-2">
                                 <div className="flex items-center gap-1.5">
                                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                                    <span className="text-xs text-gray-400 font-medium">
                                       Credits
                                    </span>
                                 </div>

                                 <span className="text-xs font-bold text-white">
                                    {user?.credits ?? 0}
                                 </span>
                              </div>

                              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                 <motion.div
                                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{
                                       width: `${Math.min(
                                          ((user?.credits ?? 0) / 100) * 100,
                                          100,
                                       )}%`,
                                    }}
                                    transition={{ duration: 1 }}
                                 />
                              </div>

                              <p className="text-[10px] text-gray-600 mt-1.5">
                                 Each audit costs 20 credits
                              </p>
                           </div>
                        </div>

                        {/* Mobile User + Logout */}
                        <div className="p-4 border-t border-white/[0.07]">
                           <div className="flex items-center gap-3 px-2 py-2 mb-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                                 <span className="text-xs font-bold text-white">
                                    {user?.name?.charAt(0).toUpperCase() || "U"}
                                 </span>
                              </div>

                              <div className="flex-1 min-w-0">
                                 <p className="text-sm font-medium text-white truncate">
                                    {user?.name}
                                 </p>
                                 <p className="text-xs text-gray-600 truncate">
                                    {user?.email}
                                 </p>
                              </div>
                           </div>

                           <button
                              onClick={handleLogout}
                              className="flex items-center gap-3 w-full px-3 py-2 rounded-xl text-sm font-medium text-gray-500 hover:text-red-400 hover:bg-red-500/5 border border-transparent hover:border-red-500/10 transition-all duration-200"
                           >
                              <LogOut className="w-4 h-4" />
                              Logout
                           </button>
                        </div>
                     </div>
                  </motion.aside>
               </>
            )}
         </AnimatePresence>
      </>
   );
}
