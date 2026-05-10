import { lazy, Suspense, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
   FaShieldAlt,
   FaBolt,
   FaLock,
   FaFileAlt,
   FaArrowRight,
   FaCheckCircle,
   FaEthereum,
   FaCode,
   FaChartBar,
   FaStar,
   FaQuoteLeft,
   FaFire,
   FaExclamationTriangle,
   FaUserShield,
   FaGasPump,
   FaRobot,
   FaLink,
   FaCubes,
   FaWallet,
} from "react-icons/fa";
import { MdSecurity, MdSpeed } from "react-icons/md";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Hero3D = lazy(() => import("../components/Hero3D"));

/* ─── Animation helpers ─── */
const fadeUp = {
   hidden: { opacity: 0, y: 40 },
   visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
   }),
};
const fadeIn = {
   hidden: { opacity: 0 },
   visible: (i = 0) => ({
      opacity: 1,
      transition: { duration: 0.5, delay: i * 0.08 },
   }),
};

function Section({ children, className = "" }) {
   const ref = useRef(null);
   const inView = useInView(ref, { once: true, margin: "-80px" });
   return (
      <section ref={ref} className={className}>
         <motion.div initial="hidden" animate={inView ? "visible" : "hidden"}>
            {children}
         </motion.div>
      </section>
   );
}

function GlowBadge({ children }) {
   return (
      <motion.div
         variants={fadeUp}
         className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-5"
      >
         {children}
      </motion.div>
   );
}

/* ─── Hero ─── */
function HeroSection() {
   return (
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
         {/* Background layers */}
         <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_50%,rgba(6,182,212,0.07),transparent)]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_60%,rgba(0,0,0,0.9)_100%)]" />
            {/* Grid */}
            <div
               className="absolute inset-0 opacity-[0.04]"
               style={{
                  backgroundImage:
                     "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
               }}
            />
         </div>

         <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left */}
            <div>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-6"
               >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  AI-Powered Smart Contract Auditing
               </motion.div>

               <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-white mb-6"
               >
                  Audit Smarter.{" "}
                  <span className="relative">
                     <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                        Ship
                     </span>
                  </span>{" "}
                  Safer. <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">
                     On&#8209;Chain.
                  </span>
               </motion.h1>

               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg"
               >
                  Detect reentrancy attacks, access control flaws, and 8+
                  critical vulnerabilities in seconds. Every audit is
                  cryptographically verified on Ethereum Sepolia.
               </motion.p>

               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="flex flex-col sm:flex-row gap-4 mb-10"
               >
                  <Link
                     to="/signup"
                     className="group px-7 py-3.5 bg-cyan-500 text-black rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.8)] hover:bg-cyan-400 transition-all duration-300 text-sm"
                  >
                     Start Free — 100 Credits
                     <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                     to="/demo"
                     className="px-7 py-3.5 border border-white/15 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium flex items-center justify-center gap-2 transition-all text-sm"
                  >
                     <FaCode /> View Demo Audit
                  </Link>
               </motion.div>

               {/* Stats */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="flex flex-wrap gap-6"
               >
                  {[
                     { value: "8+", label: "Vulnerability Types" },
                     { value: "100", label: "Free Credits" },
                     { value: "<10s", label: "Audit Speed" },
                     { value: "100%", label: "On-Chain Verified" },
                  ].map(({ value, label }) => (
                     <div key={label} className="flex flex-col">
                        <span className="text-2xl font-black text-white">
                           {value}
                        </span>
                        <span className="text-xs text-gray-500 mt-0.5">
                           {label}
                        </span>
                     </div>
                  ))}
               </motion.div>

               {/* Trust badges */}
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap items-center gap-3 mt-8"
               >
                  {["Gemini AI", "Ethereum Sepolia", "Solidity"].map(
                     (badge) => (
                        <span
                           key={badge}
                           className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400"
                        >
                           <FaCheckCircle className="text-cyan-500" size={10} />
                           {badge}
                        </span>
                     ),
                  )}
               </motion.div>
            </div>

            {/* Right — 3D */}
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="relative h-130 lg:h-155 rounded-3xl overflow-hidden"
            >
               {/* Glow behind canvas */}
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent_70%)]" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

               <Suspense
                  fallback={
                     <div className="w-full h-full flex items-center justify-center">
                        <div className="w-10 h-10 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                     </div>
                  }
               >
                  <Hero3D />
               </Suspense>

               {/* Floating UI cards on top of 3D */}
               <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                     duration: 4,
                     repeat: Infinity,
                     ease: "easeInOut",
                  }}
                  className="absolute top-6 right-6 bg-black/70 backdrop-blur-xl border border-cyan-500/20 rounded-2xl px-4 py-3 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
               >
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                     <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />{" "}
                     Live Audit
                  </div>
                  <p className="text-white text-sm font-semibold">
                     Reentrancy — Detected
                  </p>
                  <p className="text-red-400 text-xs mt-0.5">Critical Risk</p>
               </motion.div>

               <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                     duration: 5,
                     repeat: Infinity,
                     ease: "easeInOut",
                     delay: 1,
                  }}
                  className="absolute bottom-10 left-6 bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3"
               >
                  <p className="text-xs text-gray-400 mb-1">Tx Hash</p>
                  <p className="text-cyan-400 text-xs font-mono">
                     0x3f9a...d7b2
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                     Stored on Sepolia ✓
                  </p>
               </motion.div>

               <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                     duration: 3.5,
                     repeat: Infinity,
                     ease: "easeInOut",
                     delay: 0.5,
                  }}
                  className="absolute bottom-10 right-6 bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3"
               >
                  <p className="text-xs text-gray-400 mb-1">Credits Used</p>
                  <div className="flex items-end gap-1">
                     <span className="text-white font-bold text-lg">20</span>
                     <span className="text-gray-500 text-xs mb-0.5">/ 100</span>
                  </div>
                  <div className="w-20 h-1 bg-white/10 rounded-full mt-1.5">
                     <div className="h-full w-1/5 bg-cyan-400 rounded-full" />
                  </div>
               </motion.div>
            </motion.div>
         </div>
      </section>
   );
}

