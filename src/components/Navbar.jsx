import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShieldAlt, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
   { to: "/", label: "Home" },
   { to: "/features", label: "Features" },
   { to: "/pricing", label: "Pricing" },
   { to: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const location = useLocation();

   useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   return (
      <motion.nav
         initial={{ y: -80, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
         className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-2xl transition-all duration-300 ${
            scrolled
               ? "bg-black/70 backdrop-blur-2xl border border-cyan-500/20 shadow-[0_0_40px_rgba(6,182,212,0.08)]"
               : "bg-white/5 backdrop-blur-xl border border-white/10"
         }`}
      >
         <div className="px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
               {/* Logo */}
               <Link to="/" className="flex items-center gap-3 group">
                  <div className="relative p-2 rounded-xl bg-cyan-500 text-black shadow-[0_0_20px_rgba(34,211,238,0.6)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.9)] transition-all duration-300">
                     <FaShieldAlt size={16} />
                     <div className="absolute inset-0 rounded-xl bg-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity blur-sm" />
                  </div>
                  <span className="text-lg font-bold text-white tracking-tight">
                     Audit<span className="text-cyan-400">AI</span>
                  </span>
               </Link>

               {/* Desktop Nav */}
               <div className="hidden md:flex items-center gap-1">
                  {navLinks.map(({ to, label }) => (
                     <Link
                        key={to}
                        to={to}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                           location.pathname === to
                              ? "text-cyan-400 bg-cyan-400/10"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                     >
                        {label}
                     </Link>
                  ))}
               </div>

               {/* Auth Buttons */}
               <div className="hidden md:flex items-center gap-3">
                  <Link
                     to="/login"
                     className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                     Sign In
                  </Link>
                  <Link
                     to="/signup"
                     className="relative px-5 py-2 rounded-xl bg-cyan-500 text-black text-sm font-semibold overflow-hidden group shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.7)] transition-all duration-300"
                  >
                     <span className="relative z-10">Get Started Free</span>
                     <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
               </div>

               {/* Mobile Toggle */}
               <button
                  className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
                  onClick={() => setMenuOpen(!menuOpen)}
               >
                  {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
               </button>
            </div>
         </div>

         {/* Mobile Menu */}
         <AnimatePresence>
            {menuOpen && (
               <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden border-t border-white/10 overflow-hidden"
               >
                  <div className="px-6 py-4 flex flex-col gap-2">
                     {navLinks.map(({ to, label }) => (
                        <Link
                           key={to}
                           to={to}
                           onClick={() => setMenuOpen(false)}
                           className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all text-sm"
                        >
                           {label}
                        </Link>
                     ))}
                     <div className="border-t border-white/10 mt-2 pt-3 flex flex-col gap-2">
                        <Link
                           to="/login"
                           onClick={() => setMenuOpen(false)}
                           className="px-3 py-2 text-gray-400 text-sm"
                        >
                           Sign In
                        </Link>
                        <Link
                           to="/signup"
                           onClick={() => setMenuOpen(false)}
                           className="px-5 py-3 bg-cyan-500 text-black rounded-xl font-semibold text-center text-sm shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                        >
                           Get Started Free
                        </Link>
                     </div>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.nav>
   );
}
