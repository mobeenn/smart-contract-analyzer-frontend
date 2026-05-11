import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
   FaFire,
   FaLock,
   FaExclamationTriangle,
   FaBolt,
   FaShieldAlt,
   FaLink,
   FaGasPump,
   FaRobot,
   FaEthereum,
   FaFileAlt,
   FaCode,
   FaArrowRight,
   FaCheckCircle,
   FaChartBar,
   FaUserShield,
} from "react-icons/fa";
import { MdSpeed, MdSecurity } from "react-icons/md";
import { SiSolidity } from "react-icons/si";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── Animation helpers ────────────────────────────────────────────────────────
const fadeUp = {
   hidden: { opacity: 0, y: 40 },
   visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
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

// ─── Hero ─────────────────────────────────────────────────────────────────────
function FeaturesHero() {
   return (
      <section className="relative pt-36 pb-24 px-6 overflow-hidden bg-black">
         <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full" />
            <div
               className="absolute inset-0 opacity-[0.03]"
               style={{
                  backgroundImage:
                     "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
               }}
            />
         </div>

         <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-6"
            >
               <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
               Full Feature Overview
            </motion.div>

            <motion.h1
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7, delay: 0.1 }}
               className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6"
            >
               Everything You Need to{" "}
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Ship Secure
               </span>{" "}
               Contracts
            </motion.h1>

            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.25 }}
               className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            >
               AuditAI combines Gemini AI with blockchain verification to give
               you enterprise-grade smart contract security — in seconds, not
               weeks.
            </motion.p>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.35 }}
               className="flex flex-wrap justify-center gap-4"
            >
               <Link
                  to="/signup"
                  className="group px-7 py-3.5 bg-cyan-500 text-black rounded-xl font-bold flex items-center gap-2 shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.8)] hover:bg-cyan-400 transition-all duration-300 text-sm"
               >
                  Start Free — 100 Credits
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
               </Link>
               <Link
                  to="/pricing"
                  className="px-7 py-3.5 border border-white/15 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium flex items-center gap-2 transition-all text-sm"
               >
                  View Pricing
               </Link>
            </motion.div>
         </div>
      </section>
   );
}

// ─── Core Detection Engine ────────────────────────────────────────────────────
const vulns = [
   {
      icon: FaFire,
      name: "Reentrancy Attacks",
      severity: "Critical",
      desc: "Detects recursive external call patterns that drain funds before state updates. Catches both single-function and cross-function reentrancy.",
      color: "text-red-400",
      bg: "bg-red-500/8",
      border: "border-red-500/20",
   },
   {
      icon: FaLock,
      name: "Access Control Flaws",
      severity: "High",
      desc: "Identifies missing onlyOwner guards, unprotected initializers, and privilege escalation vectors that expose admin functions.",
      color: "text-orange-400",
      bg: "bg-orange-500/8",
      border: "border-orange-500/20",
   },
   {
      icon: FaExclamationTriangle,
      name: "Integer Overflow / Underflow",
      severity: "High",
      desc: "Catches arithmetic edge cases that bypass SafeMath protections, including unchecked blocks in Solidity 0.8+.",
      color: "text-yellow-400",
      bg: "bg-yellow-500/8",
      border: "border-yellow-500/20",
   },
   {
      icon: FaBolt,
      name: "Flash Loan Exploits",
      severity: "Critical",
      desc: "Spots price oracle manipulation vectors, sandwich attack surfaces, and TWAP bypass patterns common in DeFi protocols.",
      color: "text-red-400",
      bg: "bg-red-500/8",
      border: "border-red-500/20",
   },
   {
      icon: MdSpeed,
      name: "Front Running (MEV)",
      severity: "Medium",
      desc: "Detects transaction ordering dependencies, commit-reveal pattern violations, and MEV-extractable state transitions.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/8",
      border: "border-cyan-500/20",
   },
   {
      icon: FaShieldAlt,
      name: "Denial of Service",
      severity: "High",
      desc: "Catches gas limit attacks, block stuffing vectors, unbounded loops, and push-over-pull payment anti-patterns.",
      color: "text-orange-400",
      bg: "bg-orange-500/8",
      border: "border-orange-500/20",
   },
   {
      icon: FaLink,
      name: "Unsafe External Calls",
      severity: "Medium",
      desc: "Analyzes untrusted delegate calls, return value ignoring, low-level call misuse, and callback exploit surfaces.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/8",
      border: "border-cyan-500/20",
   },
   {
      icon: FaGasPump,
      name: "Gas Optimization",
      severity: "Info",
      desc: "Suggests storage packing, calldata vs memory optimizations, loop refactoring, and event emission improvements.",
      color: "text-blue-400",
      bg: "bg-blue-500/8",
      border: "border-blue-500/20",
   },
];