/* ─── How It Works ─── */
const steps = [
   {
      icon: FaUserShield,
      title: "Sign Up",
      desc: "Create your account in seconds. No credit card required.",
      color: "from-cyan-500 to-blue-500",
   },
   {
      icon: FaWallet,
      title: "Get 100 Credits",
      desc: "Every new account receives 100 free audit credits instantly.",
      color: "from-blue-500 to-violet-500",
   },
   {
      icon: FaCode,
      title: "Upload Contract",
      desc: "Paste or upload your Solidity smart contract source code.",
      color: "from-violet-500 to-purple-500",
   },
   {
      icon: FaRobot,
      title: "AI Analysis",
      desc: "Gemini AI scans every line for vulnerabilities in under 10 seconds.",
      color: "from-purple-500 to-pink-500",
   },
   {
      icon: FaBolt,
      title: "20 Credits Used",
      desc: "Each audit deducts 20 credits from your balance automatically.",
      color: "from-pink-500 to-rose-500",
   },
   {
      icon: FaEthereum,
      title: "Blockchain Proof",
      desc: "Your audit hash is stored immutably on Ethereum Sepolia.",
      color: "from-rose-500 to-orange-500",
   },
   {
      icon: FaFileAlt,
      title: "Download Report",
      desc: "Get your detailed vulnerability report with fix recommendations.",
      color: "from-orange-500 to-cyan-500",
   },
];

