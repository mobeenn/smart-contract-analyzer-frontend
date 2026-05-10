import { Link, useLocation } from "react-router-dom";
import { Shield, LayoutDashboard, FileText, LogOut, Zap } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

function Sidebar() {
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
      <aside
         style={{
            display: "none",
            flexDirection: "column",
            width: "240px",
            minHeight: "100vh",
            position: "relative",
            zIndex: 10,
            borderRight: "1px solid rgba(0,212,255,0.08)",
            background: "rgba(2,8,18,0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
         }}
         className="sidebar-desktop"
      >
         {/* Logo */}
         <div
            style={{
               display: "flex",
               alignItems: "center",
               gap: "0.625rem",
               height: "64px",
               padding: "0 1.25rem",
               borderBottom: "1px solid rgba(0,212,255,0.08)",
            }}
         >
            <div
               style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "32px",
                  height: "32px",
               }}
            >
               <div
                  style={{
                     position: "absolute",
                     inset: 0,
                     borderRadius: "8px",
                     background:
                        "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,100,255,0.1))",
                     border: "1px solid rgba(0,212,255,0.3)",
                  }}
               />
               <Shield
                  style={{
                     width: "16px",
                     height: "16px",
                     color: "#00d4ff",
                     position: "relative",
                  }}
               />
            </div>
            <div>
               <span
                  style={{
                     fontWeight: 700,
                     fontSize: "0.95rem",
                     letterSpacing: "0.05em",
                     background: "linear-gradient(90deg, #ffffff, #00d4ff)",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                     fontFamily: "'JetBrains Mono', monospace",
                  }}
               >
                  AuditAI
               </span>
            </div>
         </div>

         {/* Nav label */}
         <div style={{ padding: "1.25rem 1.25rem 0.5rem" }}>
            <span
               style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#1e3a4a",
                  fontWeight: 600,
               }}
            >
               Navigation
            </span>
         </div>

         {/* Nav Items */}
         <nav
            style={{
               flex: 1,
               padding: "0 0.75rem",
               display: "flex",
               flexDirection: "column",
               gap: "2px",
            }}
         >
            {navigation.map((item, i) => {
               const isActive = location.pathname === item.href;
               return (
                  <motion.div
                     key={item.name}
                     initial={{ opacity: 0, x: -10 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: i * 0.1 + 0.2 }}
                  >
                     <Link
                        to={item.href}
                        style={{
                           display: "flex",
                           alignItems: "center",
                           gap: "0.625rem",
                           padding: "0.625rem 0.75rem",
                           borderRadius: "8px",
                           fontSize: "0.82rem",
                           fontWeight: 500,
                           letterSpacing: "0.02em",
                           textDecoration: "none",
                           transition: "all 0.2s ease",
                           position: "relative",
                           ...(isActive
                              ? {
                                   background: "rgba(0,212,255,0.08)",
                                   border: "1px solid rgba(0,212,255,0.2)",
                                   color: "#00d4ff",
                                }
                              : {
                                   background: "transparent",
                                   border: "1px solid transparent",
                                   color: "#3d6070",
                                }),
                        }}
                        onMouseEnter={(e) => {
                           if (!isActive) {
                              e.currentTarget.style.background =
                                 "rgba(0,212,255,0.04)";
                              e.currentTarget.style.color = "#7ab8cc";
                              e.currentTarget.style.borderColor =
                                 "rgba(0,212,255,0.08)";
                           }
                        }}
                        onMouseLeave={(e) => {
                           if (!isActive) {
                              e.currentTarget.style.background = "transparent";
                              e.currentTarget.style.color = "#3d6070";
                              e.currentTarget.style.borderColor = "transparent";
                           }
                        }}
                     >
                        {isActive && (
                           <div
                              style={{
                                 position: "absolute",
                                 left: 0,
                                 top: "20%",
                                 bottom: "20%",
                                 width: "2px",
                                 borderRadius: "0 2px 2px 0",
                                 background: "#00d4ff",
                                 boxShadow: "0 0 8px #00d4ff",
                              }}
                           />
                        )}
                        <item.icon
                           style={{
                              width: "15px",
                              height: "15px",
                              flexShrink: 0,
                           }}
                        />
                        {item.name}
                     </Link>
                  </motion.div>
               );
            })}
         </nav>

         {/* User Section */}
         <div
            style={{
               padding: "0.75rem",
               borderTop: "1px solid rgba(0,212,255,0.08)",
            }}
         >
            <div
               style={{
                  padding: "0.625rem 0.75rem",
                  marginBottom: "0.375rem",
                  borderRadius: "8px",
                  background: "rgba(0,212,255,0.03)",
                  border: "1px solid rgba(0,212,255,0.06)",
               }}
            >
               <div
                  style={{
                     display: "flex",
                     alignItems: "center",
                     gap: "0.625rem",
                  }}
               >
                  <div
                     style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "8px",
                        background:
                           "linear-gradient(135deg, rgba(0,212,255,0.3), rgba(0,100,255,0.2))",
                        border: "1px solid rgba(0,212,255,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                     }}
                  >
                     <span
                        style={{
                           fontSize: "0.75rem",
                           fontWeight: 700,
                           color: "#00d4ff",
                        }}
                     >
                        {user?.name?.charAt(0).toUpperCase() || "U"}
                     </span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                     <p
                        style={{
                           fontSize: "0.78rem",
                           fontWeight: 600,
                           color: "#c8e8f0",
                           margin: 0,
                           whiteSpace: "nowrap",
                           overflow: "hidden",
                           textOverflow: "ellipsis",
                        }}
                     >
                        {user?.name}
                     </p>
                     <p
                        style={{
                           fontSize: "0.65rem",
                           color: "#2a4a5a",
                           margin: 0,
                           whiteSpace: "nowrap",
                           overflow: "hidden",
                           textOverflow: "ellipsis",
                        }}
                     >
                        {user?.email}
                     </p>
                  </div>
               </div>
            </div>

            <button
               onClick={handleLogout}
               style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  width: "100%",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "8px",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  color: "#2a4a5a",
                  background: "transparent",
                  border: "1px solid transparent",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontFamily: "'JetBrains Mono', monospace",
               }}
               onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#ff4444";
                  e.currentTarget.style.background = "rgba(255,68,68,0.05)";
                  e.currentTarget.style.borderColor = "rgba(255,68,68,0.1)";
               }}
               onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#2a4a5a";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
               }}
            >
               <LogOut
                  style={{ width: "14px", height: "14px", flexShrink: 0 }}
               />
               Logout
            </button>
         </div>

         <style>{`
        @media (min-width: 1024px) {
          .sidebar-desktop { display: flex !important; }
        }
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
      `}</style>
      </aside>
   );
}

export default Sidebar;