const severityColors = {
   Critical: "text-red-400 bg-red-500/10 border border-red-500/20",
   High: "text-orange-400 bg-orange-500/10 border border-orange-500/20",
   Medium: "text-yellow-400 bg-yellow-500/10 border border-yellow-500/20",
   Info: "text-blue-400 bg-blue-500/10 border border-blue-500/20",
};

function DetectionEngine() {
   return (
      <Section className="py-28 px-6 bg-black relative">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.05),transparent_60%)]" />
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
               <GlowBadge>
                  <MdSecurity /> Detection Engine
               </GlowBadge>
               <motion.h2
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-black text-white mb-4"
               >
                  8 Vulnerability Classes
               </motion.h2>
               <motion.p
                  variants={fadeUp}
                  custom={1}
                  className="text-gray-500 text-lg max-w-xl mx-auto"
               >
                  Trained on thousands of audited contracts and known exploit
                  patterns — from The DAO to the latest DeFi hacks.
               </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
               {vulns.map(
                  (
                     { icon: Icon, name, severity, desc, color, bg, border },
                     i,
                  ) => (
                     <motion.div
                        key={name}
                        variants={fadeUp}
                        custom={i * 0.2}
                        whileHover={{ y: -4, scale: 1.02 }}
                        className={`p-5 rounded-2xl border ${border} ${bg} backdrop-blur-sm group cursor-default transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]`}
                     >
                        <div className="flex items-start justify-between mb-3">
                           <div
                              className={`p-2.5 rounded-xl ${bg} border ${border}`}
                           >
                              <Icon className={`${color} text-lg`} />
                           </div>
                           <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${severityColors[severity]}`}
                           >
                              {severity}
                           </span>
                        </div>
                        <h4 className="text-white font-bold text-sm mb-1.5">
                           {name}
                        </h4>
                        <p className="text-gray-500 text-xs leading-relaxed">
                           {desc}
                        </p>
                     </motion.div>
                  ),
               )}
            </div>
         </div>
      </Section>
   );
}

// ─── Platform Capabilities ────────────────────────────────────────────────────
const capabilities = [
   {
      icon: FaRobot,
      title: "Gemini AI Core",
      desc: "Powered by Google's Gemini model, fine-tuned on Solidity vulnerability patterns. Understands contract context — not just line-by-line syntax checks.",
      points: [
         "Contextual vulnerability reasoning",
         "Cross-function data flow analysis",
         "Explains findings in plain English",
      ],
      gradient: "from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-500/20",
   },
   {
      icon: FaEthereum,
      title: "On-Chain Verification",
      desc: "Every audit result is hashed and stored immutably on Ethereum Sepolia. Your audit report has a permanent, tamper-proof blockchain record.",
      points: [
         "Unique tx hash per audit",
         "Verifiable on Etherscan",
         "IPFS payload storage",
      ],
      gradient: "from-blue-500/20 to-violet-500/20",
      border: "border-blue-500/20",
   },
   {
      icon: FaFileAlt,
      title: "Detailed Reports",
      desc: "More than a list of issues. Each finding includes severity rating, affected code lines, exploit scenario, and step-by-step remediation guidance.",
      points: [
         "Severity-rated findings",
         "Code-level annotations",
         "Fix recommendations",
      ],
      gradient: "from-violet-500/20 to-purple-500/20",
      border: "border-violet-500/20",
   },
   {
      icon: FaChartBar,
      title: "Security Dashboard",
      desc: "Track every audit across your portfolio. Monitor credit usage, review historical reports, and access on-chain proofs — all from one command center.",
      points: [
         "Audit history & trends",
         "Credit usage tracker",
         "One-click Etherscan links",
      ],
      gradient: "from-purple-500/20 to-cyan-500/20",
      border: "border-purple-500/20",
   },
];

function PlatformCapabilities() {
   return (
      <Section className="py-28 px-6 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.04),transparent_60%)]" />
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
               <GlowBadge>
                  <FaShieldAlt /> Platform
               </GlowBadge>
               <motion.h2
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-black text-white mb-4"
               >
                  Built for Serious Builders
               </motion.h2>
               <motion.p
                  variants={fadeUp}
                  custom={1}
                  className="text-gray-500 text-lg max-w-xl mx-auto"
               >
                  Every layer of AuditAI is designed for the Web3 security
                  workflow — from audit to proof to fix.
               </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               {capabilities.map(
                  (
                     { icon: Icon, title, desc, points, gradient, border },
                     i,
                  ) => (
                     <motion.div
                        key={title}
                        variants={fadeUp}
                        custom={i * 0.2}
                        whileHover={{ y: -3 }}
                        className={`p-7 rounded-2xl bg-gradient-to-br ${gradient} border ${border} backdrop-blur-sm transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]`}
                     >
                        <div className="flex items-start gap-4 mb-4">
                           <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                              <Icon className="text-cyan-400 text-xl" />
                           </div>
                           <div>
                              <h3 className="text-white font-black text-lg mb-1">
                                 {title}
                              </h3>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                 {desc}
                              </p>
                           </div>
                        </div>
                        <ul className="space-y-2 mt-4 border-t border-white/5 pt-4">
                           {points.map((p) => (
                              <li
                                 key={p}
                                 className="flex items-center gap-2 text-sm text-gray-400"
                              >
                                 <FaCheckCircle
                                    className="text-cyan-500 shrink-0"
                                    size={11}
                                 />
                                 {p}
                              </li>
                           ))}
                        </ul>
                     </motion.div>
                  ),
               )}
            </div>
         </div>
      </Section>
   );
}

// ─── Tech Stack ───────────────────────────────────────────────────────────────
const stack = [
   { icon: FaRobot, name: "Gemini AI", desc: "Vulnerability analysis engine" },
   {
      icon: SiSolidity,
      name: "Solidity Parser",
      desc: "AST-level code understanding",
   },
   {
      icon: FaEthereum,
      name: "Ethereum Sepolia",
      desc: "Immutable audit storage",
   },
   { icon: FaCode, name: "IPFS", desc: "Decentralized report hosting" },
   {
      icon: FaShieldAlt,
      name: "Keccak-256 Hashing",
      desc: "Tamper-proof audit fingerprint",
   },
   { icon: FaUserShield, name: "JWT Auth", desc: "Secure session management" },
];

function TechStack() {
   return (
      <Section className="py-24 px-6 bg-black relative">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.04),transparent_60%)]" />
         <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
               <GlowBadge>
                  <FaCode /> Technology
               </GlowBadge>
               <motion.h2
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-black text-white mb-4"
               >
                  Powered by Best-in-Class Tech
               </motion.h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               {stack.map(({ icon: Icon, name, desc }, i) => (
                  <motion.div
                     key={name}
                     variants={fadeUp}
                     custom={i * 0.15}
                     whileHover={{ scale: 1.03 }}
                     className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/25 transition-all duration-300 group"
                  >
                     <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                           <Icon className="text-cyan-400" size={16} />
                        </div>
                        <span className="text-white font-bold text-sm">
                           {name}
                        </span>
                     </div>
                     <p className="text-gray-600 text-xs">{desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </Section>
   );
}

// ─── Speed Benchmark ─────────────────────────────────────────────────────────
const benchmarks = [
   {
      label: "AuditAI",
      time: "< 10s",
      bar: 98,
      color: "bg-cyan-400",
      highlight: true,
   },
   {
      label: "Traditional Firm",
      time: "2–4 wks",
      bar: 4,
      color: "bg-gray-600",
      highlight: false,
   },
   {
      label: "Manual Review",
      time: "3–7 days",
      bar: 8,
      color: "bg-gray-700",
      highlight: false,
   },
   {
      label: "Basic Linters",
      time: "~30s",
      bar: 70,
      color: "bg-blue-700/60",
      highlight: false,
   },
];

function SpeedBenchmark() {
   return (
      <Section className="py-28 px-6 relative">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.05),transparent_60%)]" />
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
               <GlowBadge>
                  <MdSpeed /> Performance
               </GlowBadge>
               <motion.h2
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-black text-white mb-4"
               >
                  Security at the Speed of Development
               </motion.h2>
               <motion.p
                  variants={fadeUp}
                  custom={1}
                  className="text-gray-500 text-lg max-w-xl mx-auto"
               >
                  Don't wait weeks for audit firms. Get AI-grade analysis in the
                  time it takes to brew coffee.
               </motion.p>
            </div>

            <motion.div
               variants={fadeUp}
               custom={1}
               className="p-8 rounded-3xl bg-white/[0.03] border border-white/10"
            >
               <div className="space-y-5">
                  {benchmarks.map(
                     ({ label, time, bar, color, highlight }, i) => (
                        <motion.div
                           key={label}
                           variants={fadeUp}
                           custom={i * 0.2}
                        >
                           <div className="flex items-center justify-between mb-2">
                              <span
                                 className={`text-sm font-semibold ${highlight ? "text-cyan-400" : "text-gray-400"}`}
                              >
                                 {label}
                                 {highlight && (
                                    <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/25 text-cyan-400 font-bold uppercase tracking-wide">
                                       You are here
                                    </span>
                                 )}
                              </span>
                              <span
                                 className={`text-sm font-bold ${highlight ? "text-white" : "text-gray-600"}`}
                              >
                                 {time}
                              </span>
                           </div>
                           <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                              <motion.div
                                 className={`h-full ${color} rounded-full ${highlight ? "shadow-[0_0_12px_rgba(34,211,238,0.6)]" : ""}`}
                                 initial={{ width: 0 }}
                                 whileInView={{ width: `${bar}%` }}
                                 viewport={{ once: true }}
                                 transition={{
                                    duration: 1,
                                    delay: i * 0.1,
                                    ease: "easeOut",
                                 }}
                              />
                           </div>
                        </motion.div>
                     ),
                  )}
               </div>
               <p className="text-gray-700 text-xs mt-6 text-center">
                  * Speed comparison is indicative. Traditional firm timelines
                  vary by contract complexity.
               </p>
            </motion.div>
         </div>
      </Section>
   );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function FeaturesCTA() {
   return (
      <Section className="py-28 px-6 bg-black">
         <div className="max-w-4xl mx-auto">
            <motion.div
               variants={fadeUp}
               className="relative rounded-3xl overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.07] via-transparent to-blue-500/[0.05] p-14 text-center"
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-cyan-500/10 blur-3xl" />

               <motion.h2
                  variants={fadeUp}
                  custom={1}
                  className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight"
               >
                  Ready to Audit?
                  <br />
                  <span className="text-cyan-400">
                     Start with 100 Free Credits.
                  </span>
               </motion.h2>
               <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="text-gray-500 text-lg mb-10 max-w-lg mx-auto"
               >
                  No card. No waiting. Just paste your contract and get a
                  blockchain-verified report in seconds.
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
                     Get Started Free
                     <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                     to="/pricing"
                     className="px-8 py-4 border border-white/15 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all font-medium flex items-center justify-center"
                  >
                     See Pricing Plans
                  </Link>
               </motion.div>
            </motion.div>
         </div>
      </Section>
   );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Features() {
   return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
         <Navbar />
         <FeaturesHero />
         <DetectionEngine />
         <PlatformCapabilities />
         <TechStack />
         <SpeedBenchmark />
         <FeaturesCTA />
         <Footer />
      </div>
   );
}