function HowItWorks() {
   return (
      <Section className="py-28 px-6 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.04),transparent_60%)]" />
         <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-16">
               <GlowBadge>
                  <FaBolt /> Workflow
               </GlowBadge>
               <motion.h2
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-black text-white mb-4"
               >
                  How AuditAI Works
               </motion.h2>
               <motion.p
                  variants={fadeUp}
                  custom={1}
                  className="text-gray-500 text-lg max-w-xl mx-auto"
               >
                  From contract upload to on-chain proof in under 30 seconds.
               </motion.p>
            </div>

            <div className="relative">
               {/* Connecting line */}
               <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent" />

               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  {steps.map(({ icon: Icon, title, desc, color }, i) => (
                     <motion.div
                        key={title}
                        variants={fadeUp}
                        custom={i * 0.5}
                        className="relative flex flex-col items-center text-center group"
                     >
                        {/* Step bubble */}
                        <div
                           className={`relative w-16 h-16 rounded-2xl bg-linear-to-br ${color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                           <Icon className="text-white text-xl" />
                           <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-black border border-white/20 text-[10px] text-gray-400 flex items-center justify-center font-bold">
                              {i + 1}
                           </span>
                        </div>
                        <h4 className="text-white text-xs font-bold mb-1.5">
                           {title}
                        </h4>
                        <p className="text-gray-600 text-[11px] leading-relaxed hidden md:block">
                           {desc}
                        </p>

                        {/* Arrow */}
                        {i < steps.length - 1 && (
                           <div className="hidden lg:block absolute top-7 -right-2 text-gray-700">
                              <FaArrowRight size={12} />
                           </div>
                        )}
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </Section>
   );
}

/* ─── Vulnerabilities ─── */
const vulnerabilities = [
   {
      icon: FaFire,
      name: "Reentrancy",
      severity: "Critical",
      desc: "Detects recursive call exploits that drain contract funds.",
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
   },
   {
      icon: FaLock,
      name: "Access Control",
      severity: "High",
      desc: "Finds missing onlyOwner guards and privilege escalation paths.",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
   },
   {
      icon: FaExclamationTriangle,
      name: "Integer Overflow",
      severity: "High",
      desc: "Identifies arithmetic issues bypassing SafeMath protections.",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
   },
   {
      icon: FaBolt,
      name: "Flash Loan Risks",
      severity: "Critical",
      desc: "Spots price manipulation vectors via flash loan attacks.",
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
   },
   {
      icon: MdSpeed,
      name: "Front Running",
      severity: "Medium",
      desc: "Detects MEV-exploitable ordering vulnerabilities.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
   },
   {
      icon: FaShieldAlt,
      name: "DoS Attacks",
      severity: "High",
      desc: "Catches gas limit and block stuffing denial-of-service vectors.",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
   },
   {
      icon: FaLink,
      name: "External Call Risks",
      severity: "Medium",
      desc: "Analyzes untrusted external calls and callback exploits.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
   },
   {
      icon: FaGasPump,
      name: "Gas Optimization",
      severity: "Info",
      desc: "Suggests storage packing, loop improvements, and calldata usage.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
   },
];

function VulnerabilityCard({
   icon: Icon,
   name,
   severity,
   desc,
   color,
   bg,
   border,
   i,
}) {
   const severityColors = {
      Critical: "text-red-400 bg-red-500/10",
      High: "text-orange-400 bg-orange-500/10",
      Medium: "text-yellow-400 bg-yellow-500/10",
      Info: "text-blue-400 bg-blue-500/10",
   };
   return (
      <motion.div
         variants={fadeUp}
         custom={i * 0.3}
         whileHover={{ y: -4, scale: 1.02 }}
         className={`p-5 rounded-2xl border ${border} ${bg} backdrop-blur-sm group cursor-default transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]`}
      >
         <div className="flex items-start justify-between mb-3">
            <div className={`p-2.5 rounded-xl ${bg} border ${border}`}>
               <Icon className={`${color} text-lg`} />
            </div>
            <span
               className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${severityColors[severity]}`}
            >
               {severity}
            </span>
         </div>
         <h4 className="text-white font-bold text-sm mb-1.5">{name}</h4>
         <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
      </motion.div>
   );
}

function VulnerabilitiesSection() {
   return (
      <Section className="py-28 px-6 bg-black relative">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.05),transparent_60%)]" />
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
               <GlowBadge>
                  <MdSecurity /> Detection Engine
               </GlowBadge>
               <motion.h2
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-black text-white mb-4"
               >
                  8+ Vulnerability Classes
               </motion.h2>
               <motion.p
                  variants={fadeUp}
                  custom={1}
                  className="text-gray-500 text-lg max-w-xl mx-auto"
               >
                  Our AI engine is trained on thousands of audited contracts and
                  known exploit patterns.
               </motion.p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
               {vulnerabilities.map((v, i) => (
                  <VulnerabilityCard key={v.name} {...v} i={i} />
               ))}
            </div>
         </div>
      </Section>
   );
}

/* ─── Credit System ─── */
function CreditSystem() {
   return (
      <Section className="py-28 px-6">
         <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
               <GlowBadge>
                  <FaWallet /> Credit System
               </GlowBadge>
               <motion.h2
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-black text-white mb-4"
               >
                  Simple, Transparent Credits
               </motion.h2>
               <motion.p
                  variants={fadeUp}
                  custom={1}
                  className="text-gray-500 text-lg max-w-lg mx-auto"
               >
                  No subscriptions. Pay only for what you use. Start for free.
               </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
               {/* Credit cards */}
               <div className="space-y-4">
                  <motion.div
                     variants={fadeUp}
                     className="p-6 rounded-2xl bg-white/5 border border-white/10"
                  >
                     <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-400 text-sm">
                           Starting Balance
                        </span>
                        <span className="text-2xl font-black text-white">
                           100{" "}
                           <span className="text-cyan-400 text-base font-normal">
                              credits
                           </span>
                        </span>
                     </div>
                     <p className="text-gray-500 text-xs">
                        Every new account gets 100 free credits. No credit card
                        required.
                     </p>
                  </motion.div>

                  <motion.div
                     variants={fadeUp}
                     custom={1}
                     className="p-6 rounded-2xl bg-white/5 border border-white/10"
                  >
                     <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-400 text-sm">
                           Per Audit Cost
                        </span>
                        <span className="text-2xl font-black text-white">
                           20{" "}
                           <span className="text-cyan-400 text-base font-normal">
                              credits
                           </span>
                        </span>
                     </div>
                     <p className="text-gray-500 text-xs">
                        Each audit deducts 20 credits. 100 free credits = 5 free
                        audits.
                     </p>
                  </motion.div>

                  <motion.div
                     variants={fadeUp}
                     custom={2}
                     className="p-6 rounded-2xl bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/25"
                  >
                     <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-400 text-sm">
                           Need More?
                        </span>
                        <span className="text-cyan-400 text-sm font-bold">
                           Upgrade →
                        </span>
                     </div>
                     <p className="text-gray-500 text-xs">
                        Top up credits or unlock unlimited audits with Pro plan.
                     </p>
                  </motion.div>
               </div>

               {/* Visual credit tracker */}
               <motion.div
                  variants={fadeUp}
                  custom={1}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
               >
                  <div className="flex items-center justify-between mb-6">
                     <h4 className="text-white font-bold">Credit Dashboard</h4>
                     <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full">
                        Live Preview
                     </span>
                  </div>

                  {/* Balance ring visual */}
                  <div className="flex items-center justify-center mb-8">
                     <div className="relative">
                        <svg width="140" height="140" viewBox="0 0 140 140">
                           <circle
                              cx="70"
                              cy="70"
                              r="58"
                              fill="none"
                              stroke="rgba(255,255,255,0.06)"
                              strokeWidth="10"
                           />
                           <circle
                              cx="70"
                              cy="70"
                              r="58"
                              fill="none"
                              stroke="url(#creditGrad)"
                              strokeWidth="10"
                              strokeLinecap="round"
                              strokeDasharray={`${2 * Math.PI * 58 * 0.6} ${2 * Math.PI * 58 * 0.4}`}
                              strokeDashoffset={2 * Math.PI * 58 * 0.25}
                              className="transition-all duration-1000"
                           />
                           <defs>
                              <linearGradient
                                 id="creditGrad"
                                 x1="0%"
                                 y1="0%"
                                 x2="100%"
                                 y2="0%"
                              >
                                 <stop offset="0%" stopColor="#06b6d4" />
                                 <stop offset="100%" stopColor="#3b82f6" />
                              </linearGradient>
                           </defs>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                           <span className="text-3xl font-black text-white">
                              60
                           </span>
                           <span className="text-gray-500 text-xs">of 100</span>
                        </div>
                     </div>
                  </div>

                  {/* Transaction list */}
                  <div className="space-y-2">
                     {[
                        {
                           label: "Signup Bonus",
                           amount: "+100",
                           color: "text-emerald-400",
                           time: "Jan 1",
                        },
                        {
                           label: "Audit: MyToken.sol",
                           amount: "-20",
                           color: "text-red-400",
                           time: "Jan 3",
                        },
                        {
                           label: "Audit: Staking.sol",
                           amount: "-20",
                           color: "text-red-400",
                           time: "Jan 5",
                        },
                     ].map(({ label, amount, color, time }) => (
                        <div
                           key={label}
                           className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                        >
                           <span className="text-gray-400 text-xs">
                              {label}
                           </span>
                           <div className="flex items-center gap-3">
                              <span className="text-gray-600 text-xs">
                                 {time}
                              </span>
                              <span className={`text-xs font-bold ${color}`}>
                                 {amount}
                              </span>
                           </div>
                        </div>
                     ))}
                  </div>
               </motion.div>
            </div>
         </div>
      </Section>
   );
}

/* ─── Blockchain Verification ─── */
function BlockchainVerification() {
   const mockHash =
      "0x3f9a2b1c4e8d7f6a5b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a";

   return (
      <Section className="py-28 px-6 bg-black relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.07),transparent_60%)]" />
         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

         <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
               <GlowBadge>
                  <FaEthereum /> On-Chain Proof
               </GlowBadge>
               <motion.h2
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-black text-white mb-4"
               >
                  Immutable Audit Records
               </motion.h2>
               <motion.p
                  variants={fadeUp}
                  custom={1}
                  className="text-gray-500 text-lg max-w-xl mx-auto"
               >
                  Every audit generates a unique transaction hash stored forever
                  on Ethereum Sepolia. Trust, verified.
               </motion.p>
            </div>

            <motion.div
               variants={fadeUp}
               custom={1}
               className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden"
            >
               {/* Explorer header */}
               <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
                  <div className="flex items-center gap-3">
                     <FaEthereum className="text-cyan-400" />
                     <span className="text-white font-semibold text-sm">
                        Sepolia Etherscan
                     </span>
                     <span className="px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 text-[10px] border border-cyan-500/25">
                        Testnet
                     </span>
                  </div>
                  <div className="flex items-center gap-2">
                     <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                     <span className="text-gray-500 text-xs">Connected</span>
                  </div>
               </div>

               <div className="p-6 space-y-4">
                  {/* Tx hash */}
                  <div className="p-4 rounded-xl bg-black/60 border border-white/10">
                     <p className="text-gray-500 text-xs mb-2">
                        Transaction Hash
                     </p>
                     <p className="text-cyan-400 font-mono text-sm break-all">
                        {mockHash}
                     </p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                     {[
                        {
                           label: "Status",
                           value: "✓ Success",
                           color: "text-emerald-400",
                        },
                        {
                           label: "Block",
                           value: "#5,847,293",
                           color: "text-white",
                        },
                        {
                           label: "Network",
                           value: "Sepolia",
                           color: "text-white",
                        },
                     ].map(({ label, value, color }) => (
                        <div
                           key={label}
                           className="p-4 rounded-xl bg-black/60 border border-white/10"
                        >
                           <p className="text-gray-500 text-xs mb-1">{label}</p>
                           <p className={`font-semibold text-sm ${color}`}>
                              {value}
                           </p>
                        </div>
                     ))}
                  </div>

                  <div className="p-4 rounded-xl bg-black/60 border border-white/10">
                     <p className="text-gray-500 text-xs mb-2">
                        Audit Payload (IPFS Hash)
                     </p>
                     <p className="text-gray-300 font-mono text-xs">
                        QmX7f4vKa3bB8mK2pNqR9dW1jLcEhG5sT6uY0nH3oP4zA
                     </p>
                  </div>

                  {/* Animated nodes */}
                  <div className="relative h-24 overflow-hidden rounded-xl bg-black/60 border border-white/10 flex items-center justify-center gap-0">
                     {[...Array(6)].map((_, i) => (
                        <motion.div
                           key={i}
                           className="flex items-center"
                           initial={{ opacity: 0.3 }}
                           animate={{ opacity: [0.3, 1, 0.3] }}
                           transition={{
                              duration: 2,
                              delay: i * 0.3,
                              repeat: Infinity,
                           }}
                        >
                           <div className="w-8 h-8 rounded-full border border-cyan-500/50 bg-cyan-500/10 flex items-center justify-center">
                              <FaCubes className="text-cyan-400 text-xs" />
                           </div>
                           {i < 5 && (
                              <motion.div
                                 className="w-8 h-px bg-cyan-500/40"
                                 initial={{ scaleX: 0 }}
                                 animate={{ scaleX: 1 }}
                                 transition={{
                                    duration: 0.5,
                                    delay: i * 0.3 + 0.2,
                                 }}
                              />
                           )}
                        </motion.div>
                     ))}
                     <div className="absolute bottom-2 left-0 right-0 text-center text-gray-600 text-[10px]">
                        Block propagation across Ethereum Sepolia nodes
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </Section>
   );
}

/* ─── Dashboard Preview ─── */
function DashboardPreview() {
   const reports = [
      {
         name: "MyToken.sol",
         risk: "Critical",
         vulns: 3,
         hash: "0x3f9a...",
         date: "May 9",
      },
      {
         name: "Staking.sol",
         risk: "Medium",
         vulns: 1,
         hash: "0x9b2c...",
         date: "May 7",
      },
      {
         name: "Governance.sol",
         risk: "Low",
         vulns: 0,
         hash: "0x1d5e...",
         date: "May 5",
      },
   ];
   const riskColor = {
      Critical: "text-red-400 bg-red-500/10",
      Medium: "text-yellow-400 bg-yellow-500/10",
      Low: "text-emerald-400 bg-emerald-500/10",
   };

   return (
      <Section className="py-28 px-6">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
               <GlowBadge>
                  <FaChartBar /> Dashboard
               </GlowBadge>
               <motion.h2
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-black text-white mb-4"
               >
                  Your Security Command Center
               </motion.h2>
               <motion.p
                  variants={fadeUp}
                  custom={1}
                  className="text-gray-500 text-lg max-w-lg mx-auto"
               >
                  Track audits, manage credits, and access on-chain proofs — all
                  in one place.
               </motion.p>
            </div>

            <motion.div
               variants={fadeUp}
               custom={1}
               className="rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden shadow-2xl"
            >
               {/* Dashboard header bar */}
               <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-black/60">
                  <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-500/60" />
                     <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                     <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="text-gray-500 text-xs ml-4">
                     app.auditai.io/dashboard
                  </span>
               </div>

               <div className="p-6">
                  {/* Stat cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                     {[
                        {
                           label: "Credits Left",
                           value: "60",
                           sub: "of 100",
                           color: "text-cyan-400",
                        },
                        {
                           label: "Total Audits",
                           value: "3",
                           sub: "this month",
                           color: "text-white",
                        },
                        {
                           label: "Vulns Found",
                           value: "4",
                           sub: "across all",
                           color: "text-red-400",
                        },
                        {
                           label: "On-Chain TXs",
                           value: "3",
                           sub: "verified",
                           color: "text-emerald-400",
                        },
                     ].map(({ label, value, sub, color }) => (
                        <div
                           key={label}
                           className="p-4 rounded-xl bg-white/5 border border-white/10"
                        >
                           <p className="text-gray-500 text-xs mb-1">{label}</p>
                           <p className={`text-2xl font-black ${color}`}>
                              {value}
                           </p>
                           <p className="text-gray-600 text-[11px]">{sub}</p>
                        </div>
                     ))}
                  </div>

                  {/* Audit reports table */}
                  <div className="rounded-2xl border border-white/10 overflow-hidden">
                     <div className="grid grid-cols-5 gap-4 px-5 py-3 bg-white/5 border-b border-white/10">
                        {[
                           "Contract",
                           "Risk Level",
                           "Vulnerabilities",
                           "Tx Hash",
                           "Date",
                        ].map((h) => (
                           <span
                              key={h}
                              className="text-gray-500 text-xs font-medium"
                           >
                              {h}
                           </span>
                        ))}
                     </div>
                     {reports.map(({ name, risk, vulns, hash, date }) => (
                        <div
                           key={name}
                           className="grid grid-cols-5 gap-4 px-5 py-4 border-b border-white/[0.06] last:border-0 hover:bg-white/5 transition-colors"
                        >
                           <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                              <FaCode className="text-gray-600" size={10} />{" "}
                              {name}
                           </span>
                           <span
                              className={`text-xs font-bold px-2 py-0.5 rounded-full w-fit ${riskColor[risk]}`}
                           >
                              {risk}
                           </span>
                           <span className="text-gray-400 text-xs">
                              {vulns} found
                           </span>
                           <span className="text-cyan-400 font-mono text-xs">
                              {hash}
                           </span>
                           <span className="text-gray-500 text-xs">{date}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </motion.div>
         </div>
      </Section>
   );
}

/* ─── Testimonials ─── */
const testimonials = [
   {
      name: "Alex Mercer",
      role: "DeFi Protocol Founder",
      company: "QuantumSwap",
      text: "AuditAI caught a critical reentrancy flaw in our liquidity pool before mainnet launch. The on-chain proof gave our investors the transparency they needed. Absolutely essential.",
      stars: 5,
   },
   {
      name: "Sophia Chen",
      role: "Blockchain Security Engineer",
      company: "CertiBlock Labs",
      text: "I've used multiple auditing tools, but none match the depth of AuditAI's vulnerability detection. The gas optimization suggestions alone saved us thousands in deployment costs.",
      stars: 5,
   },
   {
      name: "Rahul Patel",
      role: "Web3 Startup CTO",
      company: "NovaBridge DAO",
      text: "The credit system is brilliant. We get high-quality AI audits without the $50k price tag of a traditional audit firm. Our DAO treasury audits are now verifiable on Sepolia.",
      stars: 5,
   },
];

function Testimonials() {
   return (
      <Section className="py-28 px-6 bg-black relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.05),transparent_50%)]" />
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
               <GlowBadge>
                  <FaStar /> Trusted By Builders
               </GlowBadge>
               <motion.h2
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-black text-white mb-4"
               >
                  What Founders Are Saying
               </motion.h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
               {testimonials.map(({ name, role, company, text, stars }, i) => (
                  <motion.div
                     key={name}
                     variants={fadeUp}
                     custom={i * 0.4}
                     whileHover={{ y: -4 }}
                     className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-cyan-500/20 transition-all duration-300"
                  >
                     <FaQuoteLeft className="text-cyan-500/40 text-2xl mb-4" />
                     <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {text}
                     </p>
                     <div className="flex items-center gap-0.5 mb-4">
                        {[...Array(stars)].map((_, j) => (
                           <FaStar key={j} className="text-cyan-400 text-xs" />
                        ))}
                     </div>
                     <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                           {name[0]}
                        </div>
                        <div>
                           <p className="text-white text-sm font-semibold">
                              {name}
                           </p>
                           <p className="text-gray-600 text-xs">
                              {role} · {company}
                           </p>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </Section>
   );
}

/* ─── Final CTA ─── */
function FinalCTA() {
   return (
      <Section className="py-28 px-6">
         <div className="max-w-4xl mx-auto">
            <motion.div
               variants={fadeUp}
               className="relative rounded-3xl overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.07] via-transparent to-blue-500/[0.05] p-14 text-center"
            >
               {/* Decorative glow */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-cyan-500/10 blur-3xl" />

               <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-6"
               >
                  <FaShieldAlt /> Start For Free
               </motion.div>

               <motion.h2
                  variants={fadeUp}
                  custom={1}
                  className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight"
               >
                  Ship Secure Contracts.
                  <br />
                  <span className="text-cyan-400">Every Single Time.</span>
               </motion.h2>

               <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="text-gray-500 text-lg mb-10 max-w-lg mx-auto"
               >
                  Join builders who trust AuditAI to secure their protocols. 100
                  free credits. No card required. On-chain proof included.
               </motion.p>

               <motion.div
                  variants={fadeUp}
                  custom={3}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
               >
                  <Link
                     to="/signup"
                     className="group px-8 py-4 bg-cyan-500 text-black rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:shadow-[0_0_60px_rgba(34,211,238,0.8)] hover:bg-cyan-400 transition-all duration-300"
                  >
                     Start Free Audit — 100 Credits
                     <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                     to="/login"
                     className="px-8 py-4 border border-white/15 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all font-medium flex items-center justify-center"
                  >
                     Sign In
                  </Link>
               </motion.div>
            </motion.div>
         </div>
      </Section>
   );
}

/* ─── Main Landing ─── */
export default function Landing() {
   return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
         <Navbar />
         <HeroSection />
         <HowItWorks />
         <VulnerabilitiesSection />
         <CreditSystem />
         <BlockchainVerification />
         <DashboardPreview />
         <Testimonials />
         <FinalCTA />
         <Footer />
      </div>
   );
}
